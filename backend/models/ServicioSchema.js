import { Schema, model } from 'mongoose'
const servicioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El campo nombre es obligatorio.'],
    unique: [true, 'El nombre del servicio ya existe.'],
    lowercase: true,
    trim: true
  },
  imagen: {
    public_id: {
      type: String
    },
    secure_url: {
      type: String,
      required: [true, 'la imagen es requerida.']
    }
  },
  descripcion: {
    type: String,
    required: [true, 'El campo descripcion es obligatorio.']
  },
  tratamientos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tratamiento'
    }
  ],
  descripcionSecundaria: {
    type: String,
    required: [true, 'El campo Descripcion Secundaria es obligatorio.']
  },
  tituloBeneficios: {
    type: String,
    required: [true, 'El campo Titulo Beneficios es obligatorio.']
  },
  beneficiosLista: [String]
})

const Servicio = model('Servicio', servicioSchema)

export default Servicio
