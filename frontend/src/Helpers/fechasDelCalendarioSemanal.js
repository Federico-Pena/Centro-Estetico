/**
 * Genera un array de objetos que representan los días de la semana junto con las horas del dia.
 * @param {Date} currentDate - La fecha actual.
 * @param {number} diasDeLaSemana - El número de días en una semana.
 * @param {number} horaDeComienzo - La hora de inicio del horario laboral.
 * @param {number} horaDeFin - La hora de finalización del horario laboral entre semana.
 * @param {number} intervaloMinutos - El intervalo de tiempo entre cada hora.
 * @param {number} minutosEnUnaHora - El número de minutos en una hora.
 * @returns {Array} - Un array de objetos que contiene los días de la semana junto con las horas de trabajo.
 */
export const fechasDelCalendarioSemanal = (
  currentDate,
  diasDeLaSemana,
  horaDeComienzo,
  horaDeFin,
  intervaloMinutos
) => {
  const diaActual = new Date(currentDate)
  if (Number.isNaN(diaActual.getTime())) {
    return []
  }

  diaActual.setDate(diaActual.getDate() - diaActual.getDay())

  const dias = Array.from({ length: diasDeLaSemana }, (_, index) => {
    const dia = new Date(diaActual)
    const horas = []

    dia.setDate(diaActual.getDate() + index + 1)

    for (let hour = horaDeComienzo; hour <= horaDeFin; hour++) {
      for (let minute = 0; minute < 60; minute += intervaloMinutos) {
        if (!(hour === 20 && minute === 30)) {
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
