import { ESTADOS_RESERVAS } from '../constantes.js'
import { formatHoraUser } from './formatHoraUser.js'

const estados = (reservasDeHoraSeleccionada) => {
  let estadoString = ''
  const canceladasPrimero = reservasDeHoraSeleccionada.sort((a, b) => {
    if (a.estado === ESTADOS_RESERVAS.cancelada && b.estado !== ESTADOS_RESERVAS.cancelada) {
      return -1
    }
    if (a.estado !== ESTADOS_RESERVAS.cancelada && b.estado === ESTADOS_RESERVAS.cancelada) {
      return 1
    }
    return 0
  })

  canceladasPrimero.forEach((reserva) => {
    const estado = reserva.estado
    estadoString = estado
  })
  return estadoString
}

export const compararFechas = (fecha, reservas) => {
  if (!(fecha instanceof Date) || !Array.isArray(reservas)) {
    return {}
  }
  const fechaISOString = fecha.toISOString()
  const fechaId = fechaISOString.split('T')[0]
  const horaId = formatHoraUser(fecha)
  const proximaMediaHora = new Date(`${fecha}`)
  proximaMediaHora.setMinutes(proximaMediaHora.getMinutes() + 30)
  const proximaMediaHoraISOString = proximaMediaHora.toISOString()

  const id = `${fechaId}T${horaId}`

  const reservaDeProximaMediaHora = reservas.find(
    (reserva) =>
      (new Date(reserva.horario.horaInicio).toISOString() === proximaMediaHoraISOString ||
        new Date(reserva.horario.horaDeFin).toISOString() === proximaMediaHoraISOString) &&
      reserva.estado !== ESTADOS_RESERVAS.cancelada
  )

  const reservasDeHoraSeleccionada = reservas.filter((reserva) => {
    const inicioReservaISO = new Date(reserva.horario.horaInicio).toISOString()
    const finReservaISO = new Date(reserva.horario.horaDeFin).toISOString()
    return inicioReservaISO === fechaISOString || finReservaISO === fechaISOString
  })

  const estado = estados(reservasDeHoraSeleccionada)

  const reservaAdmin = reservasDeHoraSeleccionada.some(
    (reserva) => reserva.paciente?.nombre === 'admin'
  )

  return {
    id,
    estado,
    reservaAdmin,
    reservadas: reservasDeHoraSeleccionada,
    proximaHoraNoDisponible: reservaDeProximaMediaHora
  }
}
