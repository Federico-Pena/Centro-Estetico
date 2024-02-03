export const handleChangeForm = (e, setErrors, setValues, validationRules, validateField) => {
  const { name, value, files, type, checked } = e.target
  setErrors((prevValues) => ({ ...prevValues, [name]: '', error: '' }))
  if (type === 'file') {
    setValues((prevValues) => ({ ...prevValues, [name]: files[0] }))
    if (files[0]) {
      const reader = new FileReader()
      reader.onload = function (e) {
        setValues((prevValues) => ({ ...prevValues, imgPreview: e.target.result }))
      }
      reader.readAsDataURL(files[0])
    }
  } else if (type === 'checkbox') {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: checked
    }))
  } else {
    setValues((prevValues) => updateNestedState(prevValues, name, value))
  }
  if (validationRules[name]) {
    validateField(name, value, setErrors, validationRules)
  }
}
const updateNestedState = (prevState, name, value) => {
  const keys = name.split('.')
  let updatedState = { ...prevState }

  keys.reduce((acc, key, index) => {
    if (index === keys.length - 1) {
      acc[key] = value
    } else {
      acc[key] = { ...acc[key] }
    }
    return acc[key]
  }, updatedState)

  return updatedState
}

/* else if (name === 'servicio.nombre') {
    setValues((prevValues) => ({
      ...prevValues,
      servicio: {
        ...prevValues.servicio,
        nombre: value
      },
      tratamiento: {
        ...prevValues.tratamiento,
        descripcion: ''
      }
    }))
  } else if (name === 'tratamiento.descricion') {
    setValues((prevValues) => ({
      ...prevValues,
      tratamiento: {
        ...prevValues.tratamiento,
        descripcion: value
      }
    }))
  } else if (name === 'contactoEmergencia.nombreContacto2') {
    setValues((prevValues) => ({
      ...prevValues,
      contactoEmergencia: {
        ...prevValues.contactoEmergencia,
        nombreContacto2: value
      }
    }))
  } else if (name === 'contactoEmergencia.telefonoContacto2') {
    setValues((prevValues) => ({
      ...prevValues,
      contactoEmergencia: {
        ...prevValues.contactoEmergencia,
        telefonoContacto2: value
      }
    }))
  } else if (name === 'paciente.nombre') {
    setValues((prevValues) => ({
      ...prevValues,
      paciente: {
        ...prevValues.paciente,
        nombre: value
      }
    }))
  } else if (name === 'horario.horaInicio') {
    setValues((prevValues) => ({
      ...prevValues,
      horario: {
        ...prevValues.horario,
        horaInicio: value
      }
    }))
  } */
