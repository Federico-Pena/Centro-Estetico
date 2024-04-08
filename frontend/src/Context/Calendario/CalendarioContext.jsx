import { createContext, useReducer } from 'react'
import { HOY_FECHA_STRING } from '../../constantes.js'
import { reducerCalendario } from './reducerCalendario.js'
const inicialStateEstadisticas = {
  vistaSemana: true,
  diaDeLaSemana: localStorage.getItem('currentDay') || HOY_FECHA_STRING.split('T')[0],
  mesActual: localStorage.getItem('currentMonth') || HOY_FECHA_STRING.split('T')[0],
  dispatch: () => {}
}
export const CalendarioContext = createContext(inicialStateEstadisticas)
export const CalendarioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerCalendario, inicialStateEstadisticas)

  return (
    <CalendarioContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CalendarioContext.Provider>
  )
}
