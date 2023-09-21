import { Reserva } from '../../models/ReservaSchema.js'

export const fechasHorasReservadasDeUnDia = async (req, res) => {
	const fechaParaFiltrar = new Date(req.params.fecha)
	const startOfDay = new Date(fechaParaFiltrar)
	startOfDay.setUTCHours(0, 0, 0, 0)
	const endOfDay = new Date(fechaParaFiltrar)
	endOfDay.setUTCHours(23, 59, 59, 999)
	try {
		const fechasHoras = await Reserva.find({
			fecha: {
				$gte: startOfDay.toISOString(),
				$lte: endOfDay.toISOString(),
			},
		})
			.select('fecha')
			.select('hora')
			.select('horaFin')
			.select('estado')
		res.json({
			fechasHoras,
		})
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener las reservas.' })
	}
}
