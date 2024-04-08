import { useEffect } from 'react'
import {
  DIAS_DE_LA_SEMANA,
  HORA_DE_COMIENZO,
  HORA_DE_FIN,
  INTERVALO_MINUTOS
} from '../constantes.js'
import { ACTIONS_RESERVAS } from '../Context/Reservas/reducerReservas.js'
import { fechasDelCalendarioSemanal } from '../Helpers/fechasDelCalendarioSemanal.js'
import { getReservasSemana } from './Api/Helpers/Reservas/getReservasSemana.js'
import { useLoaderContext } from './Context/useLoaderContext.jsx'
import { useToastContext } from './Context/useToastContext.jsx'
import { useUserContext } from './Context/useUserContext.jsx'
import { useReservasContext } from './Context/useReservasContext.jsx'
import { fechasDelCalendarioMensual } from '../Helpers/fechasDelCalendarioMensual.js'
import { ACTIONS_CALENDARIO } from '../Context/Calendario/reducerCalendario.js'
import { useCalendarioContext } from './Context/useCalendarioContext.jsx'
import { getReservasMes } from './Api/Helpers/Reservas/getReservasMes.js'

export const useCalendario = () => {
  const {
    diaDeLaSemana,
    mesActual,
    dispatch: dispatchCalendario,
    vistaSemana
  } = useCalendarioContext()
  const { setMensaje } = useToastContext()
  const { accessToken } = useUserContext()
  const { setLoading } = useLoaderContext()
  const { dispatch } = useReservasContext()

  const diasSemana = fechasDelCalendarioSemanal(
    diaDeLaSemana,
    DIAS_DE_LA_SEMANA,
    HORA_DE_COMIENZO,
    HORA_DE_FIN,
    INTERVALO_MINUTOS
  )
  const diasMes = fechasDelCalendarioMensual(
    mesActual,
    HORA_DE_COMIENZO,
    HORA_DE_FIN,
    INTERVALO_MINUTOS
  )
  useEffect(() => {
    const getReservas = async () => {
      setLoading(true)
      const res = await getReservasSemana(accessToken, diaDeLaSemana)
      const { datos, error, status } = res
      if (status === 200) {
        dispatch({ type: ACTIONS_RESERVAS.SET_RESERVAS, payload: datos })
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error al obtener las reservas de la semana')
        }
      }
      setLoading(false)
    }
    vistaSemana && /* accessToken && */ diaDeLaSemana && getReservas()
  }, [vistaSemana, accessToken, setMensaje, diaDeLaSemana, dispatch, setLoading])
  useEffect(() => {
    const getReservas = async () => {
      setLoading(true)
      const res = await getReservasMes(accessToken, mesActual)
      const { datos, error, status } = res
      if (status === 200) {
        dispatch({ type: ACTIONS_RESERVAS.SET_RESERVAS_MES, payload: datos })
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error al obtener las reservas de la semana')
        }
      }
      setLoading(false)
    }
    !vistaSemana && /* accessToken && */ mesActual && getReservas()
  }, [vistaSemana, accessToken, setMensaje, mesActual, dispatch, setLoading])

  const seleccionarDia = (fechaInput) => {
    dispatchCalendario({
      type: ACTIONS_CALENDARIO.SET_DIA_SEMANA,
      payload: fechaInput
    })

    localStorage.setItem('currentDay', fechaInput)
  }
  const seleccionarMes = (fechaInput) => {
    const formattedFecha = fechaInput.split('-').slice(0, -1).join('-') + '-02'
    dispatchCalendario({
      type: ACTIONS_CALENDARIO.SET_MES,
      payload: formattedFecha
    })
    localStorage.setItem('currentMonth', formattedFecha)
  }
  const setSeleccionadas = (seleccionadas) => {
    dispatch({ type: ACTIONS_RESERVAS.SET_RESERVAS_SELECCIONADAS, payload: seleccionadas })
  }
  return {
    diasSemana,
    setSeleccionadas,
    seleccionarDia,
    seleccionarMes,
    diasMes
  }
}
