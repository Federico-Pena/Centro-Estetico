import { crearRespuestaJSON } from '../../../helpers/crearRespuestaJSON.js'
import { Reserva } from '../../../models/ReservaSchema.js'
import { formatDatosReservasMesYAno } from './formatDatosReservasMesYAno.js'

export const getReservasDelAno = async (req, res) => {
  const { year } = req.params
  const startOfYear = new Date(year, 0, 1)
  const endOfYear = new Date(year, 11, 31)
  try {
    const reservas = await Reserva.find({
      'horario.horaInicio': {
        $gte: startOfYear,
        $lte: endOfYear
      }
    })
      .populate('tratamiento', 'descripcion costoPorSesion')
      .populate('paciente', 'nombre')
      .populate('servicio', 'nombre')
      .select('estado')
      .select('horario.horaInicio')

    if (!reservas) {
      const response = {
        error: 'Error al obtener las reservas del año',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }
    const datos = formatDatosReservasMesYAno(reservas)

    const response = {
      datos,
      status: 200,
      res
    }

    return crearRespuestaJSON(response)
  } catch (err) {
    const response = {
      error: 'Error al obtener las reservas del año',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
