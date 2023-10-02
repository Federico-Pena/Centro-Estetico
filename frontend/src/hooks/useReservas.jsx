import { useContext, useEffect, useState } from 'react'
import { ordenarPorFecha } from '../helpers/FechasHoras/ordenarPorFecha'
import { MensajeToast } from '../context/mensajeContext'
import { apiEndPoint } from '../services/apiConfig'
import { UserContext } from '../context/userContext'
import { fetchData } from './fetchData'

const useReservas = (dia) => {
  const [delDia, setDelDia] = useState([])
  const [loading, setLoading] = useState(false)
  const { setMensaje } = useContext(MensajeToast)
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
      try {
        const url = `${apiEndPoint.reservas.deUnDia}${dia}`
        await fetchData(url, options, (res) => {
          if (res.error) {
            setMensaje(res.error)
          } else {
            setDelDia(res.data.sort(ordenarPorFecha))
          }
        })
      } catch (err) {
        setMensaje(err.message)
      } finally {
        setLoading(false)
      }
    }
    /* accessToken && */ dia && getReservas()
  }, [dia, accessToken, setMensaje])

  return {
    delDia,
    loading,
    setDelDia
  }
}

export default useReservas
