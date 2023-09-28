export const formatFechaParaUser = (reserva) => {
	const fechaReserva = new Date(reserva.fecha)
	const options = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		weekday: 'short',
	}
	const fechaFormateada = fechaReserva.toLocaleDateString('es-UY', options)
	if (fechaReserva instanceof Date && fechaFormateada !== 'Invalid Date') {
		return fechaFormateada
	} else {
		return ''
	}
}
