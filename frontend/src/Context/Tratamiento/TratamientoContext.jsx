import { createContext, useReducer } from 'react'
import { tratamientosReducer } from './tratamientoReducer.js'
const initialState = {
  dispatch: () => {},
  tratamiento: null,
  tratamientos: [],
  tratamientosFiltrados: [],
  nombresServicios: []
}
export const TratamientoContext = createContext(initialState)
export const TratamientosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tratamientosReducer, initialState)
  return (
    <TratamientoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TratamientoContext.Provider>
  )
}
