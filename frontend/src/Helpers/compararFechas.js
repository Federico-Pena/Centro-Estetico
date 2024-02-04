import { ESTADOS_RESERVAS } from '../constantes.js'

const conReserva = (fechasOcupadas) => {
  const estadoMap = {
    [ESTADOS_RESERVAS.pago]: 'paga',
    [ESTADOS_RESERVAS.pendiente]: 'pendiente',
    [ESTADOS_RESERVAS.cancelada]: 'cancelada'
  }

  return fechasOcupadas.reduce(
    (acumulador, reserva) => {
      const estadoProp = estadoMap[reserva.estado]
      if (estadoProp) {
        acumulador[estadoProp] = reserva
      }
      return acumulador
    },
    {
      paga: null,
      pendiente: null,
      cancelada: null
    }
  )
}
const makeId = (fecha) => {
  const diaDesdeCalendario = fecha.toISOString().split('T')[0]
  const horas = fecha.getHours()
  const minutos = fecha.getMinutes()
  const minutosConDosDigitos = minutos < 10 ? `0${minutos}` : minutos
  const horasConDosDigitos = horas < 10 ? `0${horas}` : horas

  const horaDesdeCalendario = `${horasConDosDigitos}:${minutosConDosDigitos}`
  const id = `${diaDesdeCalendario}T${horaDesdeCalendario}`
  return id
}
export const compararFechas = (fecha, reservas) => {
  if (!(fecha instanceof Date) || !Array.isArray(reservas)) {
    return {}
  }
  const fechaISOString = fecha.toISOString()
  const proximaMediaHora = new Date(`${fecha}`)
  proximaMediaHora.setMinutes(proximaMediaHora.getMinutes() + 30)

  const id = makeId(fecha)
  const proximaHoraNoDisponible = reservas.find(
    (reserva) =>
      new Date(reserva.horario.horaInicio).toISOString() === proximaMediaHora.toISOString()
  )
  const reserva = reservas.find((reserva) => {
    const inicioReservaISO = new Date(reserva.horario.horaInicio).toISOString()
    const finReservaISO = new Date(reserva.horario.horaDeFin).toISOString()
    return inicioReservaISO === fechaISOString && finReservaISO === proximaMediaHora.toISOString()
  })
  const fechasOcupadas = reservas.filter((reserva) => {
    const inicioReservaISO = new Date(reserva.horario.horaInicio).toISOString()
    const finReservaISO = new Date(reserva.horario.horaDeFin).toISOString()
    return inicioReservaISO === fechaISOString || finReservaISO === fechaISOString
  })
  const reservaAdmin = fechasOcupadas.some((reserva) => reserva.paciente?.nombre === 'admin')
  const { paga, pendiente, cancelada } = conReserva(fechasOcupadas)
  const estado = paga?.estado || pendiente?.estado || cancelada?.estado || ''
  const proximaHora =
    proximaHoraNoDisponible?.estado === ESTADOS_RESERVAS.cancelada
      ? ''
      : proximaHoraNoDisponible?.estado || ''
  return {
    id,
    estado: estado,
    reservaAdmin: reservaAdmin || proximaHoraNoDisponible?.pacienteNombre === 'admin',
    reservadas: fechasOcupadas,
    proximaHoraNoDisponible: proximaHora,
    reserva
  }
}
