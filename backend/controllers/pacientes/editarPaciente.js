import { Types } from 'mongoose'
import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'
import Servicio from '../../models/ServicioSchema.js'
import Tratamiento from '../../models/TratamientoSchema.js'
import { eliminarDeCloudinary, guardarEnCloudinary } from '../cloudinaryImagenes.js'

export const editarPaciente = async (req, res) => {
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
    const idPaciente = new Types.ObjectId(req.params.id)
    if (!idPaciente) {
      const response = {
        error: 'Debe proporcionar el id para la búsqueda',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const pacienteAnterior = await Paciente.findById(idPaciente)

    if (!pacienteAnterior) {
      const response = {
        error: 'No se encontró un paciente',
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
      const tratamientoExistente = await Tratamiento.findOne({
        descripcion: tratamiento.toLowerCase()
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
        if (pacienteAnterior.foto && pacienteAnterior.foto.public_id) {
          await eliminarDeCloudinary(pacienteAnterior.foto.public_id)
        }
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
          error: 'Error al guardar la imagen del paciente',
          status: 500,
          res
        }
        return crearRespuestaJSON(response)
      }
    } else {
      fotoNueva = pacienteAnterior.foto
    }

    const pacienteNuevo = {
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
      servicio: servicioId && servicioId,
      foto: fotoNueva
    }
    const paciente = await Paciente.findByIdAndUpdate(pacienteAnterior._id, pacienteNuevo)
    if (!paciente) {
      const response = {
        error: 'Error al actualizar el paciente',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }
    const nuevoPaciente = await Paciente.findOne(pacienteAnterior._id)
      .populate('servicio', 'nombre')
      .populate('tratamiento', 'descripcion')
    const response = {
      mensaje: `Paciente nuevo ${nuevoPaciente.nombre}.`,
      status: 200,
      datos: nuevoPaciente,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    if (error) {
      const response = {
        error: 'Error al actualizar al paciente',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }
  }
}
