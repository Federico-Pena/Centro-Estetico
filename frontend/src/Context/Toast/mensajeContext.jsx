import { createContext, useState } from 'react'

export const ToastContext = createContext({})
export const MensajeProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState('')

  return <ToastContext.Provider value={{ mensaje, setMensaje }}>{children}</ToastContext.Provider>
}
