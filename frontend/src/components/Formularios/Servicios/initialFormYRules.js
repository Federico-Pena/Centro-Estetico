export const validationRules = {
  nombre: {
    required: true
  },
  imagen: {
    required: true
  },
  descripcion: { required: true },
  descripcionSecundaria: { required: true },
  tituloBeneficios: { required: true },
  beneficiosLista: {
    minItems: 1
  }
}
export const initialFormData = {
  nombre: '',
  imagen: null,
  imgPreview: '',
  descripcion: '',
  descripcionSecundaria: '',
  tituloBeneficios: '',
  beneficiosLista: []
}
