export function formDataServicio(values) {
  const servicioFormData = new FormData()
  servicioFormData.append('nombre', values.nombre.toLowerCase())
  servicioFormData.append('foto', values.imagen)
  servicioFormData.append('descripcion', values.descripcion)
  servicioFormData.append('descripcionSecundaria', values.descripcionSecundaria)
  servicioFormData.append('tituloBeneficios', values.tituloBeneficios)
  values.beneficiosLista.forEach((beneficio, index) => {
    servicioFormData.append(`beneficiosLista[${index}]`, beneficio)
  })
  return servicioFormData
}
