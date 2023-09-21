import { Paciente } from '../../models/PacienteSchema.js'
export const obtenerPacientePorId = async (req, res) => {
	const { id } = req.params
	try {
		const paciente = await Paciente.findById(id)

		if (paciente) {
			return res.status(200).json(paciente)
		} else {
			return res.status(404).json({ mensaje: 'Paciente no encontrado' })
		}
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al obtener el paciente' })
	}
}
