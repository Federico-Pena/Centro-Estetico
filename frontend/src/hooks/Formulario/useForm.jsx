import { useState } from 'react'
import { validateField } from './validateField'
import { handleChangeForm } from './handleChangeForm.js'

const useForm = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = async (e) => {
    const value = await handleChangeForm(e)
    const { name } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      ...value
    }))

    const error = validateField(name, value[name], validationRules)
    setErrors((prev) => ({
      ...prev,
      ...error
    }))
  }

  const validateForm = () => {
    let newErrors = {}
    Object.keys(validationRules).forEach((name) => {
      const error = validateField(name, values[name], validationRules)
      newErrors = { ...newErrors, ...error }
    })
    setErrors(newErrors)
    return Object.values(newErrors).every((value) => !value)
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }
  const onSubmitForm = (e, callback) => {
    e.preventDefault()
    const isValid = validateForm()
    if (isValid) {
      callback(values)
    }
  }
  const changeInitialValues = (values) => {
    setValues(values)
  }
  return { values, errors, handleChange, resetForm, changeInitialValues, onSubmitForm }
}

export default useForm
