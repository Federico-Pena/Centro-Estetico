import { Types } from 'mongoose'
import Servicio from '../../models/ServicioSchema.js'
import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import Tratamiento from '../../models/TratamientoSchema.js'
import { eliminarDeCloudinary, guardarEnCloudinary } from '../cloudinaryImagenes.js'

export const editarTratamiento = async (req, res) => {
  try {
    const id = new Types.ObjectId(req.params.id)
    const { descripcion, tiempo, costoTotal, enPromocion, sesiones } = req.body

    const servicioExistente = await Servicio.findOne({ tratamientos: id })
    if (!servicioExistente) {
      const response = {
        error: 'No existe servicio asociado a este tratamiento',
        status: 404,
        res
      }
      return crearRespuestaJSON(response)
    }
    const tratamientoExistente = await Tratamiento.findOne({ _id: id })
    if (!tratamientoExistente) {
      const response = {
        error: 'No existe el tratamiento',
        status: 404,
        res
      }
      return crearRespuestaJSON(response)
    }
    let resultCloudinary = null

    if (enPromocion === 'false') {
      try {
        if (tratamientoExistente.imagen && tratamientoExistente.imagen.public_id) {
          await eliminarDeCloudinary(tratamientoExistente.imagen.public_id)
        }
        tratamientoExistente.imagen = null
      } catch (error) {
        const response = {
          error: 'Error al eliminar la imagen',
          status: 500,
          res
        }
        return crearRespuestaJSON(response)
      }
    }

    if (req.file && req.file.buffer) {
      try {
        if (tratamientoExistente.imagen && tratamientoExistente.imagen.public_id) {
          await eliminarDeCloudinary(tratamientoExistente.imagen.public_id)
        }
        resultCloudinary = await guardarEnCloudinary(
          req.file.buffer,
          'Portfolio/Centro Estético/Promociones'
        )
        tratamientoExistente.imagen = {
          public_id: resultCloudinary.public_id,
          secure_url: resultCloudinary.secure_url
        }
      } catch (error) {
        const response = {
          error: 'Error al guardar la imagen',
          status: 500,
          res
        }
        return crearRespuestaJSON(response)
      }
    }

    tratamientoExistente.descripcion = descripcion
    tratamientoExistente.costoTotal = costoTotal
    tratamientoExistente.tiempo = tiempo
    tratamientoExistente.enPromocion = enPromocion
    tratamientoExistente.sesiones = sesiones
    tratamientoExistente.servicio = servicioExistente._id
    const tratamientoActualizada = await tratamientoExistente.save()
    if (!tratamientoActualizada) {
      const response = {
        error: 'Error al actualizar el tratamiento',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }
    const sinEditada = servicioExistente.tratamientos.filter((ser) => ser._id !== id)
    sinEditada.push(tratamientoActualizada._id)
    const servicioActualizado = await servicioExistente.save()
    if (!servicioActualizado) {
      const response = {
        error: 'Error al actualizar el servicio relacionado',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }

    const tratamientoActualizadaConServicio = await Tratamiento.findOne({ _id: id }).populate(
      'servicio',
      'nombre'
    )

    const response = {
      mensaje: `Tratamiento actualizado con éxito ${tratamientoActualizadaConServicio.descripcion}`,
      status: 200,
      datos: tratamientoActualizadaConServicio,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    const response = {
      error: 'Error al actualizar el tratamiento',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
