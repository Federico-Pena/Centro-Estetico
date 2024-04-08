import { postServicio } from '../Helpers/Servicios/postServicio.js'
import { putServicio } from '../Helpers/Servicios/putServicio.js'
import { deleteServicio } from '../Helpers/Servicios/deleteServicio.js'
import { getServicios } from '../Helpers/Servicios/getServicios.js'
import { useLoaderContext } from '../../Context/useLoaderContext.jsx'
import { useToastContext } from '../../Context/useToastContext.jsx'
import { useUserContext } from '../../Context/useUserContext.jsx'
import { useServiciosContext } from '../../Context/useServiciosContext.jsx'
import { ACTIONS_SERVICIOS } from '../../../Context/Servicios/serviciosReducer.js'

export const useServicio = () => {
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()
  const { setLoading } = useLoaderContext()
  const { dispatch } = useServiciosContext()

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
