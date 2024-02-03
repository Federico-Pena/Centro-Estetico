import { useRef } from 'react'
import { useObserver } from '../../../Hooks/useObserver.jsx'

export const ServicioItem = ({ servicio, index }) => {
  const servicioItemRef = useRef()
  const { isVisible } = useObserver(servicioItemRef)
  return (
    <ul
      className={`${
        isVisible ? 'animate-fadeIn' : ''
      } grid gap-2 p-4 pb-2 border border-black rounded-lg text-lg bg-color-logo font-semibold`}
      ref={servicioItemRef}>
      <li className='bg-color-violeta text-white rounded-full m-auto w-8 h-8 grid place-content-center'>
        {index + 1}
      </li>
      <li className='py-4 capitalize grid border-b border-black text-end '>
        <span className='text-start'>Servicio</span>
        {servicio.servicio}
      </li>
      <li className='py-4 capitalize text-end grid border-b border-black '>
        <span className='text-start'>Tratamiento</span>
        {servicio.tratamiento}
      </li>
      <li className='py-4 capitalize grid grid-flow-col justify-between'>
        <span>Cantidad</span>
        {servicio.cantidad}
      </li>
    </ul>
  )
}
