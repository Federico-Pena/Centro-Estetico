export default function TextErrorForm({ errors }) {
  const isValid = Object.values(errors).some((value) => value !== undefined)
  return isValid && <small className='text-red-600 text-center'>Hay campos incorrectos</small>
}
