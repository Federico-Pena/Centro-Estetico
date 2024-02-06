import { useContext } from 'react'
import { TratamientoContext } from '../../context/Tratamiento/TratamientoContext.jsx'

export const useTratamientoContext = () => {
  const context = useContext(TratamientoContext)
  if (context === undefined) {
    throw new Error('usePacientes must be used within a PacientesProvider')
  }
  return context
}
