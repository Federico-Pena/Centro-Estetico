export const validationRules = {
  nombre: { required: true },
  costoTotal: { required: true },
  sesiones: { required: true, minValue: 1 },
  tiempo: { required: true },
  descripcion: { required: true }
}
export const initialFormData = (tratamiento) => {
  const initialForm = {
    nombre: tratamiento?.servicio.nombre || '',
    descripcion: tratamiento?.descripcion || '',
    tiempo: tratamiento?.tiempo || '',
    costoTotal: tratamiento?.costoTotal || '',
    sesiones: tratamiento?.sesiones || '',
    enPromocion: tratamiento?.enPromocion || false,
    imagen: tratamiento?.imagen || ''
  }
  return initialForm
}
