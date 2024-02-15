import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { formatHoraUser } from '../../Helpers/formatHoraUser.js'
import { Checkbox } from '../Icons/Icons.jsx'

export const ReservaDatos = ({ reserva }) => {
  return (
    <ul className='grid text-white'>
      <li className='capitalize grid grid-flow-col justify-between p-4 border-b'>
        Fecha:
        <span>{formatFechaParaUser(reserva.horario.horaInicio)}</span>
      </li>
      <li className='p-4 border-b grid grid-flow-col justify-between'>
        Hora: <span>{formatHoraUser(new Date(reserva.horario.horaInicio))}</span>
      </li>
      {reserva.paciente?.nombre !== 'admin' && (
        <>
          <li className='p-4 border-b capitalize grid justify-between grid-flow-col gap-4'>
            Servicio:
            <span className='text-end text-nowrap overflow-auto'>
              {reserva.servicio?.nombre || <Checkbox />}
            </span>
          </li>
          <li className='p-4 border-b grid justify-between grid-flow-col gap-4'>
            Tratamiento:
            <span className='text-end text-nowrap overflow-auto'>
              {reserva.tratamiento?.descripcion || <Checkbox />}
            </span>
          </li>
          <li className='p-4 border-b grid grid-flow-col justify-between gap-4'>
            Sesiones:
            <span className='text-end text-nowrap overflow-auto'>
              {reserva.tratamiento?.sesiones || <Checkbox />}
            </span>
          </li>
          <li className='p-4 border-b grid justify-between grid-flow-col gap-4'>
            Observaciones:
            <span className='grid  text-end text-nowrap overflow-auto'>
              {reserva.observaciones || <Checkbox />}
            </span>
          </li>
          <li className='p-4 pb-8 grid grid-flow-col  gap-4'>
            Valor:
            <span className='grid text-end text-nowrap overflow-auto'>
              $ {reserva.tratamiento?.costoPorSesion || 0}
            </span>
          </li>
        </>
      )}
    </ul>
  )
}
