import { Paciente } from '../../models/PacienteSchema.js'

export const obtenerPacientesPorNombre = async (req, res) => {
	try {
		let { nombre } = req.params
		nombre = nombre.toLowerCase()
		const pacientes = await Paciente.find({
			nombre: { $regex: nombre, $options: 'i' },
		})
		if (pacientes.length > 0) {
			return res.status(200).json({ pacientes })
		} else {
			return res.status(404).json({ error: 'Pacientes no encontrados' })
		}
	} catch (error) {
		return res.status(500).json({ error: 'Error al obtener los pacientes' })
	}
}
