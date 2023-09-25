import { contadorEstados } from '../../helpers/contadorEstados.js'
import { contadorMotivos } from '../../helpers/contadorMotivos.js'
import { Reserva } from '../../models/ReservaSchema.js'

export function cambiarFecha(reservas) {
	const reservasNuevas = reservas.map((reserva) => {
		const fechaOriginal = new Date(
			`${reserva.fecha.toISOString().split('T')[0]}T${reserva.hora}:00.000Z`
		)
		const mediaHoraDespues = new Date(fechaOriginal)
		mediaHoraDespues.setMinutes(mediaHoraDespues.getMinutes() + 30)
		reserva.inicio = fechaOriginal
		reserva.fin = mediaHoraDespues
		return reserva
	})
	return reservasNuevas
}

export const estadisticasReservas = async (req, res) => {
	try {
		const { mes } = req.params
		const año = new Date().getFullYear()
		const mesInicio = mes
		const mesFin = mes === '12' ? '01' : (parseInt(mes) + 1).toString()
		const añoFin = mes === '12' ? (año + 1).toString() : año.toString()
		const [reservas, reservasMes] = await Promise.all([
			Reserva.find({ pacienteNombre: { $ne: 'admin' } }),
			Reserva.find({
				fecha: {
					$gte: new Date(`${año}-${mesInicio}-01`),
					$lt: new Date(`${añoFin}-${mesFin}-01`),
				},
				pacienteNombre: { $ne: 'admin' },
			}).select('estado'),
		])
		const estadisticasPaciente = req.estadisticas
		const estadosTodas = contadorEstados(reservas)
		const estadosMes = contadorEstados(reservasMes)
		const reservaMotivo = contadorMotivos(reservas)

		res.status(200).json({
			estadosTodas,
			estadosMes,
			reservaMotivo,
			estadisticasPaciente,
		})
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Ocurrió un error al calcular estadísticas', error })
	}
}
