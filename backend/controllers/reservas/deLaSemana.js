import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Reserva } from '../../models/ReservaSchema.js'
const comienzoYFinSemana = (fecha) => {
  const fechaParaFiltrar = new Date(fecha)
  const diasSemana = fechaParaFiltrar.getUTCDay()
  const diasHastaLunes = diasSemana === 0 ? 6 : diasSemana - 1
  const diasHastaDomingo = diasSemana === 0 ? 0 : 7 - diasSemana
  const lunes = new Date(fechaParaFiltrar)
  lunes.setUTCDate(fechaParaFiltrar.getUTCDate() - diasHastaLunes)
  const domingo = new Date(fechaParaFiltrar)
  domingo.setUTCDate(fechaParaFiltrar.getUTCDate() + diasHastaDomingo)
  return { lunes, domingo }
}

export const deLaSemana = async (req, res) => {
  try {
    const { lunes, domingo } = comienzoYFinSemana(req.params.fecha)
    if (!req.params.fecha) {
      const response = {
        error: 'No se proporcionó una fecha',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const reservas = await Reserva.find({
      'horario.horaInicio': { $gte: lunes, $lt: domingo }
    })
      .populate('servicio', 'nombre')
      .populate('tratamiento', 'descripcion costoPorSesion')
      .populate('paciente', 'nombre')
    if (!reservas || reservas.length === 0) {
      const response = {
        error: 'No se encontraron reservas en la semana.',
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
      error: 'Error al obtener las reservas de la semana.',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
