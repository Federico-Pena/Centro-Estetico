import { formatHoraUser } from '../../helpers/Formato/formatHoraUser'
import { encontrarHorasReservadas } from '../../helpers/FechasHoras/encontrarHorasDisponibles'
import { ESTADOS_RESERVAS } from '../../constantes'

export const ListaHoras = ({ reservas, diaConHoras, horas, onClickReservar }) => {
  return horas.map((hora, i) => {
    const horaReservada = encontrarHorasReservadas(reservas, diaConHoras).find(
      (reservadaHora) =>
        reservadaHora.hora.toISOString() === hora.toISOString() &&
        reservadaHora.estado !== ESTADOS_RESERVAS.cancelada
    )
    let claseHora = 'liHora'
    if (i == 0 || i == 1) {
      claseHora += ' paraReservaAdmin'
    }
    if (horaReservada && horaReservada.nombreReserva === 'admin') {
      claseHora += ` paraReservaAdmin`
    }
    if (horaReservada) {
      claseHora += ` ${horaReservada.estado}`
    }
    return (
      <li
        key={hora.toISOString()}
        data-fecha={hora}
        onClick={onClickReservar}
        className={claseHora}>
        {formatHoraUser(hora)}
      </li>
    )
  })
}
