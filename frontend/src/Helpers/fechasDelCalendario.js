import {
  DIAS_DE_LA_SEMANA,
  HORA_DE_COMIENZO,
  HORA_DE_FIN_ENTRE_SEMANA,
  HORA_DE_FIN_SABADOS,
  INTERVALO_MINUTOS,
  MINUTOS_EN_UNA_HORA
} from '../constantes.js'

const esSabado = 6
const esDomingo = 0

const horasValidas = (hour, minute, day) => {
  return (
    !(hour === 20 && minute === 30) &&
    !(day.getDay() === esSabado && hour === 12 && minute === 30) &&
    day.getDay() !== esDomingo
  )
}
export const fechasDelCalendario = (currentDate) => {
  const diaActual = new Date(currentDate)

  if (Number.isNaN(diaActual.getTime())) {
    return []
  }

  diaActual.setDate(diaActual.getDate() - diaActual.getDay())

  const dias = Array.from({ length: DIAS_DE_LA_SEMANA }, (_, index) => {
    const dia = new Date(diaActual)
    const horas = []
    const horaFinalDelDia =
      dia.getDay() === esSabado ? HORA_DE_FIN_SABADOS : HORA_DE_FIN_ENTRE_SEMANA

    dia.setDate(diaActual.getDate() + index)

    for (let hour = HORA_DE_COMIENZO; hour <= horaFinalDelDia; hour++) {
      for (let minute = 0; minute < MINUTOS_EN_UNA_HORA; minute += INTERVALO_MINUTOS) {
        if (horasValidas(hour, minute, dia)) {
          const time = new Date(dia)
          time.setHours(hour, minute, 0)
          horas.push(time)
        }
      }
    }

    return { dia, horas }
  })

  return dias
}
