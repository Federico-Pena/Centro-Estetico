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
		/* 		fecha: {
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
		}, */
		horario: {
			horaInicio: { type: Date, required: true },
			horaDeFin: { type: Date, required: true },
		},
		/* 	motivo: {
			type: String,
			default: '',
		}, */
		tratamiento: {
			type: {
				tratamientoId: {
					type: Schema.Types.ObjectId,
					ref: 'Tratamiento',
					required: true,
				},
				nombre: {
					type: String,
					required: true,
				},
				sesiones: {
					type: Number,
					default: 1,
				},
				descripcionSesion: {
					type: String,
				},
			},
			required: true,
		},
		observaciones: {
			type: String,
		},
		precio: {
			type: Number,
			default: 0,
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
