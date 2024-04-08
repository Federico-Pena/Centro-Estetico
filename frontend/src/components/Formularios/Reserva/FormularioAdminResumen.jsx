import { formatFechaParaUser } from '../../../Helpers/formatFechaParaUser.js'

export const FormularioAdminResumen = ({ values }) => {
  return (
    <ul className='grid gap-2 border-t border-b border-slate-500 py-4'>
      <li className='text-color-violeta text-xl text-center mb-4'>Resumen de la reserva</li>
      {values.nombre && (
        <li className='capitalize grid gap-4 grid-cols-[1fr_2fr] bg-white p-4 rounded-lg text-color-violeta'>
          Nombre <strong className='text-end'>{values.nombre}</strong>
        </li>
      )}
      {values.horaInicio && (
        <li className='capitalize grid gap-4 grid-cols-[1fr_2fr] bg-white p-4 rounded-lg text-color-violeta'>
          Dia
          <strong className='text-end'>
            {formatFechaParaUser(new Date(`${values.horaInicio} 00:00:00`))}
          </strong>
        </li>
      )}
      {values.hora && (
        <li className='grid gap-4 grid-cols-[1fr_2fr] bg-white p-4 rounded-lg text-color-violeta'>
          Hora <strong className='text-end'>{values.hora}</strong>
        </li>
      )}
      {values.observaciones && (
        <li className='grid grid-cols-[1fr_2fr] gap-4 bg-white p-4 rounded-lg text-color-violeta'>
          Observaciones
          <strong className='text-end text-nowrap overflow-auto'>{values.observaciones}</strong>
        </li>
      )}
      {values.servicio && (
        <li className='grid gap-4 grid-cols-[1fr_2fr] bg-white p-4 rounded-lg text-color-violeta'>
          Servicio
          <strong className='capitalize text-end text-nowrap overflow-auto'>
            {values.servicio}
          </strong>
        </li>
      )}
      {values.tratamiento && (
        <li className='grid gap-4 grid-cols-[1fr_2fr] bg-white p-4 rounded-lg text-color-violeta '>
          Tratamiento
          <strong className='text-end text-nowrap overflow-auto'>{values.tratamiento}</strong>
        </li>
      )}
    </ul>
  )
}
