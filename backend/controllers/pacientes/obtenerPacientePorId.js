import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'

export const obtenerPacientePorId = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      const response = {
        error: 'Debe proporcionar un id',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const paciente = await Paciente.findById(id)
      .populate('servicio', 'nombre')
      .populate('tratamiento', 'descripcion')
    if (!paciente) {
      const response = {
        error: 'No se encontró el paciente',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    } else {
      const response = {
        datos: paciente,
        status: 200,
        res
      }
      return crearRespuestaJSON(response)
    }
  } catch (error) {
    const response = {
      error: 'Error al obtener los pacientes',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
