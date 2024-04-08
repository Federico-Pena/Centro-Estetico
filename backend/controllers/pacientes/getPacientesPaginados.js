import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'
import { pipelinePaciente } from './pipelinePaciente.js'
export const getPacientesPaginados = async (req, res, next) => {
  try {
    const page = parseInt(req.params.pagina) > 1 ? parseInt(req.params.pagina) : 1
    const porPagina = 10
    const totalPacienteEncontrados = await Paciente.countDocuments({})
    const pipeline = pipelinePaciente(page, porPagina)
    const datosPaciente = Paciente.aggregate(pipeline)
    const pacientes = await datosPaciente
    const totalPages = Math.ceil(totalPacienteEncontrados / porPagina)
    if (!totalPacienteEncontrados) {
      const response = {
        error: 'No se encontraron Pacientes',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    } else {
      const response = {
        datos: {
          pacientes,
          totalPages,
          page,
          totalPacienteEncontrados
        },
        status: 200,
        res
      }
      return crearRespuestaJSON(response)
    }
  } catch (error) {
    const response = {
      error: 'Ocurrió un error inesperado',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
