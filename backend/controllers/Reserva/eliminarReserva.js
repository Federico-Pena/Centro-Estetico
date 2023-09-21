import { Reserva } from '../../models/ReservaSchema.js'
export const eliminarReserva = async (req, res) => {
	try {
		let idReserva = req.params.id
		let reserva = await Reserva.findByIdAndDelete(idReserva)
		if (reserva) {
			return res.status(200).json({
				reserva,
			})
		} else {
			return res
				.status(404)
				.json({ mensaje: 'Reserva no encontrada', idReserva })
		}
	} catch (error) {
		return res
			.status(500)
			.json({ error, mensaje: 'Error al eliminar la reserva' })
	}
}
