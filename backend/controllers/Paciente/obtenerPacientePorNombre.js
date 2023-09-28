import { Paciente } from '../../models/PacienteSchema.js'

export const obtenerPacientesPorNombre = async (req, res) => {
	let { nombre } = req.params
	nombre = nombre.toLowerCase()
	if (nombre.length < 3) {
		return res.status(500).json({ mensaje: 'Tres letras como mínimo' })
	}
	try {
		const pacientes = await Paciente.find({
			nombre: { $regex: nombre, $options: 'i' },
		})
		if (pacientes.length > 0) {
			return res.status(200).json(pacientes)
		} else {
			return res.status(404).json({ mensaje: 'Pacientes no encontrados' })
		}
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al obtener los pacientes' })
	}
}
