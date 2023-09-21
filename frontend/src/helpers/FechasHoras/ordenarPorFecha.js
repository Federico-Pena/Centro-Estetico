export function ordenarPorFecha(a, b) {
	if (a && b) {
		const fechaA = a.fecha.split('T')[0]
		const fechaB = b.fecha.split('T')[0]
		const fechaHoraA = new Date(`${fechaA}T${a.hora}`)
		const fechaHoraB = new Date(`${fechaB}T${b.hora}`)
		if (fechaHoraA > fechaHoraB) {
			return -1
		} else if (fechaHoraA < fechaHoraB) {
			return 1
		} else {
			return 0
		}
	}
}
