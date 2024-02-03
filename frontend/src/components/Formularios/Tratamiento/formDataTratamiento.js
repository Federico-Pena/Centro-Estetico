export function formDataTratamiento(values) {
  const tratamientoFormData = new FormData()
  tratamientoFormData.append('nombre', values.servicio.nombre.toLowerCase())
  tratamientoFormData.append('descripcion', values.descripcion)
  tratamientoFormData.append('costoTotal', values.costoTotal)
  tratamientoFormData.append('tiempo', values.tiempo)
  tratamientoFormData.append('sesiones', values.sesiones)
  tratamientoFormData.append('enPromocion', values.enPromocion)
  values.enPromocion && tratamientoFormData.append('foto', values.imagen)
  return tratamientoFormData
}
