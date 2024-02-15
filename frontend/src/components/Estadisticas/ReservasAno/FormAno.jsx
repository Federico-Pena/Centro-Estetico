import { useEstadisticas } from '../../../Hooks/Api/Estadisticas/useEstadisticas.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { Button } from '../../Botones/Button.jsx'
import { LabelInput } from '../../Formularios/LabelInput.jsx'
import { useLoaderContext } from '../../../Hooks/Context/useLoaderContext.jsx'
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
  const { loading } = useLoaderContext()
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
    <form className='grid gap-2 bg-color-verde-blanco border border-gray-300 shadow-lg p-4 rounded-lg md:col-start-2 md:col-end-4 '>
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
      <Button
        bgColor={true}
        className={'mt-4  w-full'}
        disabled={loading}
        tipo={'submit'}
        texto={'Buscar'}
        onClickFunction={getEstadisticasReservas}
      />
    </form>
  )
}
