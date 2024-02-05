import { useContext, useState } from 'react'
import { DatosDelAño } from '../DatosDelAño.jsx'
import { FormAno } from './FormAno.jsx'
import { Button } from '../../Botones/Button.jsx'
import { EstadisticasContext } from '../../../Context/Estadisticas/EstadisticasContext.jsx'
import { ACTIONS_ESTADISTICAS } from '../../../Context/Estadisticas/reducerEstadisticas.js'
import { Change } from '../../Icons/Icons.jsx'
import { FormMes } from './FormMes.jsx'

export const ReservasAno = () => {
  const [ano, setAno] = useState('')
  const [mes, setMes] = useState('')
  const [datosMes, setDatosMes] = useState(false)
  const { dispatch, reservas } = useContext(EstadisticasContext)

  const limpiarAno = () => {
    dispatch({
      type: ACTIONS_ESTADISTICAS.SET_ESTADISTICAS_RESERVAS,
      payload: null
    })
  }
  const mesOAno = () => {
    setAno('')
    setMes('')
    limpiarAno()
    setDatosMes(!datosMes)
  }
  return (
    <section className=' text-color-violeta grid gap-4 md:col-span-4 md:grid-cols-4'>
      <Button
        className={
          'grid grid-flow-col justify-center items-center gap-2 font-bold mt-4 text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors [&>span>svg]:w-6 [&>span>svg]:h-6 hover:text-color-violeta hover:bg-slate-50 md:col-start-2 md:col-end-4'
        }
        texto={`Buscar por ${datosMes ? 'año' : 'mes'}`}
        onClickFunction={mesOAno}
        icono={<Change />}
      />
      {reservas && (
        <Button
          tipo={'button'}
          texto={'Limpiar'}
          onClickFunction={limpiarAno}
          className={
            'font-bold my-4 text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md grid place-content-center py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50 md:col-start-2 md:col-end-4'
          }
        />
      )}
      <h2 className='text-xl font-bold font-betonga text-center grid col-span-full md:text-2xl '>
        Datos del {datosMes ? 'mes' : 'año'}
        <span className='text-sm font-semibold text-gray-500 md:text-base'>
          {mes ? `${mes} de` : ''} {ano}
        </span>
      </h2>
      {datosMes ? <FormMes setAno={setAno} setMes={setMes} /> : <FormAno setAno={setAno} />}
      {reservas && <DatosDelAño />}
    </section>
  )
}
