import { deleteReserva } from '../helpers/Reservas/deleteReserva.js'
import { ACTIONS_RESERVAS } from '../../../Context/Reservas/reducerReservas.js'
import { putEstadoReserva } from '../helpers/Reservas/putEstadoReserva.js'
import { useLoaderContext } from '../../Context/useLoaderContext.jsx'
import { useToastContext } from '../../Context/useToastContext.jsx'
import { useUserContext } from '../../Context/useUserContext.jsx'
import { useReservasContext } from '../../Context/useReservasContext.jsx'

export const useReserva = () => {
  const { setLoading } = useLoaderContext()
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()
  const { dispatch } = useReservasContext()

  const borrarReserva = async (reserva) => {
    try {
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
    } catch (error) {
      setMensaje('Ocurrió un error al eliminar el paciente')
    } finally {
      setLoading(false)
    }
  }
  const cambiarEstadoReserva = async (reserva) => {
    try {
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
        } else {
          setMensaje('Error al actualizar el estado de la reserva')
        }
      }
    } catch (error) {
      setMensaje('Error al actualizar el estado de la reserva')
    } finally {
      setLoading(false)
    }
  }

  return { borrarReserva, cambiarEstadoReserva }
}
