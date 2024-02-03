export const initialForm = (paciente) => {
  const initialFormData = {
    nombre: paciente?.nombre || '',
    fechaDeNac: paciente?.fechaDeNac || '',
    cedula: paciente?.cedula || '',
    edad: paciente?.edad || '',
    sociedad: paciente?.sociedad || '',
    telefono: paciente?.telefono || '',
    observaciones: paciente?.observaciones || '',
    nombreContacto2: paciente?.contactoEmergencia?.nombreContacto2 || '',
    telefonoContacto2: paciente?.contactoEmergencia?.telefonoContacto2 || '',
    alimentacion: paciente?.alimentacion || '',
    descanso: paciente?.descanso || '',
    hidratacion: paciente?.hidratacion || '',
    alcohol: paciente?.alcohol || '',
    fuma: paciente?.fuma || '',
    alergia: paciente?.alergia || '',
    circulatorio: paciente?.circulatorio || '',
    embarazo: paciente?.embarazo || '',
    operaciones: paciente?.operaciones || '',
    oncologicas: paciente?.oncologicas || '',
    enfermedades: paciente?.enfermedades || '',
    medicamentos: paciente?.medicamentos || '',
    implantes: paciente?.implantes || '',
    tratamiento: paciente?.tratamiento?.descripcion || '',
    servicio: paciente?.servicio?.nombre || '',
    foto: paciente?.foto || null
  }
  return initialFormData
}
export const validationRules = {
  nombre: { required: true }
}
