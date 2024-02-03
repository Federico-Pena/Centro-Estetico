import { useContext, useState } from 'react'
import { DatosDelAño } from '../DatosDelAño.jsx'
import { FormAno } from './FormAno.jsx'
import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'
import { EstadisticasContext } from '../../../Context/Estadisticas/EstadisticasContext.jsx'
import { ACTIONS_ESTADISTICAS } from '../../../Context/Estadisticas/reducerEstadisticas.js'

export const ReservasAno = () => {
  const [ano, setAno] = useState()
  const { dispatch, reservasAno } = useContext(EstadisticasContext)

  const limpiarAno = () => {
    dispatch({
      type: ACTIONS_ESTADISTICAS.SET_ESTADISTICAS_RESERVAS_ANO,
      payload: null
    })
  }
  return (
    <section className=' text-color-violeta grid gap-4 md:col-span-4 md:grid-cols-4'>
      <h2 className='text-xl font-bold font-betonga text-center grid col-span-full md:text-2xl '>
        Datos del año
        <span className='text-sm font-semibold text-gray-500 md:text-base'>{ano}</span>
      </h2>
      <FormAno setAno={setAno} />
      {reservasAno && (
        <BtnSecundario
          tipo={'button'}
          texto={'Limpiar'}
          onClickFunction={limpiarAno}
          className={
            'font-bold mt-4 text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md grid place-content-center py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50 md:col-start-2 md:col-end-4'
          }
        />
      )}
      {ano && <DatosDelAño ano={ano} />}
    </section>
  )
}
