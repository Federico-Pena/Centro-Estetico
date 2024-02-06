import { crearRespuestaJSON } from '../../../helpers/crearRespuestaJSON.js'
import { Reserva } from '../../../models/ReservaSchema.js'
import { funcionEstadisticasReservas } from './funcionEstadisticasReservas.js'

export const estadisticasReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find()
      .populate('servicio', 'nombre -_id')
      .populate('tratamiento', 'descripcion costoPorSesion -_id')
      .select('estado')
      .select('horario.horaInicio')
    const datos = funcionEstadisticasReservas(reservas)
    const response = {
      datos,
      status: 200,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    const response = {
      error: 'Ocurrió un error inesperado',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
