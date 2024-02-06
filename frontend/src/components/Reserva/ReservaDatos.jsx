import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { formatHoraUser } from '../../Helpers/formatHoraUser.js'
import { Checkbox } from '../Icons/Icons.jsx'

export const ReservaDatos = ({ reserva }) => {
  return (
    <ul className='grid items p-4 gap-4 text-white'>
      <li className='capitalize grid grid-flow-col justify-between'>
        Fecha:
        <span>{formatFechaParaUser(reserva.horario.horaInicio)}</span>
      </li>
      <li className='grid grid-flow-col justify-between'>
        Hora: <span>{formatHoraUser(new Date(reserva.horario.horaInicio))}</span>
      </li>
      {reserva.paciente.nombre !== 'admin' && (
        <>
          <li className='capitalize grid gap-2'>
            Servicio:{' '}
            <span className='grid justify-end'>{reserva.servicio?.nombre || <Checkbox />}</span>
          </li>
          <li className='grid gap-2'>
            Tratamiento:
            <span className='grid justify-end'>
              {reserva.tratamiento?.descripcion || <Checkbox />}
            </span>
          </li>
          <li className='grid gap-2'>
            Observaciones:{' '}
            <span className='grid justify-end'>{reserva.observaciones || <Checkbox />}</span>
          </li>
          <li className='grid grid-flow-col justify-between'>
            Valor:
            <span>$ {reserva.tratamiento?.costoPorSesion}</span>
          </li>
        </>
      )}
    </ul>
  )
}
