import { formatFechaParaUser } from '../../../Helpers/formatFechaParaUser.js'

export const ResumerReserva = ({ values, horasDisponibles }) => {
  return (
    <>
      <h3 className='font-betonga text-color-violeta font-bold capitalize text-center underline underline-offset-4 text-2xl px-4'>
        Resumen
      </h3>
      {values.nombre && (
        <span className='bg-white gap-4 text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize'>
          Nombre <strong className='text-end text-balance'>{values.nombre}</strong>
        </span>
      )}
      {values.fecha && (
        <span className='bg-white gap-4 text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize'>
          Dia
          <strong className='text-end text-balance'>
            {formatFechaParaUser(`${values.fecha} ${values.hora}`)}
          </strong>
        </span>
      )}
      {values.hora && horasDisponibles.length > 0 && (
        <span className='bg-white gap-4 text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize'>
          Hora <strong className='text-end text-balance'>{values.hora}</strong>
        </span>
      )}
      {values.servicio && (
        <span className='bg-white gap-4 text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize'>
          Servicio
          <strong className='text-end text-nowrap overflow-auto'>{values.servicio}</strong>
        </span>
      )}
      {values.tratamiento && (
        <span className='bg-white gap-4 text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize'>
          Tratamiento
          <strong className='text-end text-nowrap overflow-auto'>{values.tratamiento}</strong>
        </span>
      )}
      {values.observaciones && (
        <span className='bg-white gap-4 text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize'>
          Observación
          <strong className='text-end text-nowrap overflow-auto'>{values.observaciones}</strong>
        </span>
      )}
    </>
  )
}
