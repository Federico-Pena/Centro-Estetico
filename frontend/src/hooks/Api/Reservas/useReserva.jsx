import { useContext, useState } from 'react'
import { deleteReserva } from '../helpers/Reservas/deleteReserva.js'
import { UserContext } from '../../../Context/User/userContext.jsx'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import { ACTIONS_RESERVAS } from '../../../Context/Reservas/reducerReservas.js'
import { ReservasContext } from '../../../Context/Reservas/ReservasContext.jsx'
import { putEstadoReserva } from '../helpers/Reservas/putEstadoReserva.js'
import { putReserva } from '../helpers/Reservas/putReserva.js'

export const useReserva = () => {
  const [loading, setLoading] = useState(false)
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(ToastContext)
  const { dispatch } = useContext(ReservasContext)

  const borrarReserva = async (reserva) => {
    setLoading(true)
    const res = await deleteReserva(accessToken, reserva._id)
    const { status, error, mensaje } = res
    if (status === 200) {
      setMensaje(mensaje)
      dispatch({
        type: ACTIONS_RESERVAS.DELETE_RESERVA,
        payload: reserva
      })
    } else {
      if (error) {
        setMensaje(error)
      } else {
        setMensaje('Ocurrió un error al eliminar el paciente')
      }
    }
    setLoading(false)
  }
  const cambiarEstadoReserva = async (reserva) => {
    setLoading(true)
    const res = await putEstadoReserva(accessToken, reserva)
    const { status, datos, error, mensaje } = res
    if (status === 200) {
      setMensaje(mensaje)
      dispatch({ type: ACTIONS_RESERVAS.SET_RESERVA_NUEVA, payload: datos })
      setLoading(false)
      return datos
    } else {
      if (error) {
        setMensaje(error)
        setLoading(false)
      } else {
        setMensaje('Error al actualizar el estado')
        setLoading(false)
      }
    }
  }

  return { borrarReserva, loading, cambiarEstadoReserva }
}
