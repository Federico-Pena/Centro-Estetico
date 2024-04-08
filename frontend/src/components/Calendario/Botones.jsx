import { ACTIONS_CALENDARIO } from '../../Context/Calendario/reducerCalendario.js'
import { useCalendarioContext } from '../../Hooks/Context/useCalendarioContext.jsx'
import { Button } from '../Botones/Button.jsx'
import { LabelInput } from '../Formularios/LabelInput.jsx'

export const Botones = ({ handleSeleccionarDia, seleccionarMes }) => {
  const { dispatch, vistaSemana } = useCalendarioContext()

  const handleChange = (e) => {
    const fecha = e.target.value
    if (fecha) {
      vistaSemana ? handleSeleccionarDia(fecha) : seleccionarMes(fecha)
    }
  }

  const semanaAnterior = () => {
    vistaSemana
      ? dispatch({
          type: ACTIONS_CALENDARIO.SET_SEMANA_ANTERIOR
        })
      : dispatch({
          type: ACTIONS_CALENDARIO.SET_MES_ANTERIOR
        })
  }
  const semanaSiguiente = () => {
    vistaSemana
      ? dispatch({
          type: ACTIONS_CALENDARIO.SET_SEMANA_SIGUIENTE
        })
      : dispatch({
          type: ACTIONS_CALENDARIO.SET_MES_SIGUIENTE
        })
  }
  return (
    <section className='grid grid-cols-2 gap-4 border-t border-b border-black p-4 sticky top-28 z-20 bg-white '>
      <div className='grid col-span-full'>
        <LabelInput
          className={'text-center'}
          labelText={'Buscar día'}
          type={'date'}
          onChange={(e) => {
            handleChange(e)
            e.target.value = ''
          }}
        />
      </div>
      <Button
        className={'w-full m-auto'}
        onClickFunction={semanaAnterior}
        texto={'Anterior'}
        tipo={'button'}
      />
      <Button
        className={'w-full m-auto'}
        onClickFunction={semanaSiguiente}
        texto={'Siguiente'}
        tipo={'button'}
      />
    </section>
  )
}
