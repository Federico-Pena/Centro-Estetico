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
    const idPaciente = req.params.id
    if (!idPaciente) {
      const response = {
        error: 'Debe proporcionar el id para la búsqueda',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const pacienteAnterior = await Paciente.findById(req.params.id)

    if (!pacienteAnterior) {
      const response = {
        error: 'No se encontró un paciente',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const servicioPromise = Servicio.findOne({ nombre: servicio.toLowerCase() })
    const tratamientoPromise = Tratamiento.findOne({ descripcion: tratamiento.toLowerCase() })
    const [servicioExistente, tratamientoExistente] = await Promise.all([
      servicioPromise,
      tratamientoPromise
    ])
    if (!servicioExistente || !tratamientoExistente) {
      const response = {
        error: 'Servicio o tratamiento incorrecto',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
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
      servicio: servicioExistente._id,
      tratamiento: tratamientoExistente._id,
      foto: fotoNueva
    }
    const paciente = await Paciente.findByIdAndUpdate(req.params.id, pacienteNuevo)
    if (!paciente) {
      const response = {
        error: 'Error al actualizar el paciente',
        status: 500,
        res
      }
      return crearRespuestaJSON(response)
    }
    const nuevoPaciente = await Paciente.findOne(paciente._id)
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
