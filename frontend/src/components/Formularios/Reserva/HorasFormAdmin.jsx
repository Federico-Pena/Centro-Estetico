import { compararFechas } from '../../../Helpers/compararFechas.js'
import { ESTADOS_RESERVAS } from '../../../constantes.js'

export const HorasFormAdmin = ({
  horasDisponibles,
  values,
  reservasDelDia,
  handleChange,
  setMensaje,
  errors
}) => {
  const handleSetHora = (e) => {
    const hora = e.target.textContent
    const horaValue = {
      target: {
        name: 'hora',
        value: hora
      }
    }
    const comprobación = compararFechas(new Date(`${values.horaInicio} ${hora}`), reservasDelDia)
    if (
      (comprobación.estado && comprobación.estado !== ESTADOS_RESERVAS.cancelada) ||
      comprobación.proximaHoraNoDisponible
    ) {
      setMensaje('Hora no disponible para hacer una reserva')
      return
    } else {
      handleChange(horaValue)
    }
  }

  return (
    <>
      <ul className='grid gap-4 grid-cols-4'>
        <li className='col-span-full'>Hora</li>
        {horasDisponibles.map((hora) => {
          const { reservaAdmin, id, estado, proximaHoraNoDisponible } = hora
          const esHoraActual = id.split('T')[1] === values.hora

          return (
            <li
              className={`${estado} ${
                reservaAdmin ? 'outline outline-2 outline-color-violeta' : ''
              } p-2 rounded-xl w-full grid place-content-center shadow-md max-w-20 transition-[max-width] ${formarClases(
                estado,
                proximaHoraNoDisponible,
                esHoraActual
              )} `}
              key={id}
              onClick={handleSetHora}>
              {id.split('T')[1]}
            </li>
          )
        })}
      </ul>
      {errors.hora && <small className='text-red-600'>* {errors.hocra}</small>}
    </>
  )
}
const formarClases = (estado, proximaHoraNoDisponible, esHoraActual) => {
  const esProximaHoraNoDisponible = proximaHoraNoDisponible
  const horaEstado = estado
  const horaNoCancelada =
    horaEstado &&
    (horaEstado === ESTADOS_RESERVAS.pago || horaEstado === ESTADOS_RESERVAS.pendiente)

  const clases = [
    estado && `${estado} text-white`,
    !esProximaHoraNoDisponible && !horaNoCancelada && !esHoraActual && 'cursor-pointer  bg-white',
    horaNoCancelada && `cursor-not-allowed`,
    esProximaHoraNoDisponible && !horaNoCancelada && 'opacity-50 cursor-not-allowed',
    esHoraActual &&
      'bg-color-violeta col-span-full row-start-2 text-white max-w-xl font-bold opacity-100 cursor-default'
  ]
  return clases.filter(Boolean).join(' ')
}
