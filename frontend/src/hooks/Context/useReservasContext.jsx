import { useContext } from 'react'
import { ReservasContext } from '../../Context/Reservas/ReservasContext.jsx'

export const useReservasContext = () => {
  const context = useContext(ReservasContext)
  if (context === undefined) {
    throw new Error('usePacientes must be used within a PacientesProvider')
  }
  return context
}
