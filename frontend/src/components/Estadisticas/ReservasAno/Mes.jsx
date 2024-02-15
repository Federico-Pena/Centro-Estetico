import { useRef } from 'react'
import { Checkbox } from '../../Icons/Icons.jsx'
import { useObserver } from '../../../Hooks/useObserver.jsx'
import { opcionesFormatPrecio } from '../../../constantes.js'

export const Mes = ({
  mes,
  cantidadReservas,
  estados,
  pacienteMasReservas,
  servicioMasSolicitado,
  ganancias
}) => {
  const mesRef = useRef()
  const { isVisible } = useObserver(mesRef)
  return (
    <section
      className={`${
        isVisible ? 'animate-fadeIn' : ''
      } grid gap-2 w-full border border-black bg-color-logo  rounded-lg pt-4 px-2 font-bold [&>ul>li>span>svg]:text-red-600`}
      ref={mesRef}>
      <h3 className='grid text-center text-xl uppercase'>{mes}</h3>
      <ul className='border-b border-black grid gap-4 p-4 '>
        <li className='grid grid-flow-col justify-between'>
          Reservas: <span>{cantidadReservas || 0}</span>
        </li>
        <li className='grid grid-flow-col justify-between'>
          Ganancias: <span>$ {ganancias.toLocaleString(opcionesFormatPrecio) || 0}</span>
        </li>
      </ul>
      <ul className='border-b border-black grid gap-4 p-4 '>
        <li className='grid grid-flow-col justify-between'>
          Paciente con mas reservas:{' '}
          <span className='capitalize'>{pacienteMasReservas?.nombre || <Checkbox />}</span>
        </li>
        <li className='grid grid-flow-col justify-between'>
          Cantidad: <span>{pacienteMasReservas?.cantidad || 0}</span>
        </li>
      </ul>
      <ul className='border-b border-black grid gap-4 p-4 '>
        <li className='grid grid-flow-col justify-between'>
          Servicio mas solicitado:
          <span className='capitalize'>{servicioMasSolicitado?.servicio || <Checkbox />}</span>
        </li>
        <li className='grid grid-flow-col justify-between'>
          Tratamiento mas solicitado:
          <span> {servicioMasSolicitado?.tratamiento || <Checkbox />}</span>
        </li>
        <li className='grid grid-flow-col justify-between'>
          Cantidad:
          <span> {servicioMasSolicitado?.cantidad || <Checkbox />}</span>
        </li>
      </ul>
      <ul className='grid gap-4 p-4 '>
        <li className='text-center font-bold'>Reservas</li>
        <li className='Cancelada grid grid-flow-col justify-between rounded-md px-4 text-white py-2'>
          Canceladas: <span>{estados.Cancelada}</span>
        </li>
        <li className='Pendiente grid grid-flow-col justify-between rounded-md px-4 text-white py-2'>
          Pendientes <span>{estados.Pendiente}</span>
        </li>
        <li className='Pago grid grid-flow-col justify-between rounded-md px-4 text-white py-2'>
          Pagas: <span>{estados.Pago}</span>
        </li>
      </ul>
    </section>
  )
}
