import { useContext } from 'react'
import { EstadisticasContext } from '../../Context/Estadisticas/EstadisticasContext.jsx'

export const useEstadisticasContext = () => {
  const context = useContext(EstadisticasContext)
  if (context === undefined) {
    throw new Error('usePacientes must be used within a PacientesProvider')
  }
  return context
}
