import { useState } from 'react'
import { DatosDelAño } from '../DatosDelAño.jsx'
import { FormAno } from './FormAno.jsx'
import { Button } from '../../Botones/Button.jsx'
import { ACTIONS_ESTADISTICAS } from '../../../Context/Estadisticas/reducerEstadisticas.js'
import { Change } from '../../Icons/Icons.jsx'
import { FormMes } from './FormMes.jsx'
import { useEstadisticasContext } from '../../../Hooks/Context/useEstadisticasContext.jsx'

export const ReservasAno = () => {
  const [ano, setAno] = useState('')
  const [mes, setMes] = useState('')
  const [datosMes, setDatosMes] = useState(false)
  const { dispatch, reservas } = useEstadisticasContext()

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
    <section className='text-color-violeta flex flex-col gap-4 md:grid md:col-span-4 md:grid-cols-4'>
      <h2 className='text-xl font-bold font-betonga text-center grid col-span-full md:text-2xl '>
        Datos del {datosMes ? 'mes' : 'año'}
        <span className='text-sm font-semibold text-gray-500 md:text-base'>
          {mes ? `${mes} de` : ''} {ano}
        </span>
      </h2>
      {datosMes ? <FormMes setAno={setAno} setMes={setMes} /> : <FormAno setAno={setAno} />}
      <Button
        className={'grid grid-flow-col gap-2 col-start-2 col-end-4 w-full'}
        texto={`Buscar por ${datosMes ? 'año' : 'mes'}`}
        onClickFunction={mesOAno}
        icono={<Change />}
      />
      {reservas && (
        <Button
          tipo={'button'}
          texto={'Limpiar'}
          onClickFunction={limpiarAno}
          className={'grid grid-flow-col gap-2 col-start-2 col-end-4 w-full'}
        />
      )}
      {reservas && <DatosDelAño />}
    </section>
  )
}
