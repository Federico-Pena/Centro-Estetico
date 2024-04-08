import { useContext } from 'react'
import { TratamientoContext } from '../../Context/Tratamiento/TratamientoContext.jsx'

export const useTratamientoContext = () => {
  const context = useContext(TratamientoContext)
  return context
}
