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

export const usePaciente = () => {
  const [loading, setLoading] = useState(false)
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
      setLoading(false)
    }
    getPacientesPaginados()
  }, [dispatch, setMensaje, accessToken, pagina])

  const borrarPaciente = async (paciente) => {
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
    setLoading(false)
  }
  const agregarPaciente = async (nuevoUsuario) => {
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
        setMensaje('Ocurrió un error')
        return false
      }
    }
  }
  const editarPaciente = async (nuevoUsuario, id) => {
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
        setMensaje('Ocurrió un error')
        return false
      }
    }
  }
  const obtenerPacientePorId = async (id) => {
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
    setLoading(false)
  }
  /*  

  
  
  const putPaciente = async (id, nuevoUsuario) => {
    const url = `${apiEndPoint.paciente.editarPaciente}${id}`
    const options = {
      method: 'PUT',
      body: nuevoUsuario,
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    }
    await fetchData(url, options, (res) => {
      const { error, nuevoPaciente, mensaje } = res
      if (error) {
        setMensaje(error)
      } else {
        setMensaje(mensaje)
        dispatch({
          type: ACTIONS_PACIENTES.CLEAR_PACIENTE
        })
        dispatch({
          type: ACTIONS_PACIENTES.SET_PACIENTE,
          payload: nuevoPaciente
        })
      }
    })
  } */
  return {
    borrarPaciente,
    loading,
    pagina,
    totalPages,
    setPagina,
    agregarPaciente,
    editarPaciente,
    obtenerPacientePorId
  }
}
