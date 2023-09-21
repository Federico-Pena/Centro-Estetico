import { Reserva } from '../../models/ReservaSchema.js'

export const editarEstadoReserva = async (req, res) => {
	try {
		const reservaId = req.params.id
		const { estado } = req.body
		if (estado !== 'Pago' && estado !== 'Cancelada' && estado !== 'Pendiente') {
			return res.status(400).json({ mensaje: 'Estado inválido' })
		}
		const reserva = await Reserva.findById(reservaId)
		if (!reserva) {
			return res.status(404).json({ mensaje: 'Reserva no encontrada' })
		}
		reserva.estado = estado
		await reserva.save()
		return res
			.status(200)
			.json({ mensaje: `Nuevo estado de reserva a ${estado}`, reserva })
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al actualizar la reserva' })
	}
}
