import { createContext, useReducer } from 'react'
import { reducerPacientes } from './reducerPaciente'

const initialStatePacientes = {
  pacientes: [],
  pacientesNombres: [],
  paciente: null,
  dispatch: () => {}
}
export const PacientesContext = createContext(initialStatePacientes)
export const PacientesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerPacientes, initialStatePacientes)

  return (
    <PacientesContext.Provider value={{ ...state, dispatch }}>{children}</PacientesContext.Provider>
  )
}
