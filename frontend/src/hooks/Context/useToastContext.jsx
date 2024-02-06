import { useContext } from 'react'
import { ToastContext } from '../../Context/Toast/ToastContext.jsx'

export const useToastContext = () => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('usePacientes must be used within a PacientesProvider')
  }
  return context
}
