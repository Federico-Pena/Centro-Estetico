import { useNavigate } from 'react-router-dom'
import { Button } from '../Botones/Button.jsx'

export const HeaderReservasPaciente = ({ handleAgregarReserva }) => {
  const navigate = useNavigate()

  return (
    <header className='border-b border-slate-500 py-4 gap-2 grid grid-flow-col'>
      <Button
        className={'w-full'}
        tipo={'button'}
        onClickFunction={() => navigate(-1)}
        texto={'Volver'}
      />
      <Button
        className={'w-full'}
        tipo={'button'}
        onClickFunction={handleAgregarReserva}
        texto={'Agregar'}
      />
    </header>
  )
}
