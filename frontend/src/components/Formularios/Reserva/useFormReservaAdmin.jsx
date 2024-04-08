import { useUserContext } from '../../../Hooks/Context/useUserContext'
import { useEffect, useState } from 'react'
import { useToastContext } from '../../../Hooks/Context/useToastContext'
import { useLoaderContext } from '../../../Hooks/Context/useLoaderContext'
import { useReservasContext } from '../../../Hooks/Context/useReservasContext'
import { reservasDelDiaFormAdmin } from '../../../Api/Helpers/Formularios/reservasDelDiaFormAdmin'
import { ACTIONS_RESERVAS } from '../../../Context/Reservas/reducerReservas'
import { postReserva } from '../../../Hooks/Api/Helpers/Reservas/postReserva.js'
import { putReserva } from '../../../Hooks/Api/Helpers/Reservas/putReserva.js'

export const useFormReservaAdmin = (dia) => {
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()
  const { setLoading } = useLoaderContext()
  const { dispatch } = useReservasContext()
  const [horasDisponibles, setHorasDisponibles] = useState([])
  const [reservasDelDia, setReservasDelDia] = useState([])

  useEffect(() => {
    const horasLibres = async () => {
      setLoading(true)
      try {
        const res = await reservasDelDiaFormAdmin(dia, accessToken)
        const { datos, horas, error } = res
        if (error) {
          setMensaje(error)
          setHorasDisponibles([])
        } else {
          setHorasDisponibles(horas)
          setReservasDelDia(datos)
        }
      } catch (error) {
        setMensaje('Error al obtener lar horas disponibles')
      } finally {
        setLoading(false)
      }
    }
    dia && horasLibres()
  }, [accessToken, setMensaje, dia, setLoading])

  const agregarReserva = async (nuevoReserva) => {
    try {
      setLoading(true)
      const res = await postReserva(accessToken, nuevoReserva)
      const { error, datos, mensaje, status } = res
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({
          type: ACTIONS_RESERVAS.SET_RESERVA_NUEVA,
          payload: datos
        })
        return true
      } else {
        if (error) {
          setMensaje(error)
          return false
        } else {
          setMensaje('Ocurrió un error')
          return false
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error')
    } finally {
      setLoading(false)
    }
  }
  const editarReserva = async (reserva, id) => {
    try {
      setLoading(true)
      const res = await putReserva(accessToken, reserva, id)
      const { status, datos, error, mensaje } = res
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({
          type: ACTIONS_RESERVAS.SET_RESERVA_NUEVA,
          payload: datos
        })
        return true
      } else {
        if (error) {
          setMensaje(error)
          return false
        } else {
          setMensaje('Error al actualizar la reserva')
          return false
        }
      }
    } catch (error) {
      setMensaje('Error al actualizar la reserva')
      return false
    } finally {
      setLoading(false)
    }
  }

  return {
    horasDisponibles,
    reservasDelDia,
    agregarReserva,
    editarReserva
  }
}
