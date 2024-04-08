import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'

export const obtenerPacientePorNombre = async (req, res) => {
  try {
    const nombre = req.params.name
    if (!nombre) {
      const response = {
        error: 'Debe proporcionar un nombre',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const paciente = await Paciente.findOne({ nombre: nombre.toLowerCase() })
      .populate('servicio', 'nombre')
      .populate('tratamiento', 'descripcion sesiones')
    if (!paciente) {
      const response = {
        error: 'No se encontró el paciente',
        status: 404,
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
      error: 'Error al obtener el paciente',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
