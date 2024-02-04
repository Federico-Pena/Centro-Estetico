import { useEstadisticas } from '../../../Hooks/Api/Estadisticas/useEstadisticas.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { MESES } from '../../../constantes.js'
import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'
import { Dropdown } from '../../Dropdown/Dropdown.jsx'
import { LabelInput } from '../../Formularios/LabelInput.jsx'
const initialValues = {
  year: '',
  mes: ''
}
const validations = {
  year: {
    required: true,
    minLength: 4,
    maxLength: 4
  },
  mes: { required: true }
}

export const FormMes = ({ setAno, setMes }) => {
  const { obtenerReservasDelMes, loading } = useEstadisticas()

  const { errors, values, handleChange, validateForm, resetForm } = useForm(
    initialValues,
    validations
  )

  const getEstadisticasReservas = async (e) => {
    e.preventDefault()
    const ano = values.year
    const mes = values.mes
    setAno(ano)
    const isValid = validateForm()
    console.log(isValid)
    if (isValid) {
      await obtenerReservasDelMes(ano, mes)
      resetForm()
    }
  }
  const dropdownChange = (name, event) => {
    const value = event.target.textContent
    setMes(value)
    const valor = {
      target: {
        name,
        value
      }
    }
    handleChange(valor)
  }
  return (
    <form className='grid gap-2 border border-black p-4 rounded-lg md:col-start-2 md:col-end-4 bg-color-logo'>
      <LabelInput
        className={'mb-4'}
        errors={errors}
        labelText={'Ingresa un Año'}
        min={4}
        name={'year'}
        onChange={handleChange}
        type={'number'}
        placeholder={2024}
        value={values.year}
        disabled={loading}
        maxLength={4}
        minLength={4}
      />
      <label>Elige un mes</label>
      {errors.mes && <small className='text-red-600'>* {errors.mes}</small>}
      <Dropdown name={'Meses'} className={'gap-4 [&>button]:w-full'}>
        <p
          onClick={(e) => {
            dropdownChange('mes', e)
          }}
          className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'></p>
        {MESES.map((mes) => (
          <p
            onClick={(e) => {
              dropdownChange('mes', e)
            }}
            key={mes}
            className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            {mes}
          </p>
        ))}
      </Dropdown>

      <BtnSecundario
        tipo={'submit'}
        texto={'Buscar'}
        onClickFunction={getEstadisticasReservas}
        className={
          'font-bold mt-4 text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md grid place-content-center py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50 '
        }
      />
    </form>
  )
}
