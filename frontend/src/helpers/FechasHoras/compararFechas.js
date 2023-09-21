import { ESTADOS_RESERVAS } from '../../constantes'
import { formatHoraUser } from '../Formato/formatHoraUser'

const conReserva = (fechasOcupadas) => {
	return fechasOcupadas.reduce(
		(acumulador, reserva) => {
			switch (reserva.estado) {
				case ESTADOS_RESERVAS.pago:
					acumulador.paga = reserva
					break
				case ESTADOS_RESERVAS.pendiente:
					acumulador.pendiente = reserva
					break
				case ESTADOS_RESERVAS.cancelada:
					acumulador.cancelada = reserva
					break
				default:
					break
			}
			return acumulador
		},
		{
			paga: null,
			pendiente: null,
			cancelada: null,
		}
	)
}
export const compararFechas = (fecha, reservas) => {
	if (!(fecha instanceof Date) || !Array.isArray(reservas)) {
		return {}
	}
	const fechaActual = new Date(fecha)
	fechaActual.setMinutes(fechaActual.getMinutes() + 30)
	const proximaMediaHoraFormateada = formatHoraUser(fechaActual)
	const diaDesdeCalendario = fecha.toISOString().split('T')[0]
	const horaDesdeCalendario = new Intl.DateTimeFormat('es-UY', {
		hour12: false,
		timeZone: 'America/Montevideo',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	})
		.format(fecha)
		.split(':', 2)
		.join(':')
	const id = `${diaDesdeCalendario} ${horaDesdeCalendario}`

	const fechasOcupadas = reservas.filter((reserva) => {
		const fechaSplit = reserva.fecha?.split('T')[0]
		const reservaFechaHora = `${fechaSplit} ${reserva.hora}`
		const reservaFechaHoraFin = `${fechaSplit} ${reserva.horaFin}`
		return id === reservaFechaHora || id === reservaFechaHoraFin
	})

	const reservaAdmin = fechasOcupadas.some(
		(reserva) => reserva.pacienteNombre === 'admin'
	)

	const reservadas = fechasOcupadas.filter(
		(reserva) =>
			(reserva.hora === horaDesdeCalendario ||
				reserva.horaFin === horaDesdeCalendario) &&
			(reserva.estado === ESTADOS_RESERVAS.pendiente ||
				reserva.estado === ESTADOS_RESERVAS.cancelada ||
				reserva.estado === ESTADOS_RESERVAS.pago)
	)
	const siguienteHoraNoDisponible = fechasOcupadas.find(
		(reserva) =>
			(reserva.hora === proximaMediaHoraFormateada ||
				reserva.horaFin === proximaMediaHoraFormateada) &&
			(reserva.estado === ESTADOS_RESERVAS.pago ||
				reserva.estado === ESTADOS_RESERVAS.pendiente)
	)
	const { paga, pendiente, cancelada } = conReserva(fechasOcupadas)
	const estado = paga || pendiente || cancelada || ''
	if (!estado && siguienteHoraNoDisponible) {
		return { id }
	}
	return {
		id,
		estado: estado.estado,
		paga,
		pendiente,
		cancelada,
		reservaAdmin,
		reservadas,
		siguienteHoraNoDisponible,
	}
}
