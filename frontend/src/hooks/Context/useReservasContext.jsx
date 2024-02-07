import { useContext } from 'react'
import { ReservasContext } from '../../Context/Reservas/ReservasContext.jsx'

export const useReservasContext = () => {
  const context = useContext(ReservasContext)
  return context
}
