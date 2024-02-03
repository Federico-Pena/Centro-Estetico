import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Reserva } from '../../models/ReservaSchema.js'

export const deUnPaciente = async (req, res) => {
  try {
    const idUser = req.params.id
    const page = parseInt(req.params.pagina) > 1 ? parseInt(req.params.pagina) : 1
    const porPagina = 10
    const reservas = await Reserva.find({ paciente: idUser })
      .populate('paciente', 'nombre')
      .populate('servicio', 'nombre')
      .populate({
        path: 'tratamiento',
        select: 'descripcion costoPorSesion'
      })
      .skip((page - 1) * porPagina)
      .limit(porPagina)
      .sort({ 'horario.horaInicio': -1 })
    const totalReservasEncontradas = await Reserva.countDocuments({ paciente: idUser })
    const totalPages = Math.ceil(totalReservasEncontradas / porPagina)

    if (!reservas || reservas.length === 0) {
      const response = {
        error: 'El paciente no tiene reservas',
        status: 404,
        res
      }
      crearRespuestaJSON(response)
    } else {
      const response = {
        datos: { reservas, totalPages, page, totalReservasEncontradas },
        status: 200,
        res
      }
      crearRespuestaJSON(response)
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
