export const validateField = (name, value, setErrors, validationRules) => {
  const rule = validationRules[name]
  if (rule) {
    if (
      rule.required &&
      (value === null ||
        value === undefined ||
        value === '' ||
        (typeof value === 'string' && value.trim().length === 0))
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Este campo es requerido'
      }))
    } else if (rule.minLength && value.trim().length < rule.minLength) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `Mínimo ${rule.minLength} caracteres`
      }))
    } else if (rule.maxLength && value.trim().length > rule.maxLength) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `Máximo ${rule.maxLength} caracteres`
      }))
    } else if (rule.minValue && value < rule.minValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `El valor debe ser mayor o igual a ${rule.minValue}`
      }))
    } else if (rule.maxValue && value > rule.maxValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `El valor debe ser menor o igual a ${rule.maxValue}`
      }))
    } else if (rule.pattern && !rule.pattern.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: rule.message || 'Formato no válido'
      }))
    } else if (Array.isArray(value) && rule.minItems && value.length < rule.minItems) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `Debes agregar al menos ${rule.minItems} elemento`
      }))
    } else if (Array.isArray(value) && rule.maxItems && value.length > rule.maxItems) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `No puedes agregar más de ${rule.maxItems} elementos`
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined
      }))
    }
  }
}
