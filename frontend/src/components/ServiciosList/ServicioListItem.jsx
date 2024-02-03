import { useRef } from 'react'
import { useObserver } from '../../Hooks/useObserver.jsx'
import { Delete, Edit } from '../Icons/Icons.jsx'

export const ServicioListItem = ({ ser, handleBorrarServicio, handleEditarServicio }) => {
  const servicioRef = useRef()
  const { isVisible } = useObserver(servicioRef)
  return (
    <ul
      ref={servicioRef}
      className={`${
        isVisible ? 'animate-toastIn' : ''
      } grid grid-cols-2 gap-2 border border-slate-300 rounded-md justify-between items-center px-4 py-4 capitalize`}>
      <li>
        {isVisible && (
          <img
            className='rounded-lg w-24 aspect-square object-cover'
            src={ser.imagen.secure_url}
            alt={ser.nombre}
          />
        )}
      </li>
      <li className='text-center border-b pb-4'>{ser.nombre}</li>
      <li>Tratamientos: {ser.tratamientos.length || 0}</li>
      <li className='flex gap-4 items-center justify-end hover:[&>svg]:text-color-violeta [&>svg]:cursor-pointer [&>svg]:text-xl [&>svg]:text-slate-600'>
        <Edit onClickFunction={() => handleEditarServicio(ser)} />
        <Delete onClickFunction={() => handleBorrarServicio(ser)} />
      </li>
    </ul>
  )
}
