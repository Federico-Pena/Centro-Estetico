import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import Tratamientos from '../../models/TratamientoSchema.js'

export const obtenerTratamientos = async (req, res) => {
  try {
    const tratamientos = await Tratamientos.find().populate('servicio', 'nombre')
    const tratamientosOrdenados = tratamientos.sort((a, b) => {
      const nombreA = a.servicio.nombre.toUpperCase()
      const nombreB = b.servicio.nombre.toUpperCase()

      if (nombreA < nombreB) {
        return -1
      }
      if (nombreA > nombreB) {
        return 1
      }
      return 0
    })

    if (!tratamientosOrdenados || tratamientosOrdenados.length === 0) {
      const response = {
        error: 'No se encontraron tratamientos',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    } else {
      const response = {
        datos: tratamientosOrdenados,
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
