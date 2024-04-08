import { Imprimir } from './Imprimir.jsx'
import { Button } from '../Botones/Button.jsx'
import { useNavigate } from 'react-router-dom'
import { RUTAS } from '../../constantes.js'
import { usePacienteContext } from '../../Hooks/Context/usePacienteContext.jsx'

export const PacienteHeader = ({ cerrarPaciente, imprimirRef, handleEdit, handleDelete }) => {
  const navigate = useNavigate()
  const { paciente } = usePacienteContext()

  const verReservas = () => {
    navigate(RUTAS.admin.reservasPaciente, { state: { paciente: paciente } })
  }
  return (
    <header className='grid grid-cols-2 items-center p-4 gap-2 border-b border-slate-500'>
      <Button
        className={'w-full'}
        tipo={'button'}
        texto={'Volver'}
        onClickFunction={cerrarPaciente}
      />
      <Button
        className={'w-full'}
        tipo={'button'}
        texto={'Reservas'}
        onClickFunction={verReservas}
      />
      <Button
        className={'w-full bg-color-cancelada'}
        tipo={'button'}
        texto={'Eliminar'}
        onClickFunction={handleDelete}
      />
      <Button className={'w-full'} tipo={'button'} texto={'Editar'} onClickFunction={handleEdit} />
      <Imprimir
        referencia={imprimirRef}
        className={
          'col-span-2 w-8 h-8 self-center justify-self-center hover:scale-110 cursor-pointer transition-transform'
        }
      />
    </header>
  )
}
