import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../Botones/Button.jsx'
import { ACTIONS_RESERVAS } from '../../Context/Reservas/reducerReservas.js'
import { ESTADOS_RESERVAS, RUTAS } from '../../constantes.js'
import { useReservasContext } from '../../Hooks/Context/useReservasContext.jsx'

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
  const { dispatch } = useReservasContext()

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
        className={'w-full'}
        texto={'Editar'}
        tipo={'button'}
        onClickFunction={handleEditarReserva}
      />
      <Button
        disabled={loading}
        texto={'Estado'}
        tipo={'button'}
        className={`${reserva.estado} w-full text-white`}
        onClickFunction={handleEditarEstadoReserva}
      />
      {pageCalendario && (
        <Button
          className={'w-full'}
          texto={'Cerrar'}
          onClickFunction={handleCerrarReservas}
          tipo={'button'}
        />
      )}
      <Button
        className={`w-full ${ESTADOS_RESERVAS.cancelada} text-white`}
        texto={'Eliminar'}
        tipo={'button'}
        onClickFunction={handleEliminarReserva}
      />
    </>
  )
}
