import { Paciente } from '../../models/PacienteSchema.js'
export const obtenerPacientes = async (req, res) => {
	try {
		const pacientesBD = await Paciente.find()
		if (pacientesBD) {
			return res.status(200).json(pacientesBD)
		} else {
			return res.status(404).json({ message: 'Error al buscar los pacientes' })
		}
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
}
