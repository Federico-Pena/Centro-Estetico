import { useContext } from 'react'
import { UserContext } from '../../Context/User/userContext.jsx'

export const useUserContext = () => {
  const context = useContext(UserContext)
  return context
}
