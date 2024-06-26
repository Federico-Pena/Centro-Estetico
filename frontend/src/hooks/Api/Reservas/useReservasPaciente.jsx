import { useEffect, useState } from 'react'
import { deUnPaciente } from '../Helpers/Reservas/deUnPaciente.js'
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
  const [totalPaginas, setTotalPaginas] = useState(1)

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
