import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import Servicio from '../../models/ServicioSchema.js'
import { guardarEnCloudinary } from '../cloudinaryImagenes.js'

export const agregarServicio = async (req, res) => {
  try {
    const { nombre, descripcion, descripcionSecundaria, tituloBeneficios, beneficiosLista } =
      req.body
    if (!nombre) {
      const response = {
        error: 'Debe proporcionar un nombre para el servicio',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    let resultCloudinary = null
    let fotoNueva = null
    if (req.file && req.file.buffer) {
      try {
        resultCloudinary = await guardarEnCloudinary(
          req.file.buffer,
          'Portfolio/Centro Estético/Servicios'
        )
        fotoNueva = {
          public_id: resultCloudinary.public_id,
          secure_url: resultCloudinary.secure_url
        }
      } catch (error) {
        if (error) {
          const response = {
            error: 'Error al subir la imagen a Cloudinary',
            status: 400,
            res
          }
          return crearRespuestaJSON(response)
        }
      }
    }
    const nuevoServicio = new Servicio({
      nombre,
      imagen: fotoNueva,
      descripcion,
      descripcionSecundaria,
      tituloBeneficios,
      beneficiosLista
    })

    const servicio = await nuevoServicio.save()
    if (!servicio) {
      const response = {
        error: 'Error al guardar el servicio',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const response = {
      mensaje: `Servicio guardado ${servicio.nombre}`,
      status: 200,
      datos: nuevoServicio,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    if (error.code === 11000) {
      const response = {
        error: 'El nombre del servicio ya existe',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }
    const response = {
      error: 'Error al guardar el servicio.',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
