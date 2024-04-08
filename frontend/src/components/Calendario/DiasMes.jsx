import { useRef } from 'react'
import { ACTIONS_CALENDARIO } from '../../Context/Calendario/reducerCalendario.js'
import { calcularPorcentajesCalendarioMes } from '../../Helpers/calcularPorcentajesCalendarioMes.js'
import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { useCalendarioContext } from '../../Hooks/Context/useCalendarioContext.jsx'
import { useReservasContext } from '../../Hooks/Context/useReservasContext.jsx'
import { HORA_DE_COMIENZO, HORA_DE_FIN, MESES } from '../../constantes.js'

export const DiasMes = ({ diasMes, handleSeleccionarDia }) => {
  const { dispatch } = useCalendarioContext()
  const { reservasMes } = useReservasContext()
  const sectionRef = useRef()
  const porcentajes = calcularPorcentajesCalendarioMes(
    diasMes,
    reservasMes,
    HORA_DE_FIN - HORA_DE_COMIENZO
  )
  const mes = MESES[diasMes[0].dia.getMonth()]

  const seleccionarDia = (diaSeleccionado) => {
    handleSeleccionarDia(diaSeleccionado)
    sectionRef.current && sectionRef.current.scrollIntoView()
    dispatch({
      type: ACTIONS_CALENDARIO.SET_VISTA_SEMANA,
      payload: true
    })
  }
  return (
    <section className='grid p-4 gap-4 md:grid-cols-2' ref={sectionRef}>
      <h3 className='sticky top-[270px] z-10 col-span-full bg-white font-betonga text-center text-color-violeta font-bold text-xl p-2'>
        {mes} del {diasMes[0].dia.getFullYear()}
      </h3>
      {diasMes.map((dia, i) => {
        const diaDate = new Date(dia.dia)
        const diaSeleccionado = diaDate.toLocaleDateString().split('/').reverse().join('-')
        const { pendiente, paga, cancelada, libre } = porcentajes[i]
        return (
          <article
            onClick={() => seleccionarDia(diaSeleccionado)}
            key={diaDate}
            className={`grid capitalize p-4 gap-2 border border-black rounded-lg overflow-hidden cursor-pointer hover:scale-95 transition-transform`}>
            <h3
              className={`grid p-2 text-color-violeta rounded-lg font-betonga font-bold text-center ${
                diaDate.toLocaleDateString() === new Date().toLocaleDateString()
                  ? 'bg-color-verde-blanco'
                  : 'bg-white'
              }`}>
              {formatFechaParaUser(diaDate)}
            </h3>
            {porcentajes[i].pendiente || porcentajes[i].cancelada || porcentajes[i].paga ? (
              <ul className='flex h-4  w-full border border-black rounded-xl  overflow-hidden'>
                <ItemBarra bgColorTailwind={'bg-color-pendiente'} porcentaje={pendiente} />
                <ItemBarra bgColorTailwind={'bg-color-cancelada'} porcentaje={cancelada} />
                <ItemBarra bgColorTailwind={'bg-color-paga'} porcentaje={paga} />
                <ItemBarra bgColorTailwind={'bg-white'} porcentaje={libre} />
              </ul>
            ) : (
              <ul className='flex h-4 w-full border border-black rounded-xl  overflow-hidden'>
                <li></li>
              </ul>
            )}
            <ul className='grid grid-flow-col border border-black rounded-lg overflow-hidden'>
              <ItemNumero bgColorTailwind={'bg-color-pendiente'} porcentaje={pendiente} />
              <ItemNumero bgColorTailwind={'bg-color-cancelada'} porcentaje={cancelada} />
              <ItemNumero bgColorTailwind={'bg-color-paga'} porcentaje={paga} />
              <ItemNumero bgColorTailwind={'bg-white'} porcentaje={libre} />
            </ul>
          </article>
        )
      })}
    </section>
  )
}

const ItemBarra = ({ porcentaje, bgColorTailwind }) => {
  return <li style={{ width: `${porcentaje}%` }} className={`${bgColorTailwind} text-white`}></li>
}
const ItemNumero = ({ porcentaje, bgColorTailwind }) => {
  const textColor = bgColorTailwind === 'bg-white' ? 'text-black' : 'text-white'
  return (
    <li className={`${bgColorTailwind} p-2 text-center ${textColor}`}>{porcentaje.toFixed(1)}%</li>
  )
}
