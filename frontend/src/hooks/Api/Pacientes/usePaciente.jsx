import { useContext, useEffect, useState } from 'react'
import { apiRoutes } from '../../../Api/routes.js'
import { fetcher } from '../../../Api/Helpers/fetcher.js'
import { UserContext } from '../../../Context/User/userContext.jsx'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import { ACTIONS_PACIENTES } from '../../../Context/Pacientes/reducerPaciente.js'
import { PacientesContext } from '../../../Context/Pacientes/PacientesContext.jsx'
import { deletePaciente } from '../helpers/Pacientes/deletePaciente.js'
import { postPaciente } from '../helpers/Pacientes/postPaciente.js'
import { putPaciente } from '../helpers/Pacientes/putPaciente.js'
import { getPacienteId } from '../helpers/Pacientes/getPacienteId.js'
import { LoaderContext } from '../../../Context/Loader/LoaderContext.jsx'

export const usePaciente = () => {
  const { setLoading } = useContext(LoaderContext)
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(ToastContext)
  const { dispatch } = useContext(PacientesContext)
  const [pagina, setPagina] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  /* useEffect(() => {
    const migrarDatos = async () => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken || ''}`
        }
      }
      const url = apiRoutes.pacientes.getPacientesMigrarDatos
      const res = await fetcher(url, options)
      const { status, error, datos, mensaje } = res
      if (status === 200) {
        setMensaje(mensaje)
        console.log(datos)
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error el obtener los pacientes')
        }
      }
    }
    migrarDatos()
  }, [accessToken, setMensaje])
 */
  useEffect(() => {
    const getPacientesPaginados = async () => {
      try {
        const options = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken || ''}`
          }
        }
        setLoading(true)
        const url = `${apiRoutes.pacientes.getPacientesPaginados}${pagina}`
        const res = await fetcher(url, options)
        const { status, error, datos } = res
        if (status === 200) {
          dispatch({
            type: ACTIONS_PACIENTES.SET_PACIENTES,
            payload: datos.pacientes
          })
          setPagina(datos.page)
          setTotalPages(datos.totalPages)
        } else {
          if (error) {
            setMensaje(error)
          } else {
            setMensaje('Ocurrió un error el obtener los pacientes')
          }
        }
      } catch (error) {
        setMensaje('Ocurrió un error el obtener los pacientes')
      } finally {
        setLoading(false)
      }
    }
    getPacientesPaginados()
  }, [dispatch, setMensaje, accessToken, pagina, setLoading])

  const borrarPaciente = async (paciente) => {
    try {
      setLoading(true)
      const res = await deletePaciente(accessToken, paciente._id)
      const { status, error, mensaje } = res
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({
          type: ACTIONS_PACIENTES.DELETE_PACIENTE,
          payload: paciente
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
  const agregarPaciente = async (nuevoUsuario) => {
    try {
      setLoading(true)
      const res = await postPaciente(accessToken, nuevoUsuario)
      const { error, datos, mensaje, status } = res
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({
          type: ACTIONS_PACIENTES.SET_PACIENTE_NUEVO,
          payload: datos
        })
        return true
      } else {
        if (error) {
          setMensaje(error)
          return false
        } else {
          setMensaje('Ocurrió un error al guardar el paciente')
          return false
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error al guardar el paciente')
    } finally {
      setLoading(false)
    }
  }
  const editarPaciente = async (nuevoUsuario, id) => {
    try {
      setLoading(true)

      const res = await putPaciente(accessToken, nuevoUsuario, id)
      const { error, datos, mensaje, status } = res
      if (status === 200) {
        setMensaje(mensaje)
        dispatch({
          type: ACTIONS_PACIENTES.SET_PACIENTE_NUEVO,
          payload: datos
        })
        return true
      } else {
        if (error) {
          setMensaje(error)
          return false
        } else {
          setMensaje('Ocurrió un error al guardar el paciente')
          return false
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error al guardar el paciente')
    } finally {
      setLoading(false)
    }
  }
  const obtenerPacientePorId = async (id) => {
    try {
      setLoading(true)
      const res = await getPacienteId(accessToken, id)
      const { status, error, datos } = res
      if (status === 200) {
        setMensaje(error)
        dispatch({ type: ACTIONS_PACIENTES.SET_PACIENTE, payload: datos })
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error el obtener los datos del paciente')
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error el obtener los datos del paciente')
    } finally {
      setLoading(false)
    }
  }
  return {
    borrarPaciente,
    pagina,
    totalPages,
    setPagina,
    agregarPaciente,
    editarPaciente,
    obtenerPacientePorId
  }
}
