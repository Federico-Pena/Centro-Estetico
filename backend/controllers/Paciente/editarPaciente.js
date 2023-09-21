import { Paciente } from '../../models/PacienteSchema.js'
import { guardarEnCloudinary, eliminarDeCloudinary } from '../cloudinary.js'
export const editarPaciente = async (req, res) => {
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
		observaciones,
	} = req.body
	try {
		const pacienteAnterior = await Paciente.findById(req.params.id)
		if (!pacienteAnterior) {
			return res.status(404).json({ message: 'El paciente no existe' })
		}

		// Verificar si la foto anterior existe y tiene un public_id
		if (req.file && pacienteAnterior.foto && pacienteAnterior.foto.public_id) {
			await eliminarDeCloudinary(pacienteAnterior.foto.public_id)
		}

		let resultCloudinary = null
		let fotoNueva = null
		if (req.file && req.file.buffer) {
			try {
				resultCloudinary = await guardarEnCloudinary(req.file.buffer)
				fotoNueva = {
					public_id: resultCloudinary.public_id,
					secure_url: resultCloudinary.secure_url,
				}
			} catch (error) {
				// Manejo del error al subir la imagen a Cloudinary
				return res.status(500).json({
					mensaje: 'Error al subir la imagen a Cloudinary',
					error: error.message,
				})
			}
		}
		let pacienteUpdate = {
			nombre: nombre || pacienteAnterior.nombre,
			fechaDeNac: fechaDeNac || pacienteAnterior.fechaDeNac,
			cedula: cedula || pacienteAnterior.cedula,
			edad: edad || pacienteAnterior.edad,
			sociedad: sociedad || pacienteAnterior.sociedad,
			telefono: telefono || pacienteAnterior.telefono,
			observaciones: observaciones || pacienteAnterior.observaciones,
			contactoEmergencia: {
				nombreContacto2: nombreContacto2 || pacienteAnterior.nombreContacto2,
				telefonoContacto2:
					telefonoContacto2 || pacienteAnterior.telefonoContacto2,
			},
			alimentacion: alimentacion || pacienteAnterior.alimentacion,
			descanso: descanso || pacienteAnterior.descanso,
			hidratacion: hidratacion || pacienteAnterior.hidratacion,
			alcohol: alcohol || pacienteAnterior.alcohol,
			fuma: fuma || pacienteAnterior.fuma,
			alergia: alergia || pacienteAnterior.alergia,
			circulatorio: circulatorio || pacienteAnterior.circulatorio,
			embarazo: embarazo || pacienteAnterior.embarazo,
			operaciones: operaciones || pacienteAnterior.operaciones,
			oncologicas: oncologicas || pacienteAnterior.oncologicas,
			enfermedades: enfermedades || pacienteAnterior.enfermedades,
			medicamentos: medicamentos || pacienteAnterior.medicamentos,
			implantes: implantes || pacienteAnterior.implantes,
			tratamiento: tratamiento || pacienteAnterior.tratamiento,
		}
		if (req.file && fotoNueva) {
			pacienteUpdate.foto = fotoNueva
		} else {
			pacienteUpdate.foto = pacienteAnterior.foto
		}
		let paciente = await Paciente.findByIdAndUpdate(
			req.params.id,
			pacienteUpdate
		)
		if (!paciente) {
			return res.status(404).json({ message: 'El paciente no existe' })
		}
		let nuevoPaciente = await Paciente.findOne(paciente._id)
		res.status(200).json(nuevoPaciente)
	} catch (error) {
		return res
			.status(500)
			.json({ mensaje: 'Error al editar el paciente', error: error.message })
	}
}
