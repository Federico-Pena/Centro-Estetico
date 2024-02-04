import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../Context/User/userContext.jsx'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import { EstadisticasContext } from '../../../Context/Estadisticas/EstadisticasContext.jsx'
import { getEstadisticasReservas } from '../helpers/Estadisticas/getEstadisticasReservas.js'
import { ACTIONS_ESTADISTICAS } from '../../../Context/Estadisticas/reducerEstadisticas.js'
import { getEstadisticasReservasAno } from '../helpers/Estadisticas/getEstadisticasReservasAno.js'
import { getEstadisticasReservasMes } from '../helpers/Estadisticas/getEstadisticasReservasMes.js'

export const useEstadisticas = () => {
  const [loading, setLoading] = useState(false)
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(ToastContext)
  const { dispatch } = useContext(EstadisticasContext)
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
  }, [dispatch, setMensaje, accessToken])

  const obtenerReservasDelAno = async (year) => {
    setLoading(true)
    try {
      const res = await getEstadisticasReservasAno(accessToken, year)
      const { status, error, datos } = res
      console.log(datos)

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
    setLoading(true)
    try {
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
  return { loading, obtenerReservasDelAno, obtenerReservasDelMes }
}
