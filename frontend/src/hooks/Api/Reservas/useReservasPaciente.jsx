import { useEffect, useState } from 'react'
import { deUnPaciente } from '../helpers/Reservas/deUnPaciente.js'
import { ACTIONS_RESERVAS } from '../../../Context/Reservas/reducerReservas.js'
import { useLoaderContext } from '../../Context/useLoaderContext.jsx'
import { useToastContext } from '../../Context/useToastContext.jsx'
import { useUserContext } from '../../Context/useUserContext.jsx'
import { useReservasContext } from '../../Context/useReservasContext.jsx'

export const useReservasPaciente = (id) => {
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()
  const { dispatch } = useReservasContext()
  const { setLoading } = useLoaderContext()
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(false)
  /*  useEffect(() => {
    const migrarDatos = async () => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken || ''}`
        }
      }
      const url = apiRoutes.reservas.migrarDatos
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
    const getReservasPaciente = async () => {
      try {
        setLoading(true)
        const res = await deUnPaciente(accessToken, pagina, id)
        const { status, error, datos } = res
        if (status === 200) {
          dispatch({
            type: ACTIONS_RESERVAS.SET_RESERVAS,
            payload: datos.reservas
          })
          setPagina(datos.page)
          setTotalPaginas(datos.totalPages)
        } else {
          if (error) {
            setMensaje(error)
          } else {
            setMensaje('Ocurrió un error al obtener las reservas del paciente')
          }
        }
      } catch (error) {
        setMensaje('Ocurrió un error al obtener las reservas del paciente')
      } finally {
        setLoading(false)
      }
    }
    getReservasPaciente()
  }, [accessToken, pagina, dispatch, setMensaje, id, setLoading])

  return { pagina, totalPaginas, setPagina }
}
