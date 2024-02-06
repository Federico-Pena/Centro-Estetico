import { useEffect, useState } from 'react'
import { DIAS_DE_LA_SEMANA, HOY_FECHA_STRING } from '../constantes.js'
import { ACTIONS_RESERVAS } from '../Context/Reservas/reducerReservas.js'
import { fechasDelCalendario } from '../Helpers/fechasDelCalendario.js'
import { getReservasSemana } from './Api/helpers/Reservas/getReservasSemana.js'
import { useLoaderContext } from './Context/useLoaderContext.jsx'
import { useToastContext } from './Context/useToastContext.jsx'
import { useUserContext } from './Context/useUserContext.jsx'
import { useReservasContext } from './Context/useReservasContext.jsx'

export const useCalendario = () => {
  const [diaDeLaSemana, setDiaDeLaSemana] = useState(HOY_FECHA_STRING.split('T')[0])
  const { setMensaje } = useToastContext()
  const { accessToken } = useUserContext()
  const { setLoading } = useLoaderContext()
  const { dispatch } = useReservasContext()

  const diasSemana = fechasDelCalendario(diaDeLaSemana)

  useEffect(() => {
    const getReservas = async () => {
      setLoading(true)
      const res = await getReservasSemana(accessToken, diaDeLaSemana)
      const { datos, error, status } = res
      if (status === 200) {
        dispatch({ type: ACTIONS_RESERVAS.SET_RESERVAS, payload: datos })
      } else if (!datos) {
        dispatch({ type: ACTIONS_RESERVAS.SET_RESERVAS, payload: [] })
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Ocurrió un error al obtener las reservas de la semana')
        }
      }
      setLoading(false)
    }
    /* accessToken && */ diaDeLaSemana && getReservas()
  }, [accessToken, setMensaje, diaDeLaSemana, dispatch, setLoading])

  const semanaAnterior = () => {
    const newDate = new Date(`${diaDeLaSemana} 00:00:00.000Z`)
    newDate.setDate(newDate.getDate() - DIAS_DE_LA_SEMANA)
    const fecha = newDate.toISOString().split('T')[0]
    setDiaDeLaSemana(fecha)
  }
  const semanaSiguiente = () => {
    const newDate = new Date(`${diaDeLaSemana} 00:00:00.000Z`)
    newDate.setDate(newDate.getDate() + DIAS_DE_LA_SEMANA)
    const fecha = newDate.toISOString().split('T')[0]
    setDiaDeLaSemana(fecha)
  }
  const seleccionarDia = (fechaInput) => {
    setDiaDeLaSemana(fechaInput)
  }
  const setSeleccionadas = (seleccionadas) => {
    dispatch({ type: ACTIONS_RESERVAS.SET_RESERVAS_SELECCIONADAS, payload: seleccionadas })
  }
  return {
    semanaAnterior,
    semanaSiguiente,
    diasSemana,
    setSeleccionadas,
    seleccionarDia
  }
}
