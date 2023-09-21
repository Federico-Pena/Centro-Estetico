import { Reserva } from '../../models/ReservaSchema.js'

export const editarReserva = async (req, res) => {
	const { _id, pacienteNombre, fecha, hora, horaFin, observaciones, motivo } =
		req.body

	try {
		const reservaGuardada = await Reserva.findById(_id)
		if (!reservaGuardada) {
			return res.status(404).json({ mensaje: 'La reserva no existe' })
		}
		let reservaNueva = {
			pacienteNombre,
			fecha,
			hora,
			horaFin,
			motivo,
			observaciones,
			estado: 'Pendiente',
		}
		const nuevaReserva = await Reserva.findByIdAndUpdate(
			reservaGuardada._id,
			reservaNueva
		)

		if (!nuevaReserva) {
			return res.status(404).json({ mensaje: 'La reserva no existe' })
		}
		const reserva = await Reserva.findOne(nuevaReserva._id)

		return res.status(200).json({
			reserva,
		})
	} catch (error) {
		return res
			.status(500)
			.json({ error, mensaje: 'Error al editar la reserva' })
	}
}
