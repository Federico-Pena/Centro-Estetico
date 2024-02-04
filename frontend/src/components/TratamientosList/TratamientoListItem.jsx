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
      } grid p-4 pb-2 align-top border  border-slate-500 rounded-lg bg-color-logo [&>li]:flex [&>li]:p-2 [&>li]:border-b [&>li]:border-slate-500`}
      ref={tratamientoRef}>
      <li className='grid justify-between items-center uppercase text-center font-betonga font-bold text-xl text-color-violeta hover:[&>svg]:text-color-violeta [&>svg]:cursor-pointer [&>svg]:text-xl [&>svg]:text-slate-600'>
        <Edit
          onClickFunction={() => {
            handleEdit(tratamiento)
          }}
        />
        <span>{tratamiento.servicio.nombre}</span>
        <Delete
          onClickFunction={() => {
            handleDelete(tratamiento)
          }}
        />
      </li>
      <li>{tratamiento.descripcion}</li>
      <li>{tratamiento.tiempo} minutos por sesión</li>
      <li>{`$ ${tratamiento.costoPorSesion.toFixed(2)}`} por sesión</li>
      <li>{`$ ${tratamiento.costoTotal}`} total</li>
      {tratamiento.enPromocion ? (
        <li className='[&>svg]:text-green-600 [&>svg]:text-xl flex items-center justify-between border-none'>
          En Promoción <CheckboxChecked />
        </li>
      ) : (
        <li className='[&>svg]:text-red-600 flex items-center justify-between border-none'>
          En Promoción <Checkbox />
        </li>
      )}
    </ul>
  )
}
