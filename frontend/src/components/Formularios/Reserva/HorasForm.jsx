import { ESTADOS_RESERVAS } from '../../../constantes.js'

export const HorasForm = ({ values, handleSetHora, horasDisponibles }) => {
  return (
    <ul className='grid gap-2 grid-cols-4'>
      <li className='col-span-full'>Horas disponibles</li>
      {horasDisponibles.map((hor, i) => {
        return (
          i !== 0 &&
          i !== 1 &&
          hor.estado !== ESTADOS_RESERVAS.pendiente &&
          hor.estado !== ESTADOS_RESERVAS.pago &&
          !hor.proximaHoraNoDisponible && (
            <li
              className={`p-2 rounded-xl w-full grid place-content-center shadow-md ${
                hor.id.split('T')[1] === values.hora
                  ? 'col-span-full row-start-2 bg-color-violeta text-slate-50 max-w-md transition-[max-width]'
                  : 'bg-slate-50 max-w-20 hover:opacity-50 cursor-pointer transition-opacity'
              }`}
              key={hor.id}
              onClick={() => handleSetHora(hor.id.split('T')[1])}>
              {hor.id.split('T')[1]}
            </li>
          )
        )
      })}
    </ul>
  )
}
