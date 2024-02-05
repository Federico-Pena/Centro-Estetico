import { Schema, model } from 'mongoose'
const servicioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  imagen: {
    public_id: {
      type: String
    },
    secure_url: {
      type: String,
      required: true
    }
  },
  descripcion: {
    type: String,
    required: true
  },
  tratamientos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tratamiento'
    }
  ],
  descripcionSecundaria: {
    type: String,
    required: true
  },
  tituloBeneficios: {
    type: String,
    required: true
  },
  beneficiosLista: [String]
})

const Servicio = model('Servicio', servicioSchema)

export default Servicio
