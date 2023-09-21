export const formatHoraUser = (hora) => {
	return hora
		.toLocaleTimeString('es-UY', {
			hour12: false,
			timeZone: 'America/Montevideo',
		})
		.split(':', 2)
		.join(':')
}
