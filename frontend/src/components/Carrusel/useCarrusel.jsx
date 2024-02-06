import { useEffect, useState } from 'react'
import { apiRoutes } from '../../Api/routes.js'
import { fetcher } from '../../Api/Helpers/fetcher.js'
import { useUserContext } from '../../Hooks/Context/useUserContext.jsx'
import { useToastContext } from '../../Hooks/Context/useToastContext.jsx'

export const useCarrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [promos, setPromos] = useState([])
  const { setMensaje } = useToastContext()
  const { accessToken } = useUserContext()
  useEffect(() => {
    const getServicios = async () => {
      const url = apiRoutes.publicas.getPromociones
      const opciones = {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
      const res = await fetcher(url, opciones)
      const { error, datos, status } = res
      if (status === 200) {
        setPromos(datos)
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Error al obtener los datos')
        }
      }
    }
    getServicios()
  }, [setMensaje, accessToken])
  useEffect(() => {
    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % promos.length
      setCurrentIndex(nextIndex)
    }
    const autoAdvance = setInterval(nextSlide, 5000)
    return () => {
      clearInterval(autoAdvance)
    }
  }, [currentIndex, promos.length])

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + promos.length) % promos.length
    setCurrentIndex(prevIndex)
  }

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % promos.length
    setCurrentIndex(nextIndex)
  }
  return { promos, nextSlide, prevSlide, currentIndex }
}
