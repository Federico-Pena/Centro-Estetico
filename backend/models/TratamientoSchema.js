import { Schema, model } from 'mongoose'

const tratamientoSchema = new Schema({
  servicio: { type: Schema.Types.ObjectId, ref: 'Servicio' },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria.'],
    lowercase: true,
    trim: true
  },
  costoTotal: { type: Number, required: [true, 'El costo total es obligatorio.'] },
  sesiones: { type: Number, required: [true, 'El numero de sesiones es obligatorio.'] },
  costoPorSesion: { type: Number },
  tiempo: { type: Number, required: [true, 'El tiempo es obligatorio.'] },
  enPromocion: { type: Boolean, default: false },
  imagen: {
    public_id: {
      type: String
    },
    secure_url: {
      type: String
    }
  }
})

tratamientoSchema.pre('save', function (next) {
  if (this.costoTotal && this.sesiones) {
    this.costoPorSesion = this.costoTotal / this.sesiones
  } else {
    this.costoPorSesion = 0
  }
  next()
})

const Tratamiento = model('Tratamiento', tratamientoSchema)

export default Tratamiento
