import { createContext, useReducer } from 'react'
import { serviciosReducer } from './serviciosReducer.js'
const initialState = {
  dispatch: () => {},
  servicios: [],
  servicio: null
}
export const ServiciosContext = createContext(initialState)
export const ServiciosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(serviciosReducer, initialState)

  return (
    <ServiciosContext.Provider value={{ ...state, dispatch }}>{children}</ServiciosContext.Provider>
  )
}
