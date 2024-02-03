import { useContext, useState } from 'react'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import { UserContext } from '../../../Context/User/userContext.jsx'
import { TratamientoContext } from '../../../context/Tratamiento/TratamientoContext.jsx'
import { ACTIONS_TRATAMIENTOS } from '../../../context/Tratamiento/tratamientoReducer.js'
import { getTratamientos } from '../helpers/Tratamientos/getTratamientos.js'
import { postTratamiento } from '../helpers/Tratamientos/postTratamiento.js'
import { deleteTratamiento } from '../helpers/Tratamientos/deleteTratamiento.js'
import { putTratamiento } from '../helpers/Tratamientos/putTratamiento.js'
export const useTratamientos = () => {
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(ToastContext)
  const [loading, setLoading] = useState(false)
  const { dispatch, tratamientos } = useContext(TratamientoContext)

  const obtenerTratamientos = async () => {
    setLoading(true)
    try {
      const response = await getTratamientos(accessToken)
      const { error, datos, status } = response
      if (status === 200) {
        dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTOS, payload: datos })
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
  const editarTratamiento = async (tratamientoNuevo, id) => {
    setLoading(true)
    try {
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
          setMensaje('Ocurrió un error')
        }
        return false
      }
    } catch (error) {
      setMensaje('Ocurrió un error')
      return false
    } finally {
      setLoading(false)
    }
  }
  const eliminarTratamiento = async (id) => {
    setLoading(true)
    try {
      const response = await deleteTratamiento(accessToken, id)
      const { error, mensaje, datos, status } = response
      console.log(datos)
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({ type: ACTIONS_TRATAMIENTOS.DELETE_TRATAMIENTO, payload: datos })
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
  const crearTratamiento = async (tratamiento) => {
    setLoading(true)
    try {
      const response = await postTratamiento(accessToken, tratamiento)
      const { error, mensaje, datos, status } = response
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_NUEVO, payload: datos })
        return true
      } else {
        if (error) {
          setMensaje(error)
        }
        return false
      }
    } catch (error) {
      setMensaje('Ocurrió un error')
    } finally {
      setLoading(false)
    }
  }
  /*
  const seleccionarTratamiento = (id) => {
    const seleccionados = tratamientos.filter((ser) => ser._id === id)
    dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTOS_FILTRADOS, payload: seleccionados })
  }
 */
  return {
    obtenerTratamientos,
    editarTratamiento,
    eliminarTratamiento,
    crearTratamiento,
    loading
    /* 
    seleccionarTratamiento, */
  }
}
