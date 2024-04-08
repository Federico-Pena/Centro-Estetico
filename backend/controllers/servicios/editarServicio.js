import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import Servicio from '../../models/ServicioSchema.js'
import { eliminarDeCloudinary, guardarEnCloudinary } from '../cloudinaryImagenes.js'

export const editarServicio = async (req, res) => {
  try {
    const { nombre, descripcion, descripcionSecundaria, tituloBeneficios, beneficiosLista } =
      req.body
    if (!nombre) {
      const response = {
        error: 'El nombre es requerido',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const servicio = await Servicio.findOne({ nombre: nombre.toLowerCase() })
    if (!servicio) {
      const response = {
        error: 'Servicio no encontrado',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    let resultCloudinary = null
    let fotoNueva = null
    if (req.file && req.file.buffer) {
      try {
        if (servicio.imagen && servicio.imagen.public_id) {
          await eliminarDeCloudinary(servicio.imagen.public_id)
        }
        resultCloudinary = await guardarEnCloudinary(
          req.file.buffer,
          'Portfolio/Centro Estético/Servicios'
        )
        fotoNueva = {
          public_id: resultCloudinary.public_id,
          secure_url: resultCloudinary.secure_url
        }
      } catch (error) {
        const response = {
          error: 'Error al guardar la imagen',
          status: 400,
          res
        }
        return crearRespuestaJSON(response)
      }
    } else {
      fotoNueva = servicio.imagen
    }
    servicio.imagen = fotoNueva
    servicio.descripcionSecundaria = descripcionSecundaria || servicio.descripcionSecundaria
    servicio.descripcion = descripcion || servicio.descripcion
    servicio.tituloBeneficios = tituloBeneficios || servicio.tituloBeneficios
    servicio.beneficiosLista = beneficiosLista || servicio.beneficiosLista

    const servicioActualizado = await servicio.save()
    if (!servicioActualizado) {
      const response = {
        error: 'Error al guardar el servicio.',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const response = {
      mensaje: `Servicio guardado ${servicioActualizado.nombre}`,
      status: 200,
      datos: servicioActualizado,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    const response = {
      error: 'Error al guardar el servicio.',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
