export const calcularPromedioDeEdades = (arrayPacientes) => {
	const edadNumber = arrayPacientes.filter(
		(pacientes) =>
			typeof parseInt(pacientes.edad) === 'number' &&
			!isNaN(parseInt(pacientes.edad))
	)
	const sumaDeEdades = edadNumber.reduce(
		(suma, pacientes) => suma + parseInt(pacientes.edad),
		0
	)
	const promedioDeEdades = sumaDeEdades / edadNumber.length
	return promedioDeEdades
}
