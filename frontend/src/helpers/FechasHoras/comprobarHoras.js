import { ESTADOS_RESERVAS } from '../../constantes'
import { formatHoraUser } from '../Formato/formatHoraUser'

export const comprobarHoras = (event, dia, reservasDia) => {
	if (
		event.target.className.includes(ESTADOS_RESERVAS.pendiente) ||
		event.target.className.includes(ESTADOS_RESERVAS.pago)
	) {
		return false
	}
	const hora = event.target.textContent
	const id = dia + ' ' + hora
	const proximaMediaHora = new Date(id)
	proximaMediaHora.setMinutes(proximaMediaHora.getMinutes() + 30)
	const horaFormateada = formatHoraUser(proximaMediaHora)

	const reservadas = reservasDia.filter(
		(reserva) =>
			reserva.fecha === new Date(dia).toISOString() &&
			(reserva.hora.includes(horaFormateada) ||
				reserva.horaFin.includes(horaFormateada))
	)
	const noCancelada = reservadas.find(
		(reserva) =>
			reserva.estado === ESTADOS_RESERVAS.pago ||
			reserva.estado === ESTADOS_RESERVAS.pendiente
	)
	if (noCancelada) {
		return false
	}
	return true
}
