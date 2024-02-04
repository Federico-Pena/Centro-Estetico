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
      try {
        await eliminarDeCloudinary(servicio.imagen.public_id)
      } catch (error) {
        const response = {
          error: 'Error al eliminar la foto del servicio',
          status: 400,
          res
        }
        return crearRespuestaJSON(response)
      }
    }
    const tratamiento = await Tratamiento.findOne({ servicio: id })
    if (tratamiento && tratamiento.imagen && tratamiento.imagen.public_id) {
      try {
        await eliminarDeCloudinary(tratamiento.imagen.public_id)
      } catch (error) {
        const response = {
          error: 'Error al eliminar la foto del tratamiento',
          status: 400,
          res
        }
        return crearRespuestaJSON(response)
      }
    }

    const servicioABorrar = await Servicio.findOneAndDelete({ _id: id })
    tratamiento && (await Tratamiento.findOneAndDelete({ servicio: id }))
    if (!servicioABorrar) {
      const response = {
        error: 'Error al eliminar el servicio',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const response = {
      mensaje: `${servicio.nombre} eliminado con éxito.`,
      status: 200,
      datos: { servicio, tratamiento },
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al eliminar el servicio' })
  }
}
