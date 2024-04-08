import { Types } from 'mongoose'
import Servicio from '../../models/ServicioSchema.js'
import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import Tratamiento from '../../models/TratamientoSchema.js'
import { eliminarDeCloudinary } from '../cloudinaryImagenes.js'

export const eliminarTratamiento = async (req, res) => {
  try {
    const id = new Types.ObjectId(req.params.id)
    const servicio = await Servicio.findOne({ tratamientos: { _id: id } })
    if (!servicio) {
      const response = {
        error: 'No se encontró el servicio asociado al tratamiento',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const tratamientoExistente = await Tratamiento.findOne({ _id: id })
    if (tratamientoExistente.imagen && tratamientoExistente.imagen.public_id) {
      try {
        await eliminarDeCloudinary(tratamientoExistente.imagen.public_id)
      } catch (error) {
        const response = {
          error: 'Error al eliminar la imagen de la tratamiento',
          status: 500,
          res
        }
        return crearRespuestaJSON(response)
      }
    }
    const tratamientoEliminado = await Tratamiento.findOneAndDelete({ _id: id })

    await Servicio.findOneAndUpdate(
      { nombre: servicio.nombre.toLowerCase() },
      { $pull: { tratamientos: { _id: id } } }
    )
    if (!tratamientoEliminado) {
      const response = {
        error: 'Error al eliminar la tratamiento',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    } else {
      const response = {
        mensaje: `Tratamiento eliminado con éxito ${tratamientoEliminado.descripcion}`,
        status: 200,
        datos: tratamientoEliminado,
        res
      }
      return crearRespuestaJSON(response)
    }
  } catch (error) {
    const response = {
      error: 'Error al eliminar el tratamiento',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
