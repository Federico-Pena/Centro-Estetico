import { Reserva } from '../../models/ReservaSchema.js'
const comienzoYFinSemana = (fecha) => {
	const fechaParaFiltrar = new Date(fecha)
	const diasSemana = fechaParaFiltrar.getUTCDay()
	const diasHastaLunes = diasSemana === 0 ? 6 : diasSemana - 1
	const diasHastaDomingo = 7 - diasSemana
	const lunes = new Date(fechaParaFiltrar)
	lunes.setUTCDate(fechaParaFiltrar.getUTCDate() - diasHastaLunes)
	const domingo = new Date(fechaParaFiltrar)
	domingo.setUTCDate(fechaParaFiltrar.getUTCDate() + diasHastaDomingo)
	return { lunes, domingo }
}

export const obtenerReservasDeLaSemana = async (req, res) => {
	const { lunes, domingo } = comienzoYFinSemana(req.params.fecha)

	try {
		const reservas = await Reserva.find({
			'horario.horaInicio': { $gte: lunes, $lt: domingo },
		})
		res.json({
			reservas,
		})
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Error al obtener las reservas de la semana.' })
	}
}
