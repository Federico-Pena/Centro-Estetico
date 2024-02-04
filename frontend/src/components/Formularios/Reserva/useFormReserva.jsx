import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../Context/User/userContext.jsx'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import { reservasDelDiaParaUser } from '../../../Api/Helpers/Formularios/reservasDelDiaParaUser.js'
import { ReservasContext } from '../../../Context/Reservas/ReservasContext.jsx'
import { ACTIONS_RESERVAS } from '../../../Context/Reservas/reducerReservas.js'
import { postReserva } from '../../../Hooks/Api/helpers/Reservas/postReserva.js'
import { putReserva } from '../../../Hooks/Api/helpers/Reservas/putReserva.js'
import { getPacientesNombres } from '../../../Hooks/Api/helpers/Pacientes/getPacientesNombres.js'
import { LoaderContext } from '../../../Context/Loader/LoaderContext.jsx'

export const useFormReserva = (dia) => {
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(ToastContext)
  const { setLoading } = useContext(LoaderContext)
  const { dispatch } = useContext(ReservasContext)
  const [horasDisponibles, setHorasDisponibles] = useState([])
  const [pacientesNombres, setPacientesNombres] = useState([])
  const [reservasDelDia, setReservasDelDia] = useState([])
  useEffect(() => {
    const obtenerNombrePacientes = async () => {
      setLoading(true)
      try {
        const res = await getPacientesNombres(accessToken)
        const { datos, status, error } = res
        if (status === 200) {
          setPacientesNombres(datos)
        } else {
          if (error) {
            setMensaje(error)
          } else {
            setMensaje('Error al obtener los nombres de los pacientes')
          }
        }
      } catch (error) {
        setMensaje('Error al obtener los nombres de los pacientes')
      } finally {
        setLoading(false)
      }
    }
    obtenerNombrePacientes()
  }, [accessToken, setMensaje, setLoading])

  useEffect(() => {
    const horasLibres = async () => {
      setLoading(true)
      try {
        const res = await reservasDelDiaParaUser(dia, accessToken)
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
    editarReserva,
    pacientesNombres
  }
}
