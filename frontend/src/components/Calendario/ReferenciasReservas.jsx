import { useState } from 'react'
import { ESTADOS_RESERVAS } from '../../constantes.js'
import { Interrogation } from '../Icons/Icons.jsx'
import { useCalendarioContext } from '../../Hooks/Context/useCalendarioContext.jsx'

export default function ReferenciasReservas() {
  const { vistaSemana } = useCalendarioContext()

  const [verReferencias, setVerReferencias] = useState(false)
  const handleVerReferencias = () => {
    setVerReferencias(!verReferencias)
  }
  return (
    vistaSemana && (
      <div className='absolute bottom-0 right-0 w-full grid justify-end'>
        <i className={'p-4 cursor-pointer hover:scale-105'} onClick={handleVerReferencias}>
          {<Interrogation />}
        </i>
        {verReferencias && (
          <div className='absolute top-full right-8 z-30 bg-white grid gap-2 grid-cols-3 text-center'>
            <Referencia
              text={'Crear reserva con nombre admin.'}
              className={'outline outline-2 outline-color-violeta'}
            />
            <Referencia text={'Hora no disponible para reservar.'} className={'opacity-50'} />
            <Referencia text={'Hora libre para reservar.'} className={''} />
            <Referencia
              text={'Hora no disponible para reservar con estado pago.'}
              className={`${ESTADOS_RESERVAS.pago} text-white`}
            />
            <Referencia
              text={'Hora no disponible para reservar con estado pendiente.'}
              className={`${ESTADOS_RESERVAS.pendiente} text-white`}
            />
            <Referencia
              text={'Hora libre para reservar con estado cancelada.'}
              className={`${ESTADOS_RESERVAS.cancelada} text-white`}
            />
          </div>
        )}
      </div>
    )
  )
}

const Referencia = ({ text, className }) => {
  return (
    <div className='group relative'>
      <p className={`${className} px-2 rounded w-full grid place-content-center cursor-default`}>
        09:00
      </p>
      <p
        className={`group-hover:scale-100 scale-0 transition-transform absolute left-0 top-0 z-30 rounded px-2 text-sm border border-slate-200 shadow-lg bg-white`}>
        {text}
      </p>
    </div>
  )
}
