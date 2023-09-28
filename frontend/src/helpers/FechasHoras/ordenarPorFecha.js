export function ordenarPorFecha(a, b) {
	if (a && b) {
		const fechaHoraA = new Date(a.horario.horaInicio)
		const fechaHoraB = new Date(b.horario.horaInicio)
		if (fechaHoraA > fechaHoraB) {
			return -1
		} else if (fechaHoraA < fechaHoraB) {
			return 1
		} else {
			return 0
		}
	}
}
