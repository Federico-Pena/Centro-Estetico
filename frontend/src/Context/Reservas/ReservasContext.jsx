import { createContext, useReducer } from 'react'
import { reducerReservas } from './reducerReservas.js'

const initialStateReservas = {
  dispatch: () => {},
  reservas: [],
  reservasMes: [],
  reserva: null,
  seleccionadas: []
}
export const ReservasContext = createContext(initialStateReservas)

export const ReservasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerReservas, initialStateReservas)

  return (
    <ReservasContext.Provider value={{ ...state, dispatch }}>{children}</ReservasContext.Provider>
  )
}
