import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'
import Servicio from '../../models/ServicioSchema.js'
import Tratamiento from '../../models/TratamientoSchema.js'
import { guardarEnCloudinary } from '../cloudinaryImagenes.js'

export const agregarPaciente = async (req, res) => {
  try {
    const {
      nombre,
      fechaDeNac,
      cedula,
      edad,
      sociedad,
      telefono,
      nombreContacto2,
      telefonoContacto2,
      alimentacion,
      descanso,
      hidratacion,
      alcohol,
      fuma,
      alergia,
      circulatorio,
      embarazo,
      operaciones,
      oncologicas,
      enfermedades,
      medicamentos,
      implantes,
      tratamiento,
      servicio,
      observaciones
    } = req.body
    let servicioId
    let tratamientoId
    if (!nombre) {
      const response = {
        error: 'Debe proporcionar un nombre para el paciente',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const pacienteRepetido = await Paciente.findOne({ nombre: nombre.toLowerCase() })
    if (pacienteRepetido) {
      const response = {
        error: 'El nombre del paciente ya está en uso',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    if (servicio) {
      const servicioExistente = await Servicio.findOne({ nombre: servicio.toLowerCase() })
      if (servicioExistente) {
        servicioId = servicioExistente._id
      } else {
        const response = {
          error: 'El servicio seleccionado no existe',
          status: 404,
          res
        }
        return crearRespuestaJSON(response)
      }
    }
    if (tratamiento) {
      const descripcion = tratamiento.split('-')[0].trim().toLowerCase()
      const sesiones = parseInt(tratamiento.split('-')[1].trim().match(/\d+/)[0], 10)
      const tratamientoExistente = await Tratamiento.findOne({
        servicio: servicioId,
        descripcion,
        sesiones
      })
      if (tratamientoExistente) {
        tratamientoId = tratamientoExistente._id
      } else {
        const response = {
          error: 'El tratamiento seleccionado no existe',
          status: 404,
          res
        }
        return crearRespuestaJSON(response)
      }
    }

    let resultCloudinary = null
    let fotoNueva = null
    if (req.file && req.file.buffer) {
      try {
        resultCloudinary = await guardarEnCloudinary(
          req.file.buffer,
          'Portfolio/Centro Estético/Pacientes'
        )
        fotoNueva = {
          public_id: resultCloudinary.public_id,
          secure_url: resultCloudinary.secure_url
        }
      } catch (error) {
        const response = {
          error: 'Error al subir la imagen a Cloudinary',
          status: 500,
          res
        }
        return crearRespuestaJSON(response)
      }
    }
    const paciente = new Paciente({
      nombre,
      fechaDeNac,
      cedula,
      edad,
      sociedad,
      telefono,
      observaciones,
      contactoEmergencia: {
        nombreContacto2,
        telefonoContacto2
      },
      alimentacion,
      descanso,
      hidratacion,
      alcohol,
      fuma,
      alergia,
      circulatorio,
      embarazo,
      operaciones,
      oncologicas,
      enfermedades,
      medicamentos,
      implantes,
      tratamiento: tratamientoId && tratamientoId,
      servicio: servicioId && servicioId
    })
    if (fotoNueva !== null) {
      paciente.foto = fotoNueva
    }
    const nuevo = await paciente.save()
    if (!nuevo) {
      const response = {
        error: 'Error al Guardar Paciente',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }
    const pacienteNuevo = await Paciente.findOne({ _id: nuevo._id })
      .populate('servicio', 'nombre')
      .populate('tratamiento', 'descripcion sesiones')
    const response = {
      mensaje: `Nuevo paciente ${pacienteNuevo.nombre}`,
      status: 200,
      datos: pacienteNuevo,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    if (error.code === 11000) {
      const response = {
        error: 'El nombre del paciente ya está en uso',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    } else {
      const response = {
        error: 'Error al Guardar Paciente',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }
  }
}
