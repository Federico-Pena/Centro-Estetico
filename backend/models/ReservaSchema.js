import { Schema, model } from 'mongoose'
const reservaSchema = Schema(
  {
    horario: {
      horaInicio: { type: Date, required: true },
      horaDeFin: { type: Date, required: true }
    },
    paciente: {
      type: Schema.Types.ObjectId,
      ref: 'Paciente',
      required: true
    },
    tratamiento: {
      type: Schema.Types.ObjectId,
      ref: 'Tratamiento',
      required: true
    },
    observaciones: {
      type: String
    },
    estado: {
      type: String,
      enum: ['Pendiente', 'Pago', 'Cancelada'],
      default: 'Pendiente'
    },
    servicio: {
      type: Schema.Types.ObjectId,
      ref: 'Servicio',
      required: true
    }
  },
  { timestamps: true }
)

export const Reserva = model('Reserva', reservaSchema)
