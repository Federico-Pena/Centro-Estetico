import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'

export const obtenerNombresPacientesParaForm = async (req, res) => {
  try {
    const pacientes = await Paciente.find().select('nombre').sort('nombre')

    if (pacientes.length === 0) {
      const response = {
        error: 'No se encontraron los nombres de los pacientes',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const response = {
      status: 200,
      datos: pacientes,
      res
    }
    return crearRespuestaJSON(response)
  } catch (err) {
    const response = {
      error: 'No se encontraron los nombres de los pacientes',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
