import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'
import Servicio from '../../models/ServicioSchema.js'

export const migraDatos = async (req, res) => {
  try {
    const pacientes = await Paciente.find({})
    for (const paciente of pacientes) {
      const servicio = await Servicio.findOne({ nombre: paciente.tratamiento.toLowerCase() })

      if (servicio) {
        paciente.servicio = servicio._id
        await paciente.save()
      }
    }
    const pacientesNuevos = await Paciente.find({})

    const response = {
      mensaje: 'Todo ok',
      status: 200,
      datos: pacientesNuevos,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    const response = {
      error: 'Ocurrió un error inesperado',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
