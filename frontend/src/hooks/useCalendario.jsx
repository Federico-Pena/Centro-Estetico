import { useContext, useEffect, useState } from 'react'
import { DIAS_DE_LA_SEMANA, HOY_FECHA_STRING } from '../constantes.js'
import { ACTIONS_RESERVAS } from '../Context/Reservas/reducerReservas.js'
import { ReservasContext } from '../Context/Reservas/ReservasContext.jsx'
import { ToastContext } from '../Context/Toast/mensajeContext.jsx'
import { UserContext } from '../Context/User/userContext.jsx'
import { fechasDelCalendario } from '../Helpers/fechasDelCalendario.js'
import { getReservasSemana } from './Api/helpers/Reservas/getReservasSemana.js'

export const useCalendario = () => {
  const [loading, setLoading] = useState(false)
  const [diaDeLaSemana, setDiaDeLaSemana] = useState(HOY_FECHA_STRING.split('T')[0])
  const { setMensaje } = useContext(ToastContext)
  const { accessToken } = useContext(UserContext)
  const { dispatch } = useContext(ReservasContext)
  const diasSemana = fechasDelCalendario(diaDeLaSemana)

  useEffect(() => {
    const getReservas = async () => {
      setLoading(true)
      const res = await getReservasSemana(accessToken, diaDeLaSemana)
      const { datos, error, status } = res
      console.log(datos)
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
  }, [accessToken, setMensaje, diaDeLaSemana, dispatch])
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
    loading,
    semanaAnterior,
    semanaSiguiente,
    diasSemana,
    setSeleccionadas,
    seleccionarDia
  }
}
