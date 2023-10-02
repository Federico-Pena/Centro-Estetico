import { useContext, useEffect, useState } from 'react'
import { fetchData } from './fetchData'
import { UserContext } from '../context/userContext'
import { apiEndPoint } from '../services/apiConfig'
import { MensajeToast } from '../context/mensajeContext'

const useTratamiento = () => {
  const [tratamientos, setTratamientos] = useState([])
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(MensajeToast)

  useEffect(() => {
    const getTratamientos = async () => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken || ''}`
        }
      }
      const url = apiEndPoint.tratamientos.todos
      await fetchData(url, options, (response) => {
        const { error, tratamientos } = response
        if (error) {
          setMensaje(error)
        } else {
          setTratamientos(tratamientos)
        }
      })
    }
    /* accessToken &&  */ getTratamientos()
  }, [accessToken, setMensaje])

  return { tratamientos }
}

export default useTratamiento
