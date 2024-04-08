import { Types } from 'mongoose'
import { eliminarDeCloudinary } from '../cloudinaryImagenes.js'
import Tratamiento from '../../models/TratamientoSchema.js'
import Servicio from '../../models/ServicioSchema.js'
import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'

export const eliminarServicio = async (req, res) => {
  try {
    const id = new Types.ObjectId(req.params.id)
    const servicio = await Servicio.findOne({ _id: id })
    if (!servicio) {
      const response = {
        error: 'El servicio no existe',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    if (servicio.imagen && servicio.imagen.public_id) {
      await eliminarDeCloudinary(servicio.imagen.public_id).catch(() => {
        const response = {
          error: 'Error al eliminar la foto del servicio',
          status: 500,
          res
        }
        crearRespuestaJSON(response)
      })
    }

    const tratamientos = await Tratamiento.find({ servicio: id })
    for (const tratamiento of tratamientos) {
      if (tratamiento.imagen && tratamiento.imagen.public_id) {
        await eliminarDeCloudinary(tratamiento.imagen.public_id).catch(() => {
          const response = {
            error: 'Error al eliminar la foto del tratamiento',
            status: 500,
            res
          }
          crearRespuestaJSON(response)
        })
      }
      await Tratamiento.findByIdAndDelete(tratamiento._id)
    }

    await Servicio.findByIdAndDelete(id)
    const response = {
      mensaje: `${servicio.nombre} eliminado con éxito.`,
      status: 200,
      datos: { servicio, tratamientosEliminados: tratamientos.length },
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    const response = {
      error: 'Error al eliminar el servicio',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
