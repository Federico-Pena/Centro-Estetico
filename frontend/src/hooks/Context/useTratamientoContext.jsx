import { useContext } from 'react'
import { TratamientoContext } from '../../context/Tratamiento/TratamientoContext.jsx'

export const useTratamientoContext = () => {
  const context = useContext(TratamientoContext)
  return context
}
