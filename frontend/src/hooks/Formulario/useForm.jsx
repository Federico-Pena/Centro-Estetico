import { useState } from 'react'
import { validateField } from './validateField'
import { handleChangeForm } from './handleChangeForm.js'

const useForm = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({ error: 'Campo requerido' })
  const handleChange = (e) => {
    handleChangeForm(e, setErrors, setValues, validationRules, validateField)
    console.log(errors)
  }
  const validateForm = () => {
    Object.keys(validationRules).forEach((name) => {
      validateField(name, values[name], setErrors, validationRules)
    })
    return Object.keys(errors).every((key) => !errors[key])
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  return { values, errors, handleChange, resetForm, validateForm }
}

export default useForm
