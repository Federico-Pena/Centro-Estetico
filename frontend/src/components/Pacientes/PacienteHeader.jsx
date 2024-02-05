import { Imprimir } from './Imprimir.jsx'
import { Button } from '../Botones/Button.jsx'
import { useNavigate } from 'react-router-dom'
import { RUTAS } from '../../constantes.js'
import { usePacienteContext } from '../../Hooks/Context/usePacienteContext.jsx'

export const PacienteHeader = ({ cerrarPaciente, imprimirRef }) => {
  const navigate = useNavigate()
  const { paciente } = usePacienteContext()

  const verReservas = () => {
    navigate(RUTAS.admin.reservasPaciente.replace(':id', paciente._id))
  }
  return (
    <header className='grid grid-flow-col items-center p-4 border-b border-slate-500'>
      <Button
        className={
          'border border-color-violeta bg-transparent  flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity m-auto'
        }
        tipo={'button'}
        texto={'Volver'}
        onClickFunction={cerrarPaciente}
      />
      <Button
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
