import { compararFechas } from '../../Helpers/compararFechas.js'
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
              (horasReservadas.reservaAdmin || i === 1 || i === 0) &&
              'outline outline-2 outline-color-violeta px-1 horaAdmin'
            } ${
              horasReservadas.estado ? `${horasReservadas.estado} text-white` : ''
            } text-center rounded-md cursor-pointer hover:scale-105 transition-transform`}>
            {formatHoraUser(hora)}
          </li>
        )
      })}
    </ul>
  )
}
