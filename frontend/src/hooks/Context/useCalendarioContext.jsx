import { useContext } from 'react'
import { CalendarioContext } from '../../Context/Calendario/CalendarioContext.jsx'

export const useCalendarioContext = () => {
  const context = useContext(CalendarioContext)
  return context
}
