import { formatFechaParaUser } from '../../../Helpers/formatFechaParaUser.js'
// ERROR CON TILDE EN FUNCIÓN toCapitalize
function toCapitalize(str) {
  if (str) {
    return str
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1)
      })
      .join(' ')
  } else {
    return str
  }
}
export const formularioReservaSubmit = (reserva) => {
  const linwhat = import.meta.env.VITE_W_NUM
  const mensaje = `Me interesa hacer la siguiente reserva. 
  Nombre: ${toCapitalize(reserva.nombre)}.
  Fecha: ${toCapitalize(formatFechaParaUser(`${reserva.fecha} ${reserva.hora}`))}.
  Hora: ${reserva.hora}. 
  Servicio: ${toCapitalize(reserva.servicio)}. 
  Tratamiento: ${toCapitalize(reserva.tratamiento)}. 
  ${reserva.observaciones && `Observaciones: ${toCapitalize(reserva.observaciones)}.`}`
  window.open(`https://wa.me/${linwhat}?text=${encodeURIComponent(mensaje)}`, '_blank')
}
