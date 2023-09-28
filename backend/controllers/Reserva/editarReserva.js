import { Reserva } from '../../models/ReservaSchema.js'
import { Tratamiento } from '../../models/TratamientoSchema.js'
import { obtenerCantidadSesiones } from './agregarReserva.js'

export const editarReserva = async (req, res) => {
	const {
		_id,
		pacienteNombre,
		fecha,
		observaciones,
		tratamiento,
		sesionSeleccionada,
		estado,
	} = req.body

	const horaInicio = new Date(`${fecha}`)
	const horaDeFin = new Date(horaInicio)
	horaDeFin.setMinutes(horaDeFin.getMinutes() + 30)
	try {
		const reservaGuardada = await Reserva.findById(_id)
		if (!reservaGuardada) {
			return res.status(404).json({ mensaje: 'La reserva no existe' })
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

		let reservaNueva = {
			pacienteNombre,
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
			estado,
		}
		const nuevaReserva = await Reserva.findByIdAndUpdate(
			reservaGuardada._id,
			reservaNueva
		)

		if (!nuevaReserva) {
			return res.status(404).json({ mensaje: 'La reserva no existe' })
		}
		const reserva = await Reserva.findOne(nuevaReserva._id)

		return res.status(200).json({
			reserva,
		})
	} catch (error) {
		return res
			.status(500)
			.json({ error, mensaje: 'Error al editar la reserva' })
	}
}
