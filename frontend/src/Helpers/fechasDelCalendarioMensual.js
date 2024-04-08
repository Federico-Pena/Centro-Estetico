/**
 * Genera un array de objetos que representan los días de un mes junto con las horas del día.
 * @param {Date} currentDate - La fecha actual.
 * @param {number} intervaloMinutos - El intervalo de tiempo entre cada hora.
 * @param {number} minutosEnUnaHora - El número de minutos en una hora.
 * @returns {Array} - Un array de objetos que contiene los días del mes junto con las horas de trabajo.
 */
export const fechasDelCalendarioMensual = (
  currentDate,
  horaDeComienzo,
  horaDeFin,
  intervaloMinutos
) => {
  const fecha = new Date(currentDate)
  const primerDiaDelMes = new Date(fecha.getFullYear(), fecha.getMonth(), 1)
  const ultimoDiaDelMes = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0)

  const dias = []
  for (let dia = primerDiaDelMes; dia <= ultimoDiaDelMes; dia.setDate(dia.getDate() + 1)) {
    const horas = []
    for (let hour = horaDeComienzo; hour <= horaDeFin; hour++) {
      for (let minute = 0; minute < 60; minute += intervaloMinutos) {
        const time = new Date(dia)
        time.setHours(hour, minute, 0)
        horas.push(time)
      }
    }
    dias.push({ dia: new Date(dia), horas })
  }

  return dias
}
