import { Router } from 'express'
import { fechasHorasReservadasDeUnDia } from '../controllers/Publicas/fechasHorasReservadasDeUnDia.js'
import { Reserva } from '../models/ReservaSchema.js'
import { Tratamiento } from '../models/TratamientoSchema.js'
import { Paciente } from '../models/PacienteSchema.js'
import { obtenerCantidadSesiones } from '../controllers/Reserva/agregarReserva.js'

export const publicas = Router()
// Ruta GET para obtener reservas de la Dia
/* export const generarReservasPrueba = async (
	cantidad,
	tratamientos,
	nombres
) => {
	try {
		if (nombres.length < cantidad) {
			throw new Error(
				'La cantidad de nombres proporcionados es menor que la cantidad de reservas.'
			)
		}
		const reservas = []
		let horaInicio = new Date(2023, 9, 19, 9, 0) // Inicia con la fecha y hora actual
		console.log(horaInicio)

		for (let i = 0; i < cantidad; i++) {
			const pacienteNombre = nombres[i].nombre
			const pacienteId = nombres[i]._id

			const observaciones = `Observaciones para reserva ${i + 1}`

			// Selecciona un tratamiento aleatorio
			const tratamientoIndex = Math.floor(Math.random() * tratamientos.length)
			const tratamientoSeleccionado = tratamientos[tratamientoIndex]

			// Selecciona una sesión aleatoria del tratamiento
			const sesionIndex = Math.floor(
				Math.random() * tratamientoSeleccionado.sesiones.length
			)
			const sesionSeleccionada = tratamientoSeleccionado.sesiones[sesionIndex]

			// Calcula la hora de fin 30 minutos después de la hora de inicio
			let horaDeFin = new Date(horaInicio)
			horaDeFin.setMinutes(horaDeFin.getMinutes() + 30)

			// Validación de horas
			if (
				!horasValidas(horaDeFin.getHours(), horaDeFin.getMinutes(), horaInicio)
			) {
				console.warn(
					`La hora de fin para la reserva ${i + 1} no es válida, se ajustará.`
				)
				horaDeFin.setHours(20) // Ajusta la hora de fin a las 20:00
				horaDeFin.setMinutes(0)
			}

			// Verifica si es hora 20:00 y cambia al siguiente día
			if (horaDeFin.getHours() === 20 && horaDeFin.getMinutes() === 0) {
				horaInicio.setDate(horaInicio.getDate() + 1)
				horaInicio.setHours(8) // Establece la hora de inicio a las 8:00 del siguiente día
				horaInicio.setMinutes(0)
				horaDeFin = new Date(horaInicio)
				horaDeFin.setMinutes(horaDeFin.getMinutes() + 30)
			}

			// Resto de la lógica para crear una reserva (similar al controlador)
			const reserva = new Reserva({
				paciente: pacienteId,
				pacienteNombre,
				horario: {
					horaInicio,
					horaDeFin,
				},
				tratamiento: {
					tratamientoId: tratamientoSeleccionado.id,
					nombre: tratamientoSeleccionado.nombre,
					sesiones: obtenerCantidadSesiones(sesionSeleccionada.descripcion),
					descripcionSesion: sesionSeleccionada.descripcion,
				},
				precio:
					sesionSeleccionada.precio /
					obtenerCantidadSesiones(sesionSeleccionada.descripcion),
				observaciones,
			})

			await reserva.save()
			reservas.push(reserva)

			// Establece la hora de inicio para la siguiente reserva (1 hora de diferencia)
			horaInicio = new Date(horaDeFin)
			horaInicio.setMinutes(horaInicio.getMinutes() + 60)
		}

		console.log(`${cantidad} reservas de prueba creadas con éxito.`)
		return reservas
	} catch (error) {
		console.error('Error al generar reservas de prueba:', error.message)
		throw error
	}
}
const horasValidas = (hour, minute, day) => {
	const horaValida =
		!(hour === 20 && minute === 30) &&
		!(day.getDay() === 6 && hour === 12 && minute === 30) &&
		!(day.getDay() === 0)
	return horaValida
}

publicas.get('/actualizarMotivo', async (req, res) => {
	const pacientes = await Paciente.find({}).select('nombre')
	const tratamientos = await Tratamiento.find({})
	const response = await generarReservasPrueba(20, tratamientos, pacientes)
	res.json({ response })
})
 */
publicas.get('/api/reservas/dia/horas/:fecha', fechasHorasReservadasDeUnDia)
