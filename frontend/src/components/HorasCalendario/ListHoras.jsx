import { compararFechas } from '../../Helpers/compararFechas.js'
import { formatHoraUser } from '../../Helpers/formatHoraUser.js'
import { useReservasContext } from '../../Hooks/Context/useReservasContext.jsx'
import { ESTADOS_RESERVAS } from '../../constantes.js'
export const ListHoras = ({ horas, reservarHora }) => {
  const { reservas } = useReservasContext()

  return (
    <ul className={`grid gap-2 p-2 items-start self-start`}>
      {horas.map((hora) => {
        const diaNumber = hora.getDay()
        const horaNumber = hora.getHours()
        const noLaboral = diaNumber === 0 || diaNumber === 6 || horaNumber <= 8

        const { reservaAdmin, id, estado, proximaHoraNoDisponible } = compararFechas(hora, reservas)

        return (
          <li
            key={hora}
            data-fecha={id}
            onClick={reservarHora}
            className={`${estado} ${
              reservaAdmin ? 'outline outline-2 outline-color-violeta' : ''
            } ${
              noLaboral ? 'outline outline-2 outline-color-violeta horaAdmin' : ''
            } ${formarClases(
              estado,
              proximaHoraNoDisponible
            )} text-center rounded-md hover:scale-105 transition-transform`}>
            {formatHoraUser(hora)}
          </li>
        )
      })}
    </ul>
  )
}

const formarClases = (estado, proximaHoraNoDisponible) => {
  const esProximaHoraNoDisponible = proximaHoraNoDisponible
  const horaEstado = estado
  const horaNoCancelada =
    horaEstado &&
    (horaEstado === ESTADOS_RESERVAS.pago || horaEstado === ESTADOS_RESERVAS.pendiente)

  const clases = [
    estado && `${estado} text-white`,
    !esProximaHoraNoDisponible && !horaNoCancelada && 'cursor-pointer',
    horaNoCancelada && `cursor-pointer`,
    esProximaHoraNoDisponible && !horaNoCancelada && 'opacity-50 cursor-not-allowed'
  ]
  return clases.filter(Boolean).join(' ')
}
