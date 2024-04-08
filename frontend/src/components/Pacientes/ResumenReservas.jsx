import { ESTADOS_RESERVAS } from '../../constantes.js'

export default function ResumenReservas({ pago, pendiente, cancelada }) {
  return (
    <ul className='grid gap-2 border-b border-black pb-4 font-bold md:grid-cols-3'>
      <li className={`${ESTADOS_RESERVAS.pago} grid gap-2 text-white text-center p-2 rounded-xl`}>
        Pagas <span>{pago || 0}</span>
      </li>
      <li
        className={`${ESTADOS_RESERVAS.pendiente} grid gap-2 text-white text-center p-2 rounded-xl`}>
        Pendientes <span>{pendiente || 0}</span>
      </li>
      <li
        className={`${ESTADOS_RESERVAS.cancelada} grid gap-2 text-white text-center p-2 rounded-xl`}>
        Canceladas <span>{cancelada || 0}</span>
      </li>
    </ul>
  )
}
