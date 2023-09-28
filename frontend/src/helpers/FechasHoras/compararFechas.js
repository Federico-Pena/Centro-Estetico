import { ESTADOS_RESERVAS } from '../../constantes'
import { formatHoraUser } from '../Formato/formatHoraUser'

const conReserva = (fechasOcupadas) => {
	const estadoMap = {
		[ESTADOS_RESERVAS.pago]: 'paga',
		[ESTADOS_RESERVAS.pendiente]: 'pendiente',
		[ESTADOS_RESERVAS.cancelada]: 'cancelada',
	}

	return fechasOcupadas.reduce(
		(acumulador, reserva) => {
			const estadoProp = estadoMap[reserva.estado]
			if (estadoProp) {
				acumulador[estadoProp] = reserva
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
	const fechaISOString = fecha.toISOString()
	const proximaMediaHora = new Date(`${fecha}`)
	proximaMediaHora.setMinutes(proximaMediaHora.getMinutes() + 30)
	const diaDesdeCalendario = fecha.toISOString().split('T')[0]
	const horaDesdeCalendario = formatHoraUser(new Date(fecha))

	const id = `${diaDesdeCalendario} ${horaDesdeCalendario}`
	const proximaHoraNoDisponible = reservas.find((reserva) => {
		return (
			new Date(reserva.horario.horaInicio).toISOString() ===
			new Date(proximaMediaHora).toISOString()
		)
	})
	const fechasOcupadas = reservas.filter((reserva) => {
		const inicioReservaISO = new Date(reserva.horario.horaInicio).toISOString()
		const finReservaISO = new Date(reserva.horario.horaDeFin).toISOString()
		return (
			inicioReservaISO === fechaISOString || finReservaISO === fechaISOString
		)
	})
	const reservaAdmin = fechasOcupadas.some(
		(reserva) => reserva.pacienteNombre === 'admin'
	)
	const reservasFiltradas = fechasOcupadas.filter((reserva) =>
		[
			ESTADOS_RESERVAS.pago,
			ESTADOS_RESERVAS.pendiente,
			ESTADOS_RESERVAS.cancelada,
		].includes(reserva.estado)
	)
	const { paga, pendiente } = conReserva(fechasOcupadas)
	const estado = paga?.estado || pendiente?.estado || ''
	const proximaHora =
		proximaHoraNoDisponible?.estado === ESTADOS_RESERVAS.cancelada
			? ''
			: proximaHoraNoDisponible?.estado || ''
	return {
		id,
		estado: estado,
		reservaAdmin:
			reservaAdmin || proximaHoraNoDisponible?.pacienteNombre === 'admin',
		reservadas: reservasFiltradas,
		proximaHoraNoDisponible: proximaHora,
	}
}
