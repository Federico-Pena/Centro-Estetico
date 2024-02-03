import { Imprimir } from './Imprimir.jsx'
import { BtnSecundario } from '../Botones/BtnSecundario.jsx'
import { useNavigate } from 'react-router-dom'
import { RUTAS } from '../../constantes.js'
import { useContext } from 'react'
import { PacientesContext } from '../../Context/Pacientes/PacientesContext.jsx'
import { ACTIONS_PACIENTES } from '../../Context/Pacientes/reducerPaciente.js'

export const PacienteHeader = ({ cerrarPaciente, imprimirRef }) => {
  const navigate = useNavigate()
  const { dispatch, paciente } = useContext(PacientesContext)
  const verReservas = () => {
    dispatch({ type: ACTIONS_PACIENTES.SET_PACIENTE, payload: paciente })
    navigate(RUTAS.admin.reservasPaciente)
  }
  return (
    <header className='grid grid-flow-col items-center p-4 border-b border-slate-500'>
      <BtnSecundario
        className={
          'border border-color-violeta bg-transparent  flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity m-auto'
        }
        tipo={'button'}
        texto={'Volver'}
        onClickFunction={cerrarPaciente}
      />
      <BtnSecundario
        className={
          'border border-color-violeta bg-transparent  flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity m-auto'
        }
        tipo={'button'}
        texto={'Ver Reservas'}
        onClickFunction={verReservas}
      />
      <Imprimir
        referencia={imprimirRef}
        className={
          'w-8 h-8 self-center justify-self-center hover:scale-110 cursor-pointer transition-transform'
        }
      />
    </header>
  )
}
