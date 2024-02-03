import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { formatHoraUser } from '../../Helpers/formatHoraUser.js'

export const ReservaDatos = ({ reserva }) => {
  return (
    <ul className='grid [&>li]:p-4 [&>li]:grid [&>li]:grid-flow-col [&>li]:grid-cols-[1fr_2fr] [&>li]:justify-between [&>li>span]:text-end'>
      <li>
        Fecha:
        <span>{formatFechaParaUser(reserva.horario.horaInicio)}</span>
      </li>
      <li>
        Hora: <span>{formatHoraUser(new Date(reserva.horario.horaInicio))}</span>
      </li>
      {reserva.paciente.nombre !== 'admin' && (
        <>
          <li className='capitalize'>
            Servicio: <span>{reserva.servicio?.nombre || '-'}</span>
          </li>
          <li>
            Tratamiento:
            <span>{reserva.tratamiento?.descripcion || '-'}</span>
          </li>
          <li>
            Observaciones: <span>{reserva.observaciones || '-'}</span>
          </li>
          <li>
            Valor:
            <span>$ {reserva.tratamiento?.costoPorSesion}</span>
          </li>
        </>
      )}
    </ul>
  )
}
