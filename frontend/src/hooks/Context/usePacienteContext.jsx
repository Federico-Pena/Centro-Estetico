import { useContext } from 'react'
import { PacientesContext } from '../../Context/Pacientes/PacientesContext.jsx'

export const usePacienteContext = () => {
  const context = useContext(PacientesContext)
  return context
}
