import { useContext } from 'react'
import { ServiciosContext } from '../../Context/Servicios/ServiciosContext.jsx'

export const useServiciosContext = () => {
  const context = useContext(ServiciosContext)
  if (context === undefined) {
    throw new Error('usePacientes must be used within a PacientesProvider')
  }
  return context
}
