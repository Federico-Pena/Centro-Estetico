import { ESTADOS_RESERVAS } from '../constantes.js'

export function calcularGanancias(arrayReservas) {
	if (arrayReservas instanceof Array) {
		const counts = arrayReservas.reduce(
			(acc, reserva) => {
				if (reserva.estado === ESTADOS_RESERVAS.pago) {
					if (reserva.precio && typeof reserva.precio === 'number') {
						acc.total += reserva.precio
					}
				}
				return acc
			},
			{ total: 0 }
		)
		return {
			total: counts.total,
		}
	} else {
		return {
			total: 0,
		}
	}
}
