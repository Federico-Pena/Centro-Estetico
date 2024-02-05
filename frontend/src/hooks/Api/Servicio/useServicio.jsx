import { useContext } from 'react'
import { ServiciosContext } from '../../../context/Servicios/ServiciosContext.jsx'
import { ACTIONS_SERVICIOS } from '../../../context/Servicios/serviciosReducer.js'
import { UserContext } from '../../../Context/User/userContext.jsx'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import { postServicio } from '../helpers/Servicios/postServicio.js'
import { putServicio } from '../helpers/Servicios/putServicio.js'
import { deleteServicio } from '../helpers/Servicios/deleteServicio.js'
import { getServicios } from '../helpers/Servicios/getServicios.js'
import { LoaderContext } from '../../../Context/Loader/LoaderContext.jsx'

export const useServicio = () => {
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(ToastContext)
  const { setLoading } = useContext(LoaderContext)
  const { dispatch } = useContext(ServiciosContext)

  const obtenerServicios = async () => {
    try {
      setLoading(true)
      const res = await getServicios(accessToken)
      const { error, datos, status } = res
      if (status === 200) {
        dispatch({ type: ACTIONS_SERVICIOS.SET_SERVICIOS, payload: datos })
      } else {
        if (error) {
          setMensaje(error)
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error')
    } finally {
      setLoading(false)
    }
  }
  const agregarServicio = async (data) => {
    try {
      setLoading(true)
      const res = await postServicio(accessToken, data)
      const { error, mensaje, datos, status } = res
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({ type: ACTIONS_SERVICIOS.SET_SERVICIO_NUEVO, payload: datos })
        return true
      } else {
        if (error) {
          setMensaje(error)
          return false
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error')
      return false
    } finally {
      setLoading(false)
    }
  }
  const editarServicio = async (data) => {
    try {
      setLoading(true)
      const response = await putServicio(accessToken, data)
      const { error, mensaje, datos, status } = response
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({
          type: ACTIONS_SERVICIOS.SET_SERVICIO_NUEVO,
          payload: datos
        })
        return true
      } else {
        if (error) {
          setMensaje(error)
          return false
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error')
      return false
    } finally {
      setLoading(false)
    }
  }
  const eliminarServicio = async (id) => {
    try {
      setLoading(true)
      const response = await deleteServicio(accessToken, id)
      const { mensaje, error, datos, status } = response
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({
          type: ACTIONS_SERVICIOS.DELETE_SERVICIO,
          payload: datos.servicio
        })
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error')
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error')
    } finally {
      setLoading(false)
    }
  }

  return {
    editarServicio,
    obtenerServicios,
    agregarServicio,
    eliminarServicio
  }
}
