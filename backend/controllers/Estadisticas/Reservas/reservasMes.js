import { MESES } from '../../../../frontend/src/constantes.js'
import { crearRespuestaJSON } from '../../../Helpers/crearRespuestaJSON.js'
import { Reserva } from '../../../models/ReservaSchema.js'
import { formatDatosReservasMesYAno } from './formatDatosReservasMesYAno.js'
const obtenerIndiceDelMes = (nombreDelMes) => {
  return MESES.indexOf(nombreDelMes)
}
export const getReservasPorMes = async (req, res) => {
  try {
    const { year, month } = req.params
    const mes = obtenerIndiceDelMes(month)
    const startOfMonth = new Date(parseInt(year, 10), mes, 1)
    const endOfMonth = new Date(parseInt(year, 10), mes + 1, 0)
    const reservas = await Reserva.find({
      'horario.horaInicio': {
        $gte: startOfMonth,
        $lte: endOfMonth
      }
    })
      .populate('tratamiento', 'descripcion costoPorSesion')
      .populate('paciente', 'nombre')
      .populate('servicio', 'nombre')
      .select('estado')
      .select('horario.horaInicio')
    if (!reservas) {
      const response = {
        error: 'Error al obtener las reservas del mes',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }
    const datosAno = formatDatosReservasMesYAno(reservas)
    const datos = datosAno.filter((dato) => dato.mes === month)
    const response = {
      datos,
      status: 200,
      res
    }

    return crearRespuestaJSON(response)
  } catch (err) {
    const response = {
      error: 'Error al obtener las reservas del mes',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
