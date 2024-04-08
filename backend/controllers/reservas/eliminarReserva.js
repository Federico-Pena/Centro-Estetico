import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import { Reserva } from '../../models/ReservaSchema.js'

export const eliminarReserva = async (req, res) => {
  try {
    const idReserva = req.params.id
    const reserva = await Reserva.findByIdAndDelete(idReserva)
    if (reserva) {
      const mensaje = 'Reserva eliminada correctamente'
      const response = {
        mensaje,
        status: 200,
        res
      }
      return crearRespuestaJSON(response)
    } else {
      const response = {
        error: 'Reserva no encontrada',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
  } catch (error) {
    const response = {
      error: 'Error al eliminar la reserva',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
