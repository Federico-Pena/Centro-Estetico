import { useContext, useEffect, useState } from 'react'
import { fetchData } from './fetchData'
import { UserContext } from '../context/userContext'
import { apiEndPoint } from '../services/apiConfig'
import { MensajeToast } from '../context/mensajeContext'
import { DIAS_DE_LA_SEMANA } from '../constantes'
import { diasSemanaConHoras } from '../helpers/FechasHoras/diasSemanaConHoras'

export const useCalendario = (dia) => {
  const [loading, setLoading] = useState(false)
  const [currentDate, setCurrentDate] = useState(dia)
  const [reservasSemanales, setReservasSemanales] = useState([])
  const { setMensaje } = useContext(MensajeToast)
  const diasSemana = diasSemanaConHoras(currentDate, reservasSemanales)
  const { accessToken } = useContext(UserContext)

  useEffect(() => {
    const getReservas = async () => {
      setLoading(true)
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken || ''}`
        }
      }
      const url = `${apiEndPoint.reservas.deLaSemana}${currentDate}`
      await fetchData(url, options, (res) => {
        if (res.error) {
          setMensaje(res.error)
          return
        } else {
          setReservasSemanales(res.reservas)
        }
      })
      setLoading(false)
    }
    /* accessToken && */ currentDate && getReservas()
  }, [accessToken, setMensaje, currentDate])

  const semanaAnterior = () => {
    setLoading(true)
    const newDate = new Date(`${currentDate} 00:00:00.000Z`)
    newDate.setDate(newDate.getDate() - DIAS_DE_LA_SEMANA)
    setCurrentDate(newDate.toISOString().split('T')[0])
    setLoading(false)
  }
  const semanaSiguiente = () => {
    setLoading(true)
    const newDate = new Date(`${currentDate} 00:00:00.000Z`)
    newDate.setDate(newDate.getDate() + DIAS_DE_LA_SEMANA)
    setCurrentDate(newDate.toISOString().split('T')[0])
    setLoading(false)
  }
  return {
    reservasSemanales,
    loading,
    diasSemana,
    semanaAnterior,
    semanaSiguiente,
    setReservasSemanales
  }
}
