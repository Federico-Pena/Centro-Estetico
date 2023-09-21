import { Schema, model } from 'mongoose'
const reservaSchema = Schema(
	{
		paciente: {
			type: Schema.Types.ObjectId,
			ref: 'Paciente',
			required: true,
		},
		pacienteNombre: {
			type: String,
			required: true,
		},
		fecha: {
			type: Date,
			required: true,
		},
		hora: {
			type: String,
			required: true,
		},
		horaFin: {
			type: String,
			required: true,
		},
		motivo: {
			type: String,
			default: '',
		},
		observaciones: {
			type: String,
		},
		estado: {
			type: String,
			enum: ['Pendiente', 'Pago', 'Cancelada'],
			default: 'Pendiente',
		},
	},
	{ timestamps: true }
)

export const Reserva = model('Reserva', reservaSchema)
