import { useContext } from 'react'
import { PacientesContext } from '../../Context/Pacientes/PacientesContext.jsx'

export const usePacienteContext = () => {
  const context = useContext(PacientesContext)

  if (context === undefined) {
    throw new Error('usePacientes must be used within a PacientesProvider')
  }

  return context
}
