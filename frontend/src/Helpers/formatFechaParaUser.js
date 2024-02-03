export const formatFechaParaUser = (fecha) => {
  const fechaNueva = new Date(fecha)
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short'
  }
  const fechaFormateada = fechaNueva.toLocaleDateString('es-UY', options)
  if (fechaNueva instanceof Date && fechaFormateada !== 'Invalid Date') {
    return fechaFormateada
  } else {
    return ''
  }
}
