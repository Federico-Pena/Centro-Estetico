import { Schema, model } from 'mongoose'
const reservaSchema = Schema(
  {
    paciente: {
      type: Schema.Types.ObjectId,
      ref: 'Paciente',
      required: true
    },
    horario: {
      horaInicio: { type: Date, required: true },
      horaDeFin: { type: Date, required: true }
    },
    servicio: {
      type: Schema.Types.ObjectId,
      ref: 'Servicio',
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
    }
    /*  pacienteNombre: {
      type: String,
      required: true
    },
    tratamiento: {
      type: {
        tratamientoId: {
          type: Schema.Types.ObjectId,
          ref: 'Tratamiento',
          required: true
        },
        nombre: {
          type: String,
          required: true
        },
        sesiones: {
          type: Number,
          default: 1
        },
        descripcionSesion: {
          type: String
        }
      },
      required: true
    },
    ,
    tratamientoId: {
      type: Schema.Types.ObjectId,
      ref: 'Tratamiento',
      required: true
    },
    precio: {
      type: Number,
      default: 0
    } */
  },
  { timestamps: true }
)

export const Reserva = model('Reserva', reservaSchema)
