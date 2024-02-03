// Controlador para el carrusel de promociones
import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import Tratamientos from '../../models/TratamientoSchema.js'
export const obtenerPromociones = async (req, res) => {
  try {
    const tratamientos = await Tratamientos.find({ enPromocion: true }).populate('servicio')
    if (tratamientos || tratamientos.length > 0) {
      const response = {
        datos: tratamientos,
        status: 200,
        res
      }
      return crearRespuestaJSON(response)
    }
  } catch (error) {
    console.log(error)
    const response = {
      error: 'Ocurrió un error inesperado',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
