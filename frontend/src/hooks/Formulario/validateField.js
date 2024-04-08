export const validateField = (name, value, validationRules) => {
  const rule = validationRules[name]
  let error
  if (rule) {
    if (
      rule.required &&
      (value === null ||
        value === undefined ||
        value === '' ||
        (typeof value === 'string' && value.trim().length === 0))
    ) {
      error = { [name]: rule.message || 'Este campo es requerido' }
    } else if (rule.minLength && value.trim().length < rule.minLength) {
      error = { [name]: rule.message || `Mínimo ${rule.minLength} caracteres` }
    } else if (rule.maxLength && value.trim().length > rule.maxLength) {
      error = { [name]: rule.message || `Máximo ${rule.maxLength} caracteres` }
    } else if (rule.minValue && value < rule.minValue) {
      error = { [name]: rule.message || `El valor debe ser mayor o igual a ${rule.minValue}` }
    } else if (rule.maxValue && value > rule.maxValue) {
      error = { [name]: rule.message || `El valor debe ser menor o igual a ${rule.maxValue}` }
    } else if (rule.pattern && !rule.pattern.test(value)) {
      error = { [name]: rule.message || 'Formato no válido' }
    } else if (Array.isArray(value) && rule.minItems && value.length < rule.minItems) {
      error = { [name]: rule.message || `Debes agregar al menos ${rule.minItems} elemento` }
    } else if (Array.isArray(value) && rule.maxItems && value.length > rule.maxItems) {
      error = { [name]: rule.message || `No puedes agregar más de ${rule.maxItems} elementos` }
    } else {
      error = { [name]: undefined }
    }
  }
  return error
}
