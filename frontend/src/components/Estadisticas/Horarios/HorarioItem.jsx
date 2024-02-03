import { useRef } from 'react'
import { useObserver } from '../../../Hooks/useObserver.jsx'

export const HorarioItem = ({ horario, index }) => {
  const horarioItemRef = useRef()
  const { isVisible } = useObserver(horarioItemRef)
  return (
    <ul
      key={horario.dia + horario.hora}
      className={`${
        isVisible ? 'animate-fadeIn' : ''
      } grid gap-2 p-4 pb-2 border border-black rounded-lg bg-color-logo font-semibold`}
      ref={horarioItemRef}>
      <li className='bg-color-violeta text-white rounded-full m-auto w-8 h-8 grid place-content-center'>
        {index + 1}
      </li>
      <li className='grid py-4 grid-flow-col justify-between border-b border-black '>
        <span>Día</span>
        {horario.dia}
      </li>
      <li className='grid py-4 grid-flow-col justify-between border-b border-black '>
        <span>Hora</span>
        {horario.hora}
      </li>
      <li className='text-end grid py-4 grid-flow-col justify-between '>
        <span>Reservas</span>
        {horario.cantidad}
      </li>
    </ul>
  )
}
