import { useContext } from 'react'
import { EstadisticasContext } from '../../Context/Estadisticas/EstadisticasContext.jsx'

export const useEstadisticasContext = () => {
  const context = useContext(EstadisticasContext)
  return context
}
