import { crearRespuestaJSON } from '../../../helpers/crearRespuestaJSON.js'
import { Reserva } from '../../../models/ReservaSchema.js'
import { funcionEstadisticasReservasTodas } from './funcionEstadisticasReservasTodas.js'

export const reservasEstadisticasTodas = async (req, res) => {
  try {
    const reservas = await Reserva.find()
      .populate('servicio', 'nombre imagen -_id ')
      .populate('tratamiento', 'descripcion costoPorSesion -_id')
      .select('estado')
      .select('horario.horaInicio')
    const datos = funcionEstadisticasReservasTodas(reservas)
    const response = {
      datos,
      status: 200,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    console.log(error)
    const response = {
      error: 'Ocurrió un error inesperado',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
