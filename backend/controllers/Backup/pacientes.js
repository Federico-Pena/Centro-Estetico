import { Paciente } from '../../models/PacienteSchema.js'

export const backupPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find({})

    const pacientesJSON = JSON.stringify(pacientes, null, 2)

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Disposition', 'attachment; filename=pacientes_backup.json')
    console.log(pacientesJSON)
    res.send(pacientesJSON)
  } catch (error) {
    console.error('Error al realizar el backup:', error)
    res.status(500).json({ error: 'Ocurrió un error inesperado' })
  }
}
