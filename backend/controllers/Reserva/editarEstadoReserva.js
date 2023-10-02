import { ESTADOS_RESERVAS } from '../../constantes.js'
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
      return res.status(400).json({ error: 'Estado inválido' })
    }
    const reserva = await Reserva.findById(reservaId)
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' })
    }
    reserva.estado = estado
    await reserva.save()
    const mensaje = `Nuevo estado de reserva a ${estado}`
    return res.status(200).json({ mensaje, reserva })
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar la reserva' })
  }
}
