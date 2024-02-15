import { useRef } from 'react'
import { useObserver } from '../../../Hooks/useObserver.jsx'

export const ServicioItem = ({ servicio, index }) => {
  const servicioItemRef = useRef()
  const { isVisible } = useObserver(servicioItemRef)
  return (
    <ul
      className={`${
        isVisible ? 'animate-fadeIn' : ''
      } relative grid gap-2 p-4 pb-2 border border-black rounded-lg text-lg bg-color-logo font-semibold`}
      ref={servicioItemRef}>
      {isVisible && (
        <img
          src={servicio.imagen?.secure_url}
          alt={servicio.servicio}
          className='aspect-square w-full object-cover h-52 rounded-lg'
        />
      )}
      <li className='bg-color-violeta text-white rounded-full m-auto w-8 h-8 grid place-content-center'>
        {index + 1}
      </li>
      <li className='py-4 capitalize grid grid-flow-col gap-4 border-b border-black'>
        Servicio
        <span className='text-end text-nowrap overflow-auto'>{servicio.servicio}</span>
      </li>
      <li className='py-4 capitalize grid grid-flow-col gap-4 border-b border-black '>
        Tratamiento
        <span className='text-end text-nowrap overflow-auto'>{servicio.tratamiento}</span>
      </li>
      <li className='py-4 capitalize grid grid-flow-col gap-4 border-b border-black '>
        Sesiones
        <span className='text-end text-nowrap overflow-auto'>{servicio.sesiones}</span>
      </li>
      <li className='py-4 capitalize grid grid-flow-col gap-4 justify-between'>
        Cantidad
        <span className='text-end text-nowrap overflow-auto'> {servicio.cantidad}</span>
      </li>
    </ul>
  )
}
