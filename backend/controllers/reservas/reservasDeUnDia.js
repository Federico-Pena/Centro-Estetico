import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Reserva } from '../../models/ReservaSchema.js'

export const reservasDeUnDia = async (req, res, next) => {
  try {
    const fecha = req.params.fecha
    const fechaParaFiltrar = new Date(fecha)
    if (!fecha || !fechaParaFiltrar) {
      const response = {
        error: 'Fecha invalida',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const startOfDay = new Date(fechaParaFiltrar)
    startOfDay.setUTCHours(0, 0, 0, 0)
    const endOfDay = new Date(fechaParaFiltrar)
    endOfDay.setUTCHours(23, 59, 59, 999)
    const fechasHoras = await Reserva.find({
      'horario.horaInicio': {
        $gte: startOfDay.toISOString(),
        $lte: endOfDay.toISOString()
      }
    })
      .select('horario')
      .select('estado')
    if (!fechasHoras || !fechasHoras.length) {
      const response = {
        datos: [],
        status: 200,
        res
      }
      return crearRespuestaJSON(response)
    } else {
      const response = {
        datos: fechasHoras,
        status: 200,
        res
      }
      return crearRespuestaJSON(response)
    }
  } catch (error) {
    const response = {
      error: 'Ocurrió un error inesperado',
      status: 500,
      res
    }
    crearRespuestaJSON(response)
  }
}
