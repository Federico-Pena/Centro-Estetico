import { useContext } from 'react'
import { useEstadisticas } from '../../../Hooks/Api/Estadisticas/useEstadisticas.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'
import { LabelInput } from '../../Formularios/LabelInput.jsx'
import { LoaderContext } from '../../../Context/Loader/LoaderContext.jsx'
const initialValues = {
  year: ''
}
const validations = {
  year: {
    required: true,
    minLength: 4,
    maxLength: 4
  }
}
export const FormAno = ({ setAno }) => {
  const { loading } = useContext(LoaderContext)
  const { obtenerReservasDelAno } = useEstadisticas()
  const { errors, values, handleChange, validateForm, resetForm } = useForm(
    initialValues,
    validations
  )
  const getEstadisticasReservas = async (e) => {
    e.preventDefault()
    const ano = values.year
    const isValid = validateForm()
    if (isValid) {
      setAno(ano)
      await obtenerReservasDelAno(ano)
      resetForm()
    }
  }
  return (
    <form className='grid gap-2 border border-black p-4 rounded-lg md:col-start-2 md:col-end-4 bg-color-logo'>
      <LabelInput
        errors={errors}
        labelText={'Ingresa un Año'}
        min={4}
        name={'year'}
        onChange={handleChange}
        type={'number'}
        placeholder={2024}
        value={values.year}
        maxLength={4}
        minLength={4}
      />
      <BtnSecundario
        disabled={loading}
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
