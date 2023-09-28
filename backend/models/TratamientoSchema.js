import { Schema, model } from 'mongoose'

const sesionSchema = new Schema({
	descripcion: String,
	precio: Number,
})

const tratamientoSchema = Schema(
	{
		nombre: {
			type: String,
			required: true,
		},
		sesiones: [sesionSchema],
	},
	{ timestamps: true }
)

export const Tratamiento = model('Tratamiento', tratamientoSchema)
