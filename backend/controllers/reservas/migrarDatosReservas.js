import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Reserva } from '../../models/ReservaSchema.js'

export const migraDatosReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find({})
    /*   const conTratamiento = []
    for (const reserva of reservas) {
      if (reserva.tratamientoId) {
        conTratamiento.push(reserva)
      }
    } */
    for (const reserva of reservas) {
      const tratamientoId = reserva.tratamientoId
      if (tratamientoId) {
        await Reserva.findByIdAndUpdate(reserva._id, {
          tratamiento: tratamientoId,
          $unset: { tratamientoId: 1 }
        })
      }
    }
    const reservasNuevas = await Reserva.find({})

    const response = {
      mensaje: 'Todo ok',
      status: 200,
      datos: reservasNuevas,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    console.log(error.message)
    const response = {
      error: 'Ocurrió un error inesperado',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
