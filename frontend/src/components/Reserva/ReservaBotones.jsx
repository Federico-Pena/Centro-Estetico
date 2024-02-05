import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../Botones/Button.jsx'
import { ACTIONS_RESERVAS } from '../../Context/Reservas/reducerReservas.js'
import { RUTAS } from '../../constantes.js'
import { useReservaContext } from '../../Hooks/Context/useReservaContext.jsx'

export const ReservaBotones = ({
  reserva,
  handleEditarEstadoReserva,
  handleEliminarReserva,
  loading,
  contenedorRef
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const pageCalendario = location.pathname === RUTAS.admin.calendario
  const { dispatch } = useReservaContext()

  const handleEditarReserva = () => {
    navigate(RUTAS.admin.editarReserva, { state: { reserva: reserva } })
  }
  const handleCerrarReservas = () => {
    contenedorRef.current.classList.replace('animate-growIn', 'animate-growOut')
    setTimeout(() => {
      dispatch({ type: ACTIONS_RESERVAS.SET_RESERVAS_SELECCIONADAS, payload: [] })
    }, 500)
  }
  return (
    <>
      <Button
        texto={'Editar'}
        tipo={'button'}
        className='border border-color-violeta bg-color-violeta  flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity '
        onClickFunction={handleEditarReserva}
      />
      <Button
        disabled={loading}
        texto={'Estado'}
        tipo={'button'}
        className={`border border-color-violeta bg-color-violeta flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity  ${reserva.estado}`}
        onClickFunction={handleEditarEstadoReserva}
      />
      {pageCalendario && (
        <Button
          texto={'Cerrar'}
          className='border border-color-violeta bg-color-violeta  flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity'
          onClickFunction={handleCerrarReservas}
          tipo={'button'}
        />
      )}
      <Button
        texto={'Eliminar'}
        tipo={'button'}
        className='border border-color-violeta flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity bg-red-600 text-white'
        onClickFunction={handleEliminarReserva}
      />
    </>
  )
}
