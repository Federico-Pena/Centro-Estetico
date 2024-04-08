// Controlador para formulario de paciente
import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import Servicio from '../../models/ServicioSchema.js'
export const obtenerNombresServiciosNombresTratamientos = async (req, res) => {
  try {
    const servicios = await Servicio.find()
      .select('nombre')
      .sort('nombre')
      .populate('tratamientos', 'descripcion sesiones')
    if (!servicios || servicios.length === 0) {
      const response = {
        error: 'No se encontraron servicios',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    } else {
      const response = {
        datos: servicios,
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
