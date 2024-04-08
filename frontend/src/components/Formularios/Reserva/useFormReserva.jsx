import { useEffect, useState } from 'react'
import { reservasDelDiaParaUser } from '../../../Api/Helpers/Formularios/reservasDelDiaParaUser.js'
import { useLoaderContext } from '../../../Hooks/Context/useLoaderContext.jsx'
import { useToastContext } from '../../../Hooks/Context/useToastContext.jsx'
import { useUserContext } from '../../../Hooks/Context/useUserContext.jsx'

export const useFormReserva = (dia) => {
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()
  const { setLoading } = useLoaderContext()
  const [horasDisponibles, setHorasDisponibles] = useState([])

  useEffect(() => {
    const horasLibres = async () => {
      setLoading(true)
      try {
        const res = await reservasDelDiaParaUser(dia, accessToken)
        const { horas, error } = res
        if (error) {
          setMensaje(error)
          setHorasDisponibles([])
        } else {
          setHorasDisponibles(horas)
        }
      } catch (error) {
        setMensaje('Error al obtener lar horas disponibles')
      } finally {
        setLoading(false)
      }
    }
    dia && horasLibres()
  }, [accessToken, setMensaje, dia, setLoading])

  return {
    horasDisponibles
  }
}
