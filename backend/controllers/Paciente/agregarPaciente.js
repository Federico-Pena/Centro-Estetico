import { Paciente } from '../../models/PacienteSchema.js'
import { guardarEnCloudinary } from '../cloudinary.js'
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
      observaciones
    } = req.body
    let resultCloudinary = null
    let fotoNueva = null
    if (req.file && req.file.buffer) {
      try {
        resultCloudinary = await guardarEnCloudinary(req.file.buffer)
        fotoNueva = {
          public_id: resultCloudinary.public_id,
          secure_url: resultCloudinary.secure_url
        }
      } catch (error) {
        return res.status(500).json({
          mensaje: 'Error al subir la imagen a Cloudinary',
          error: error.message
        })
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
      tratamiento
    })
    if (fotoNueva !== null) {
      paciente.foto = fotoNueva
    }
    const nuevo = await paciente.save()
    const mensaje = `Nuevo paciente ${nuevo.nombre}`
    return res.status(200).json({ paciente, mensaje })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(500).json({ error: 'El nombre ya existe' })
    }
    return res.status(500).json({ error: 'Error al Guardar Paciente' })
  }
}
