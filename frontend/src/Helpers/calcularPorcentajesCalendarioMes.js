import { ESTADOS_RESERVAS } from '../constantes.js'

export const calcularPorcentajesCalendarioMes = (diasMes, reservas, horasPorDia) => {
  const porcentajes = diasMes.map((dia) => ({
    fecha: dia.dia,
    pendiente: 0,
    cancelada: 0,
    paga: 0,
    libre: horasPorDia
  }))

  reservas.forEach((reserva) => {
    const fechaReserva = new Date(reserva.horario.horaInicio)
    const dia = porcentajes.find((d) => d.fecha.toDateString() === fechaReserva.toDateString())
    if (reserva.paciente.nombre === 'admin') {
      return
    }
    if (dia) {
      if (reserva.estado === ESTADOS_RESERVAS.pendiente) {
        dia.pendiente++
        dia.libre--
      } else if (reserva.estado === ESTADOS_RESERVAS.cancelada) {
        dia.cancelada++
      } else if (reserva.estado === ESTADOS_RESERVAS.pago) {
        dia.paga++
        dia.libre--
      }
    }
  })

  porcentajes.forEach((dia) => {
    const total = horasPorDia
    if (total > 0) {
      dia.pendiente = (dia.pendiente / total) * 100
      dia.cancelada = (dia.cancelada / total) * 100
      dia.paga = (dia.paga / total) * 100
      dia.libre = (dia.libre / total) * 100
    }
  })

  return porcentajes
}
