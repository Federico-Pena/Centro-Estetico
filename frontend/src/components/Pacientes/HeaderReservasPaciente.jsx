import { useNavigate } from 'react-router-dom'
import { Button } from '../Botones/Button.jsx'

export const HeaderReservasPaciente = ({ handleAgregarReserva }) => {
  const navigate = useNavigate()

  return (
    <header className='border-b border-slate-500 p-4 grid grid-flow-col'>
      <Button
        className={
          'border border-color-violeta bg-transparent  flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity '
        }
        tipo={'button'}
        onClickFunction={() => navigate(-1)}
        texto={'Volver'}
      />
      <Button
        className={
          'border border-color-violeta bg-transparent  flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity '
        }
        tipo={'button'}
        onClickFunction={handleAgregarReserva}
        texto={'Agregar Reserva'}
      />
    </header>
  )
}
