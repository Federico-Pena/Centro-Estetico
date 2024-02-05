import { useContext } from 'react'
import { ReservasContext } from '../../Context/Reservas/ReservasContext.jsx'

export const useReservaContext = () => {
  const context = useContext(ReservasContext)

  if (context === undefined) {
    throw new Error('usePacientes must be used within a PacientesProvider')
  }

  return context
}
