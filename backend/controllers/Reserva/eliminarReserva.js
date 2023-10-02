import { formatFechaParaUser } from '../../../frontend/src/helpers/Formato/formatFechaParaUser.js'
import { formatHoraUser } from '../../../frontend/src/helpers/Formato/formatHoraUser.js'
import { Reserva } from '../../models/ReservaSchema.js'
export const eliminarReserva = async (req, res) => {
  try {
    const idReserva = req.params.id
    const reserva = await Reserva.findByIdAndDelete(idReserva)
    if (reserva) {
      const mensaje = `Reserva borrada de ${reserva.pacienteNombre} el dia ${formatFechaParaUser({ fecha: reserva.horario.horaInicio })} a las  ${formatHoraUser(new Date(reserva.horario.horaInicio))}`
      return res.status(200).json({
        reserva,
        mensaje
      })
    } else {
      return res
        .status(404)
        .json({ error: 'Reserva no encontrada', idReserva })
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error al eliminar la reserva' })
  }
}
