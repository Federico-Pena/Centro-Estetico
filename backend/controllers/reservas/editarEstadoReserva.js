import { formatFechaParaUser } from '../../../frontend/src/Helpers/formatFechaParaUser.js'
import { formatHoraUser } from '../../../frontend/src/Helpers/formatHoraUser.js'
import { ESTADOS_RESERVAS } from '../../../frontend/src/constantes.js'
import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import { Reserva } from '../../models/ReservaSchema.js'

export const editarEstadoReserva = async (req, res) => {
  try {
    const reservaId = req.params.id
    const { estado } = req.body
    if (
      estado !== ESTADOS_RESERVAS.pago &&
      estado !== ESTADOS_RESERVAS.cancelada &&
      estado !== ESTADOS_RESERVAS.pendiente
    ) {
      const response = {
        error: 'Estado inválido',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const reserva = await Reserva.findById(reservaId)
    if (!reserva) {
      const response = {
        error: 'Reserva no encontrada',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    reserva.estado = estado
    const guardada = await reserva.save()
    const reservaActualizada = await Reserva.findById(guardada._id)
      .populate('paciente', 'nombre')
      .populate('servicio', 'nombre')
      .populate('tratamiento', 'descripcion costoPorSesion sesiones')
    const mensaje = `Reserva de ${reservaActualizada.paciente.nombre} del dia ${formatFechaParaUser(
      reservaActualizada.horario.horaInicio
    )} a las ${formatHoraUser(new Date(reservaActualizada.horario.horaInicio))} cambió a ${
      reservaActualizada.estado
    }`
    const response = {
      mensaje,
      status: 200,
      datos: reservaActualizada,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    const response = {
      error: 'Error al actualizar la reserva',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
