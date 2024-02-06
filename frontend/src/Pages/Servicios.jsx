import { useEffect, useState } from 'react'
import { CardServicio } from '../Components/CardServicio/CardServicio.jsx'
import { apiRoutes } from '../Api/routes.js'
import { fetcher } from '../Api/Helpers/fetcher.js'
import Carrusel from '../Components/Carrusel/Carrusel.jsx'
import { useUserContext } from '../Hooks/Context/useUserContext.jsx'
import { useToastContext } from '../Hooks/Context/useToastContext.jsx'

export default function Servicios() {
  const { setMensaje } = useToastContext()
  const { accessToken } = useUserContext()
  const [servicios, setServicios] = useState([])
  useEffect(() => {
    const getServicios = async () => {
      const url = apiRoutes.publicas.getServicios
      const opciones = {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
      const res = await fetcher(url, opciones)
      const { error, datos, status } = res
      if (status === 200) {
        setServicios(datos)
      } else {
        if (error) {
          setMensaje(error)
        } else {
          setMensaje('Error al obtener los servicios')
        }
      }
    }
    getServicios()
  }, [setMensaje, accessToken])
  return (
    <main className='grid py-8 px-4 gap-8'>
      <h1 className='text-color-violeta font-betonga font-bold text-3xl text-center'>Servicios</h1>
      <Carrusel />

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-8'>
        {servicios instanceof Array &&
          servicios.map(
            (servicio) =>
              servicio.nombre !== 'admin' && <CardServicio servicio={servicio} key={servicio._id} />
          )}
      </section>
    </main>
  )
}
