export const formularioReservaAdminSubmit = (values) => {
  const res = {
    pacienteNombre: values.nombre,
    fecha: new Date(`${values.horaInicio} ${values.hora}:00`),
    observaciones: values.observaciones,
    servicio: values.servicio,
    tratamiento: values.tratamiento,
    estado: values.estado || ''
  }

  return res
}
