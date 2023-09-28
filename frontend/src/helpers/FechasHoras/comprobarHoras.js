import { ESTADOS_RESERVAS } from '../../constantes'
export const comprobarHoras = (event, dia, reservasDia) => {
	if (
		event.target.className.includes(ESTADOS_RESERVAS.pendiente) ||
		event.target.className.includes(ESTADOS_RESERVAS.pago)
	) {
		return false
	}
	const proximaMediaHora = new Date(`${dia}`)
	proximaMediaHora.setMinutes(proximaMediaHora.getMinutes() + 30)
	const proximaHoraNoDisponible = reservasDia.find((reserva) => {
		return (
			new Date(reserva.horario.horaInicio).toISOString() ===
				new Date(proximaMediaHora).toISOString() &&
			reserva.estado !== ESTADOS_RESERVAS.cancelada
		)
	})
	if (proximaHoraNoDisponible) {
		return false
	}
	return true
}
