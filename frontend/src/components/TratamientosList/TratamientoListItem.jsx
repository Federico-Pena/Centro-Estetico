import { useRef } from 'react'
import { Checkbox, CheckboxChecked, Delete, Edit } from '../Icons/Icons.jsx'
import { useObserver } from '../../Hooks/useObserver.jsx'

export const TratamientoListItem = ({ tratamiento, handleEdit, handleDelete }) => {
  const tratamientoRef = useRef()
  const { isVisible } = useObserver(tratamientoRef)
  return (
    <ul
      className={`${
        isVisible ? 'animate-toastIn' : ''
      } grid border border-black rounded-lg bg-color-logo`}
      ref={tratamientoRef}>
      <li className='p-4 border-b border-black uppercase text-center font-betonga font-bold text-xl text-color-violeta'>
        {tratamiento.servicio.nombre}
      </li>
      <li className='grid p-4 border-b border-black'>
        Descripción <span className='text-end'>{tratamiento.descripcion}</span>
      </li>
      <li className='flex justify-between p-4 border-b border-black'>
        Tiempo <span>{tratamiento.tiempo} minutos</span>
      </li>
      <li className='flex justify-between p-4 border-b border-black'>
        {`${tratamiento.sesiones === 1 ? 'Sesión' : 'Sesiones'}`}
        <span>{`${tratamiento.sesiones}`}</span>
      </li>
      <li className='flex justify-between p-4 border-b border-black'>
        Costo por sesión <span>{`$ ${tratamiento.costoPorSesion.toFixed(2)}`}</span>
      </li>
      <li className='flex justify-between p-4 border-b border-black'>
        Costo total <span>{`$ ${tratamiento.costoTotal}`}</span>
      </li>
      {tratamiento.enPromocion ? (
        <li className='[&>svg]:text-green-600 [&>svg]:text-xl flex items-center justify-between p-4 border-b border-black'>
          En Promoción <CheckboxChecked />
        </li>
      ) : (
        <li className='[&>svg]:text-red-600 flex items-center justify-between p-4 border-b border-black'>
          En Promoción <Checkbox />
        </li>
      )}
      <li className='grid grid-flow-col justify-around p-4 [&>svg]:text-2xl [&>svg]:text-color-violeta hover:[&>svg]:scale-110 [&>svg]:cursor-pointer [&>svg]:transition-transform'>
        <Edit
          onClickFunction={() => {
            handleEdit(tratamiento)
          }}
        />

        <Delete
          onClickFunction={() => {
            handleDelete(tratamiento)
          }}
        />
      </li>
    </ul>
  )
}
