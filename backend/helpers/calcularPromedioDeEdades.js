export const calcularPromedioDeEdades = (arrayPacientes) => {
	const edadNumber = arrayPacientes.filter(
		(objeto) =>
			typeof parseInt(objeto.edad) === 'number' && !isNaN(parseInt(objeto.edad))
	)
	const sumaDeEdades = edadNumber.reduce(
		(suma, objeto) => suma + objeto.edad,
		0
	)
	const promedioDeEdades = sumaDeEdades / edadNumber.length
	return promedioDeEdades
}
