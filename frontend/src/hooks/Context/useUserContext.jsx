import { useContext } from 'react'
import { UserContext } from '../../Context/User/userContext.jsx'

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('usePacientes must be used within a PacientesProvider')
  }
  return context
}
