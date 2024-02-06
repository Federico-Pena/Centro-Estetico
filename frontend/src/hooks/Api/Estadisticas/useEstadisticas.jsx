import { useEffect } from 'react'
import { getEstadisticasReservas } from '../helpers/Estadisticas/getEstadisticasReservas.js'
import { ACTIONS_ESTADISTICAS } from '../../../Context/Estadisticas/reducerEstadisticas.js'
import { getEstadisticasReservasAno } from '../helpers/Estadisticas/getEstadisticasReservasAno.js'
import { getEstadisticasReservasMes } from '../helpers/Estadisticas/getEstadisticasReservasMes.js'
import { useLoaderContext } from '../../Context/useLoaderContext.jsx'
import { useToastContext } from '../../Context/useToastContext.jsx'
import { useUserContext } from '../../Context/useUserContext.jsx'
import { useEstadisticasContext } from '../../Context/useEstadisticasContext.jsx'

export const useEstadisticas = () => {
  const { setLoading } = useLoaderContext()
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()
  const { dispatch } = useEstadisticasContext()
  useEffect(() => {
    const getReservasEstadisticas = async () => {
      setLoading(true)
      try {
        const res = await getEstadisticasReservas(accessToken)
        const { status, error, datos } = res
        if (status === 200) {
          dispatch({
            type: ACTIONS_ESTADISTICAS.SET_ESTADISTICAS_RESERVAS_TODAS,
            payload: datos
          })
        } else {
          if (error) {
            setMensaje(error)
          } else {
            setMensaje('Ocurrió un error el obtener las estadísticas de las reservas del año')
          }
        }
      } catch (error) {
        setMensaje('Ocurrió un error el obtener las estadisticas de las reservas del año')
      } finally {
        setLoading(false)
      }
    }
    getReservasEstadisticas()
  }, [dispatch, setMensaje, accessToken, setLoading])

  const obtenerReservasDelAno = async (year) => {
    try {
      setLoading(true)
      const res = await getEstadisticasReservasAno(accessToken, year)
      const { status, error, datos } = res
      if (status === 200) {
        dispatch({
          type: ACTIONS_ESTADISTICAS.SET_ESTADISTICAS_RESERVAS,
          payload: datos
        })
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error el obtener las estadísticas de las reservas del año')
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error el obtener las estadisticas de las reservas del año')
    } finally {
      setLoading(false)
    }
  }
  const obtenerReservasDelMes = async (year, mes) => {
    try {
      setLoading(true)

      const res = await getEstadisticasReservasMes(accessToken, year, mes)
      const { status, error, datos } = res
      if (status === 200) {
        dispatch({
          type: ACTIONS_ESTADISTICAS.SET_ESTADISTICAS_RESERVAS,
          payload: datos
        })
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error el obtener las estadísticas de las reservas del mes')
        }
      }
    } catch (error) {
      setMensaje('Ocurrió un error el obtener las estadisticas de las reservas del mes')
    } finally {
      setLoading(false)
    }
  }
  return { obtenerReservasDelAno, obtenerReservasDelMes }
}
