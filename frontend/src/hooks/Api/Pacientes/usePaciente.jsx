import { useEffect, useState } from 'react'
import { apiRoutes } from '../../../Api/routes.js'
import { fetcher } from '../../../Api/Helpers/fetcher.js'
import { ACTIONS_PACIENTES } from '../../../Context/Pacientes/reducerPaciente.js'
import { deletePaciente } from '../Helpers/Pacientes/deletePaciente.js'
import { postPaciente } from '../Helpers/Pacientes/postPaciente.js'
import { putPaciente } from '../Helpers/Pacientes/putPaciente.js'
import { getPacienteId } from '../Helpers/Pacientes/getPacienteId.js'
import { usePacienteContext } from '../../Context/usePacienteContext.jsx'
import { useLoaderContext } from '../../Context/useLoaderContext.jsx'
import { useToastContext } from '../../Context/useToastContext.jsx'
import { useUserContext } from '../../Context/useUserContext.jsx'
import { getPacientePorNombre } from '../Helpers/Pacientes/getPacientePorNombre.js'
import { postUploadPdf } from '../Helpers/Pacientes/postUploadPdf.js'
import { getPacientesNombres } from '../Helpers/Pacientes/getPacientesNombres.js'

export const usePaciente = () => {
  const { setLoading } = useLoaderContext()
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()
  const { dispatch } = usePacienteContext()
  const [pagina, setPagina] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

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
  useEffect(() => {
    const obtenerNombrePacientes = async () => {
      setLoading(true)
      try {
        const res = await getPacientesNombres(accessToken)
        const { datos, status, error } = res
        if (status === 200) {
          dispatch({
            type: ACTIONS_PACIENTES.SET_PACIENTES_NOMBRES,
            payload: datos
          })
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
  }, [dispatch, accessToken, setMensaje, setLoading])
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
        dispatch({ type: ACTIONS_PACIENTES.SET_PACIENTE, payload: datos })
        return datos
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
  const obtenerPacientePorNombre = async (nombre) => {
    try {
      setLoading(true)
      const res = await getPacientePorNombre(accessToken, nombre)
      const { status, error, datos } = res
      if (status === 200) {
        dispatch({ type: ACTIONS_PACIENTES.SET_PACIENTE, payload: datos })
        return datos
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
  const uploadPdf = async (data) => {
    let dataToSend = new FormData()
    dataToSend.append('file', data)
    const { status, error, datos } = await postUploadPdf(accessToken, dataToSend)
    if (status === 200) {
      return datos
    }
    if (error) {
      setMensaje(error)
    } else {
      setMensaje('Ocurrió un error al subir el archivo')
    }
    return false
  }
  return {
    borrarPaciente,
    pagina,
    totalPages,
    setPagina,
    agregarPaciente,
    editarPaciente,
    obtenerPacientePorId,
    obtenerPacientePorNombre,
    uploadPdf
  }
}
