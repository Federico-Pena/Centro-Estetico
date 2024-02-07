import { useEffect, useRef, useState } from 'react'
import { CardServicio } from '../Components/CardServicio/CardServicio.jsx'
import { apiRoutes } from '../Api/routes.js'
import { fetcher } from '../Api/Helpers/fetcher.js'
import Carrusel from '../Components/Carrusel/Carrusel.jsx'
import { useUserContext } from '../Hooks/Context/useUserContext.jsx'
import { useToastContext } from '../Hooks/Context/useToastContext.jsx'
import { useLoaderContext } from '../Hooks/Context/useLoaderContext.jsx'
import { FormularioReserva } from '../Components/Formularios/Reserva/FormularioReserva.jsx'
import { OpenInfo } from '../Components/CardServicio/OpenInfo.jsx'

export default function Servicios() {
  const { setMensaje } = useToastContext()
  const { setLoading } = useLoaderContext()
  const { accessToken } = useUserContext()
  const [servicios, setServicios] = useState([])
  const [servicio, setServicio] = useState(null)
  const [openInfo, setOpenInfo] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const [imgSrc, setImgSrc] = useState('')
  const serviciosRef = useRef()

  useEffect(() => {
    try {
      setLoading(true)
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
    } catch (error) {
      setMensaje('Error al obtener los servicios')
    } finally {
      setLoading(false)
    }
  }, [setMensaje, accessToken, setLoading])

  const reservar = (ser) => {
    setServicio(ser)
    setOpenForm(true)
  }
  const abrirMasInfo = (ser, src) => {
    serviciosRef.current.scrollIntoView()
    setImgSrc(src)
    setServicio(ser)
    setOpenInfo(true)
  }
  return (
    <main className='animate-fadeIn grid py-8 px-4 gap-8 ' ref={serviciosRef}>
      <Carrusel />
      {openForm && (
        <FormularioReserva
          observaciones={servicio.nombre}
          cerrarFormulario={() => setOpenForm(false)}
        />
      )}
      {openInfo && !openForm && (
        <OpenInfo
          setOpenInfo={setOpenInfo}
          imgSrc={imgSrc}
          servicio={servicio}
          reservar={reservar}
        />
      )}
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-8'>
        {servicios instanceof Array &&
          !openForm &&
          !openInfo &&
          servicios.map(
            (servicio) =>
              servicio.nombre !== 'admin' && (
                <CardServicio
                  servicio={servicio}
                  key={servicio._id}
                  abrirMasInfo={abrirMasInfo}
                  reservar={reservar}
                  setServicio={setServicio}
                />
              )
          )}
      </section>
    </main>
  )
}
