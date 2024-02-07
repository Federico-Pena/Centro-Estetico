import { useContext } from 'react'
import { ToastContext } from '../../Context/Toast/ToastContext.jsx'

export const useToastContext = () => {
  const context = useContext(ToastContext)
  return context
}
