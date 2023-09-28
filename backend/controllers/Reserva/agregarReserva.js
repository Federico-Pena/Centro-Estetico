import { Reserva } from '../../models/ReservaSchema.js'
import { Paciente } from '../../models/PacienteSchema.js'
import { Tratamiento } from '../../models/TratamientoSchema.js'

export const agregarReserva = async (req, res) => {
	try {
		const {
			pacienteNombre,
			fecha,
			observaciones,
			tratamiento,
			sesionSeleccionada,
		} = req.body

		const horaInicio = new Date(`${fecha}`)
		const horaDeFin = new Date(horaInicio)
		horaDeFin.setMinutes(horaDeFin.getMinutes() + 30)

		let pacienteExistente = await Paciente.findOne({ nombre: pacienteNombre })
		if (!pacienteExistente) {
			pacienteExistente = new Paciente({ nombre: pacienteNombre })
			await pacienteExistente.save()
		}

		const tratamientoExistente = await Tratamiento.findOne({
			nombre: tratamiento,
		})
		if (!tratamientoExistente) {
			return res.status(404).json({
				mensaje: 'Tratamiento no encontrado',
			})
		}

		// Buscar la sesión seleccionada
		const sesion = tratamientoExistente.sesiones.find(
			(s) => s.descripcion === sesionSeleccionada
		)

		if (!sesion) {
			return res.status(400).json({
				mensaje: 'Sesión no encontrada para el tratamiento seleccionado',
			})
		}

		// Crear la reserva con la cantidad de sesiones del tratamiento
		const reserva = new Reserva({
			paciente: pacienteExistente._id,
			pacienteNombre: pacienteExistente.nombre,
			horario: {
				horaInicio,
				horaDeFin,
			},
			tratamiento: {
				tratamientoId: tratamientoExistente._id,
				nombre: tratamientoExistente.nombre,
				sesiones: obtenerCantidadSesiones(sesionSeleccionada),
				descripcionSesion: sesion.descripcion,
			},
			precio: sesion.precio / obtenerCantidadSesiones(sesionSeleccionada),
			observaciones,
		})

		await reserva.save()

		return res.status(200).json({
			reserva,
		})
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({
			mensaje: 'Error al crear la reserva',
			error: error.message,
		})
	}
}

// Función para extraer la cantidad de sesiones desde la descripción de la sesión
export function obtenerCantidadSesiones(descripcionSesion) {
	// Implementa la lógica según el formato de tus descripciones
	const matches = descripcionSesion.match(/\d+/)
	return matches ? parseInt(matches[0], 10) : 1
}
