import { Reserva } from '../../models/ReservaSchema.js'

export const obtenerReservasDeUnUsuario = async (req, res) => {
	const idPaciente = req.params.id
	try {
		const reservas = await Reserva.find({ paciente: idPaciente })
		return res.status(200).json(reservas)
	} catch (error) {
		return res.status(500).json({ error: 'Error al obtener las reservas' })
	}
}
