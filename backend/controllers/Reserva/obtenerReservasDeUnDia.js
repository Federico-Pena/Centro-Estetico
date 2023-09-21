import { Reserva } from '../../models/ReservaSchema.js'
export const obtenerReservasDeUnDia = async (req, res) => {
	const fecha = req.params.fecha
	const fechaParaFiltrar = new Date(fecha)
	const startOfDay = new Date(fechaParaFiltrar)
	startOfDay.setUTCHours(0, 0, 0, 0)
	const endOfDay = new Date(fechaParaFiltrar)
	endOfDay.setUTCHours(23, 59, 59, 999)
	try {
		const data = await Reserva.find({
			fecha: {
				$gte: startOfDay.toISOString(),
				$lte: endOfDay.toISOString(),
			},
		})
			.sort({ fecha: -1 })
			.sort({ hora: -1 })
		res.json({
			data,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ mensaje: 'Error al obtener las reservas del dia.' })
	}
}
