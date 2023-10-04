export const encontrarHorasReservadas = (reservas, diasSemana) => {
  if (reservas instanceof Array) {
    return reservas.reduce((horasReservadas, reserva) => {
      const horaInicio = new Date(reserva.horario.horaInicio)
      const horaDeFin = new Date(reserva.horario.horaDeFin)

      const estadoReserva = reserva.estado
      const nombreReserva = reserva.pacienteNombre
      const horasReservadasParaReserva = diasSemana.reduce((horasReservadasParaDia, dia) => {
        const horasReservadasParaReservaDia = dia.horas
          .filter((hora) => {
            return hora >= horaInicio && hora <= horaDeFin
          })
          .map((hora) => {
            return {
              hora,
              estado: estadoReserva,
              nombreReserva: nombreReserva === 'admin' ? nombreReserva : ''
            }
          })

        return [...horasReservadasParaDia, ...horasReservadasParaReservaDia]
      }, [])

      return [...horasReservadas, ...horasReservadasParaReserva]
    }, [])
  } else {
    return []
  }
}
