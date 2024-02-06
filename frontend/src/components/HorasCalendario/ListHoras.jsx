import { compararFechas } from '../../Helpers/compararFechas.js'
import { ESTADOS_RESERVAS } from '../../constantes.js'
import { formatHoraUser } from '../../Helpers/formatHoraUser.js'
import { useReservasContext } from '../../Hooks/Context/useReservasContext.jsx'
export const ListHoras = ({ horas, reservarHora }) => {
  const { reservas } = useReservasContext()

  return (
    <ul className={`grid gap-2 p-2`}>
      {horas.map((hora, i) => {
        const horasReservadas = compararFechas(hora, reservas)
        return (
          <li
            key={hora}
            data-fecha={horasReservadas.id}
            onClick={reservarHora}
            className={`${
              horasReservadas.reservaAdmin &&
              'outline outline-2 outline-color-violeta px-1 horaAdmin'
            } ${clases(
              i,
              horasReservadas
            )} text-center rounded-md cursor-pointer hover:scale-105 transition-transform`}>
            {formatHoraUser(hora)}
          </li>
        )
      })}
    </ul>
  )
}
const colores = (estado) => {
  if (estado === ESTADOS_RESERVAS.pendiente) {
    return 'bg-color-pendiente text-white'
  } else if (estado === ESTADOS_RESERVAS.pago) {
    return 'bg-color-paga text-white'
  } else if (estado === ESTADOS_RESERVAS.cancelada) {
    return 'bg-color-cancelada text-white'
  } else {
    return ''
  }
}
const clases = (i, horasReservadas) => {
  return i == 0 || i == 1
    ? 'outline outline-2 outline-color-violeta px-1 horaAdmin'
    : colores(horasReservadas.estado)
}
