import { getTratamientos } from '../helpers/Tratamientos/getTratamientos.js'
import { postTratamiento } from '../helpers/Tratamientos/postTratamiento.js'
import { deleteTratamiento } from '../helpers/Tratamientos/deleteTratamiento.js'
import { putTratamiento } from '../helpers/Tratamientos/putTratamiento.js'
import { useLoaderContext } from '../../Context/useLoaderContext.jsx'
import { useToastContext } from '../../Context/useToastContext.jsx'
import { ACTIONS_TRATAMIENTOS } from '../../../context/Tratamiento/tratamientoReducer.js'
import { useUserContext } from '../../Context/useUserContext.jsx'
import { useTratamientoContext } from '../../Context/useTratamientoContext.jsx'

export const useTratamientos = () => {
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()
  const { setLoading } = useLoaderContext()
  const { dispatch } = useTratamientoContext()

  const obtenerTratamientos = async () => {
    try {
      setLoading(true)
      const response = await getTratamientos(accessToken)
      const { error, datos, status } = response
      if (status === 200) {
        dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTOS, payload: datos })
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error al obtener los tratamientos')
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error al obtener los tratamientos')
    } finally {
      setLoading(false)
    }
  }
  const editarTratamiento = async (tratamientoNuevo, id) => {
    try {
      setLoading(true)
      const response = await putTratamiento(accessToken, tratamientoNuevo, id)
      const { error, mensaje, datos, status } = response
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_NUEVO, payload: datos })
        return true
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error al guardar el tratamiento')
        }
        return false
      }
    } catch (error) {
      setMensaje('Ocurrió un error al guardar el tratamiento')
      return false
    } finally {
      setLoading(false)
    }
  }
  const eliminarTratamiento = async (id) => {
    try {
      setLoading(true)
      const response = await deleteTratamiento(accessToken, id)
      const { error, mensaje, datos, status } = response
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({ type: ACTIONS_TRATAMIENTOS.DELETE_TRATAMIENTO, payload: datos })
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error al eliminar el tratamiento')
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error al eliminar el tratamiento')
    } finally {
      setLoading(false)
    }
  }
  const crearTratamiento = async (tratamiento) => {
    try {
      setLoading(true)
      const response = await postTratamiento(accessToken, tratamiento)
      const { error, mensaje, datos, status } = response
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_NUEVO, payload: datos })
        return true
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error al guardar el tratamiento')
        }
        return false
      }
    } catch (error) {
      setMensaje('Ocurrió un error al guardar el tratamiento')
    } finally {
      setLoading(false)
    }
  }

  return {
    obtenerTratamientos,
    editarTratamiento,
    eliminarTratamiento,
    crearTratamiento
  }
}
