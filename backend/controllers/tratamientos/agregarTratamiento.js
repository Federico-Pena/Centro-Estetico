import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import Servicio from '../../models/ServicioSchema.js'
import Tratamiento from '../../models/TratamientoSchema.js'
import { guardarEnCloudinary } from '../cloudinaryImagenes.js'

export const agregarTratamiento = async (req, res) => {
  try {
    const { nombre, descripcion, costoTotal, tiempo, enPromocion, sesiones } = req.body

    if (!nombre) {
      const response = {
        error: 'El nombre del servicio es requerido',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }

    const servicioExistente = await Servicio.findOne({
      nombre: nombre.toLowerCase()
    })
    if (!servicioExistente) {
      const response = {
        error: 'No existe servicio al que asociar la cuponera',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    let resultCloudinary = null
    let fotoNueva = null
    if (enPromocion === 'true' && req.file && req.file.buffer) {
      try {
        resultCloudinary = await guardarEnCloudinary(
          req.file.buffer,
          'Portfolio/Centro Estético/Promociones'
        )
        fotoNueva = {
          public_id: resultCloudinary.public_id,
          secure_url: resultCloudinary.secure_url
        }
      } catch (error) {
        if (error) {
          const response = {
            error: 'Error al guardar la imagen',
            status: 500,
            res
          }
          return crearRespuestaJSON(response)
        }
      }
    }
    const tratamiento = new Tratamiento({
      servicio: servicioExistente._id,
      descripcion,
      enPromocion,
      tiempo,
      costoTotal,
      sesiones,
      imagen: fotoNueva
    })
    const tratamientoNuevo = await tratamiento.save()

    if (!tratamientoNuevo) {
      const response = {
        error: 'Error al crear la cuponera',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }

    servicioExistente.tratamientos.push(tratamientoNuevo._id)
    const servicioNuevo = await servicioExistente.save()

    if (!servicioNuevo) {
      const response = {
        error: 'Error al crear la cuponera',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const response = {
      mensaje: `Cuponera creada con éxito ${tratamientoNuevo.descripcion}. Asociada al servicio ${servicioExistente.nombre}`,
      status: 200,
      datos: tratamientoNuevo,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    console.log(error)
    const response = {
      error: 'Error al crear la cuponera',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
