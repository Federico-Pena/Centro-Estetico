import { useRef } from 'react'
import { Checkbox, CheckboxChecked } from '../Icons/Icons.jsx'
import { useObserver } from '../../Hooks/useObserver.jsx'
import { Button } from '../Botones/Button.jsx'
import { opcionesFormatPrecio } from '../../constantes.js'

export const TratamientoListItem = ({ tratamiento, handleEdit, handleDelete }) => {
  const tratamientoRef = useRef()
  const { isVisible } = useObserver(tratamientoRef)
  return (
    <ul
      className={`${
        isVisible ? 'animate-fadeIn' : ''
      } grid border border-black rounded-lg bg-color-logo w-full`}
      ref={tratamientoRef}>
      <li className='p-4 border-b border-black uppercase text-center font-betonga font-bold text-xl text-color-violeta'>
        {tratamiento.servicio.nombre}
      </li>
      <li className='grid grid-flow-col p-4 gap-4 border-b border-black'>
        Descripción
        <span className='text-end text-nowrap overflow-auto'>{tratamiento.descripcion}</span>
      </li>
      <li className='grid grid-flow-col p-4 gap-4 border-b border-black'>
        Tiempo
        <span className='text-end text-nowrap overflow-auto'>{tratamiento.tiempo} minutos</span>
      </li>
      <li className='grid grid-flow-col p-4 gap-4 border-b border-black'>
        {`${tratamiento.sesiones === 1 ? 'Sesión' : 'Sesiones'}`}
        <span className='text-end text-nowrap overflow-auto'>{`${tratamiento.sesiones}`}</span>
      </li>
      <li className='grid grid-flow-col p-4 gap-4 border-b border-black'>
        Costo por sesión
        <span className='text-end text-nowrap overflow-auto'>{`$ ${tratamiento.costoPorSesion.toLocaleString(
          opcionesFormatPrecio
        )}`}</span>
      </li>
      <li className='grid grid-flow-col p-4 gap-4 border-b border-black'>
        Costo total
        <span className='text-end text-nowrap overflow-auto'>{`$ ${tratamiento.costoTotal.toLocaleString(
          opcionesFormatPrecio
        )}`}</span>
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
      <li className='grid grid-flow-col justify-around p-4'>
        <Button onClickFunction={() => handleEdit(tratamiento)} texto={'Editar'} />
        <Button onClickFunction={() => handleDelete(tratamiento)} texto={'Borrar'} />
      </li>
    </ul>
  )
}
