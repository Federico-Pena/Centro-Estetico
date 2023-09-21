import { Reserva } from '../../models/ReservaSchema.js'

export const obtenerDiasConReservas = async (req, res) => {
	const { mes } = req.params
	const año = new Date().getFullYear()
	const mesInicio = mes
	const mesFin = mes === '12' ? '01' : (parseInt(mes) + 1).toString()
	const añoFin = mes === '12' ? (año + 1).toString() : año.toString()
	try {
		const reservasDuplicadas = await Reserva.find({
			fecha: {
				$gte: new Date(`${año}-${mesInicio}-01`),
				$lt: new Date(`${añoFin}-${mesFin}-01`),
			},
		})
			.sort({ fecha: -1 })
			.select('fecha')
		const fechasÚnicas = reservasDuplicadas
			.map((reserva) => reserva.fecha.toISOString())
			.filter((fecha, index, self) => self.indexOf(fecha) === index)
		const fechas = fechasÚnicas.map((fecha) => {
			return {
				fecha: fecha,
			}
		})
		res.json({ fechas, cantidad: fechas.length })
	} catch (error) {
		res.status(500).json({ mensaje: 'Error al obtener las fechas' })
	}
}
