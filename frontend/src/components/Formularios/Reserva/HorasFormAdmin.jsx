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
    const comprobación = compararFechas(new Date(`${values.horaInicio} ${hora}`), reservasDelDia)
    if (
      (comprobación.estado && comprobación.estado !== ESTADOS_RESERVAS.cancelada) ||
      comprobación.proximaHoraNoDisponible
    ) {
      setMensaje('Hora no disponible para hacer una reserva')
      return
    } else {
      const horaValue = {
        target: {
          name: 'hora',
          value: hora
        }
      }
      handleChange(horaValue)
    }
  }

  return (
    <>
      <ul className='grid gap-4 grid-cols-5'>
        <li className='col-span-full'>Hora</li>
        {horasDisponibles.map((hor) => {
          return (
            <li
              className={`p-2 rounded-xl w-full grid place-content-center shadow-md max-w-20  transition-[max-width]  ${formarClases(
                hor,
                values
              )} ${
                formarClases(hor, values).includes('cursor-not-allowed') ? '' : 'cursor-pointer'
              }`}
              key={hor.id}
              onClick={handleSetHora}>
              {hor.id.split('T')[1]}
            </li>
          )
        })}
      </ul>
      {errors.hora && <small className='text-red-600'>* {errors.hora}</small>}

      <ul className='grid grid-flow-col grid-rows-3 gap-4 border border-slate-500 p-4 rounded-lg'>
        <li className='col-span-full opacity-50 p-2 rounded-xl w-full grid place-content-center shadow-md m-auto bg-slate-50'>
          No disponible
        </li>
        <li
          className={`p-2 rounded-xl w-full grid place-content-center shadow-md m-auto  bg-slate-50`}>
          Disponible
        </li>
        <li
          className={`${estadoClases.Pago} p-2 rounded-xl w-full grid place-content-center shadow-md m-auto  bg-slate-50`}>
          Paga
        </li>
        <li
          className={`${estadoClases.Pendiente} p-2 rounded-xl w-full grid place-content-center shadow-md m-auto  bg-slate-50`}>
          Pendiente
        </li>
        <li
          className={`${estadoClases.Cancelada} p-2 rounded-xl w-full grid place-content-center shadow-md m-auto  bg-slate-50`}>
          Cancelada
        </li>
      </ul>
    </>
  )
}
const estadoClases = {
  Pago: 'text-color-paga font-bold',
  Cancelada: 'text-color-cancelada font-bold',
  Pendiente: 'text-color-pendiente font-bold'
}
const formarClases = (hor, values) => {
  const esProximaHoraNoDisponible = hor.proximaHoraNoDisponible
  const esHoraActual = hor.id.split('T')[1] === values.hora
  const esEstadoPagoPendiente =
    estadoClases[hor.estado] === estadoClases.Pago ||
    estadoClases[hor.estado] === estadoClases.Pendiente

  const clases = [
    esProximaHoraNoDisponible && 'opacity-50 cursor-not-allowed',
    estadoClases[hor.estado],
    esHoraActual
      ? 'bg-color-violeta col-span-full row-start-2 text-white max-w-xl font-bold opacity-100 cursor-not-allowed'
      : 'bg-slate-50 ',
    esEstadoPagoPendiente && ' opacity-50 cursor-not-allowed'
  ]

  return clases.filter(Boolean).join(' ')
}
