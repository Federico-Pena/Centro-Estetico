import { useContext } from 'react'
import { ServiciosContext } from '../../Context/Servicios/ServiciosContext.jsx'

export const useServiciosContext = () => {
  const context = useContext(ServiciosContext)
  return context
}
