import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import { Reserva } from '../../models/ReservaSchema.js'

const inicioYFinMes = (fecha) => {
  const fechaParaFiltrar = new Date(fecha)
  const primerDiaDelMes = new Date(fechaParaFiltrar.getFullYear(), fechaParaFiltrar.getMonth(), 1)
  const ultimoDiaDelMes = new Date(
    fechaParaFiltrar.getFullYear(),
    fechaParaFiltrar.getMonth() + 1,
    0
  )
  return { primerDiaDelMes, ultimoDiaDelMes }
}

export const delMes = async (req, res) => {
  try {
    const { primerDiaDelMes, ultimoDiaDelMes } = inicioYFinMes(req.params.fecha)
    if (!req.params.fecha) {
      const response = {
        error: 'No se proporcionó una fecha',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const reservas = await Reserva.find({
      'horario.horaInicio': { $gte: primerDiaDelMes, $lte: ultimoDiaDelMes }
    })
      .populate('servicio', 'nombre')
      .populate('tratamiento', 'descripcion costoPorSesion sesiones')
      .populate('paciente', 'nombre')
    if (!reservas || reservas.length === 0) {
      const response = {
        error: 'No se encontraron reservas en el mes.',
        status: 404,
        res
      }
      return crearRespuestaJSON(response)
    } else {
      const response = {
        datos: reservas,
        status: 200,
        res
      }
      return crearRespuestaJSON(response)
    }
  } catch (error) {
    const response = {
      error: 'Error al obtener las reservas del mes.',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
