export const formatFechaIso = (fecha) => {
	const timeZoneOffset = fecha.getTimezoneOffset() * 60000
	const localISOTime = new Date(Date.now() - timeZoneOffset).toISOString()
	return localISOTime
}
