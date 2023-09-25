import { contadorTratamientos } from '../../helpers/contadorTratamientos.js'
import { calcularPromedioDeEdades } from '../../helpers/calcularPromedioDeEdades.js'
import { Paciente } from '../../models/PacienteSchema.js'

export const estadisticasPacientes = async (req, res, next) => {
	try {
		const [totalPacientes, pacientes] = await Promise.all([
			Paciente.countDocuments({ nombre: { $ne: 'admin' } }),
			Paciente.find({ nombre: { $ne: 'admin' } }),
		])
		const [tratamientosPacientes, promedioDeEdades] = await Promise.all([
			contadorTratamientos(pacientes),
			calcularPromedioDeEdades(pacientes),
		])
		const estadisticas = {
			totalPacientes,
			tratamientosPacientes,
			promedioDeEdades,
		}
		req.estadisticas = estadisticas
		next()
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Ocurrió un error al calcular estadísticas' })
	}
}
