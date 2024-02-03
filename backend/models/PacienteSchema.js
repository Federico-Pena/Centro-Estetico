import { Schema, model } from 'mongoose'

const pacienteSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true
    },
    fechaDeNac: { type: String, default: '' },
    cedula: { type: String, default: '' },
    edad: { type: String, default: '' },
    sociedad: { type: String, default: '' },
    telefono: { type: String, default: '' },
    observaciones: { type: String, default: '' },
    contactoEmergencia: {
      nombreContacto2: { type: String, default: '' },
      telefonoContacto2: { type: String, default: '' }
    },
    alimentacion: {
      type: String,
      default: ''
    },
    descanso: {
      type: String,
      default: ''
    },
    hidratacion: {
      type: String,
      default: ''
    },
    alcohol: {
      type: String,
      default: ''
    },
    fuma: {
      type: String,
      default: ''
    },
    alergia: {
      type: String,
      default: ''
    },
    circulatorio: {
      type: String,
      default: ''
    },
    embarazo: {
      type: String,
      default: ''
    },
    operaciones: {
      type: String,
      default: ''
    },
    oncologicas: {
      type: String,
      default: ''
    },
    enfermedades: {
      type: String,
      default: ''
    },
    medicamentos: {
      type: String,
      default: ''
    },
    implantes: {
      type: String,
      default: ''
    },
    servicio: {
      type: Schema.Types.ObjectId,
      ref: 'Servicio'
    },
    tratamiento: {
      type: Schema.Types.ObjectId,
      ref: 'Tratamiento'
    },
    /*  tratamiento: {
      type: String,
      enum: [
        'Drenaje Linfático',
        'Masaje Estético',
        'Exfoliación Corporal',
        'Masaje Cérvico-Craneal',
        'Masaje Con Piedras Calientes',
        'Masaje Descontracturante',
        'Masaje Relajante',
        'Masaje Prenatal',
        'Barras De Access',
        'Barras De access',
        ''
      ],
      default: 'Masaje Estético'
    }, */
    foto: {
      public_id: {
        type: String
      },
      secure_url: {
        type: String,
        default:
          'https://res.cloudinary.com/fotoscloudinary/image/upload/v1692319008/Masajes/user-photo_cfemko.webp'
      }
    }
  },
  { timestamps: true }
)

export const Paciente = model('Paciente', pacienteSchema)
