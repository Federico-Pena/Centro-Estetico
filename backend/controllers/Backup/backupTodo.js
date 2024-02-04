import { Paciente } from '../../models/PacienteSchema.js'
import { Reserva } from '../../models/ReservaSchema.js'
import Servicio from '../../models/ServicioSchema.js'
import Tratamiento from '../../models/TratamientoSchema.js'

export const backupTodo = async (req, res) => {
  try {
    const [pacientes, reservas, tratamientos, servicios] = await Promise.all([
      Paciente.find({}),
      Reserva.find({}),
      Tratamiento.find({}),
      Servicio.find({})
    ])

    const backupData = {
      pacientes,
      reservas,
      tratamientos,
      servicios
    }

    const backupJSON = JSON.stringify(backupData, null, 2)
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Disposition', 'attachment; filename=todo_backup.json')
    res.send(backupJSON)
  } catch (error) {
    console.error('Error al realizar el backup:', error)
    res.status(500).json({ error: 'Ocurrió un error inesperado' })
  }
}
