import { Reserva } from '../../models/ReservaSchema.js'
import { Paciente } from '../../models/PacienteSchema.js'
import { formatFechaParaUser } from '../../../frontend/src/helpers/Formato/formatFechaParaUser.js'
export const agregarReserva = async (req, res) => {
	try {
		const { pacienteNombre, fecha, hora, horaFin, observaciones, motivo } =
			req.body
		let pacienteExistente = await Paciente.findOne({ nombre: pacienteNombre })
		if (!pacienteExistente) {
			pacienteExistente = new Paciente({ nombre: pacienteNombre })
			await pacienteExistente.save()
		}
		const reserva = new Reserva({
			paciente: pacienteExistente._id,
			pacienteNombre: pacienteExistente.nombre,
			fecha,
			horaFin,
			motivo,
			hora,
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
