import { formatFechaParaUser } from '../../../Helpers/formatFechaParaUser.js'

export const ResumerReserva = ({ values, horasDisponibles }) => {
  return (
    <>
      <h3 className='font-betonga text-color-violeta font-bold capitalize text-center underline underline-offset-4 text-2xl px-4'>
        Resumen
      </h3>
      {values.nombre && (
        <span className='bg-color-verde-blanco text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize'>
          Nombre <strong className='text-end text-balance'>{values.nombre}</strong>
        </span>
      )}
      {values.fecha && (
        <span className='bg-color-verde-blanco text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize'>
          Dia{' '}
          <strong className='text-end text-balance'>
            {formatFechaParaUser(`${values.fecha} ${values.hora}`)}
          </strong>
        </span>
      )}
      {values.hora && horasDisponibles.length > 0 && (
        <span className='bg-color-verde-blanco text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize'>
          Hora <strong className='text-end text-balance'>{values.hora}</strong>
        </span>
      )}
      {values.observaciones && (
        <span className='bg-color-verde-blanco text-color-violeta py-2 px-4 grid gap-4 rounded capitalize'>
          Observación <strong className='text-pretty'>{values.observaciones}</strong>
        </span>
      )}
    </>
  )
}
