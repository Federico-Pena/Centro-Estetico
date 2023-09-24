import { ESTADOS_RESERVAS } from '../constantes.js'

export function contadorEstados(arrayReservas) {
	if (arrayReservas instanceof Array) {
		const counts = arrayReservas.reduce(
			(acc, reserva) => {
				if (reserva.estado === ESTADOS_RESERVAS.pago) {
					acc.terminadas++
				} else if (reserva.estado === ESTADOS_RESERVAS.cancelada) {
					acc.canceladas++
				} else if (reserva.estado === ESTADOS_RESERVAS.pendiente) {
					acc.pendientes++
				}
				return acc
			},
			{ terminadas: 0, canceladas: 0, pendientes: 0 }
		)
		return {
			reservasCanceladas: counts.canceladas,
			reservasPendientes: counts.pendientes,
			reservasTerminadas: counts.terminadas,
			reservasTodas: counts.canceladas + counts.pendientes + counts.terminadas,
		}
	} else {
		return {
			reservasCanceladas: [],
			reservasPendientes: [],
			reservasTerminadas: [],
			reservasTodas: [],
		}
	}
}
