import { useEffect, useRef } from 'react'
import { RUTAS } from '../../constantes.js'
import { useLocation } from 'react-router-dom'
import { Button } from '../Botones/Button.jsx'
import { ListTratamientos } from './ListTratamientos.jsx'

export const OpenInfo = ({ setOpenInfo, imgSrc, reservar, servicio }) => {
  const location = useLocation()
  const openInfoRef = useRef()
  useEffect(() => {
    openInfoRef.current.scrollIntoView(true)
  }, [openInfoRef])

  const rutaServicios = location.pathname === RUTAS.user.servicios
  const cerrarOpenInfo = () => {
    openInfoRef.current.classList.add('animate-fadeOut')
  }
  return (
    <article
      id={'openInfo'}
      onAnimationEnd={(e) => {
        if (e.target.id === 'openInfo' && e.animationName === 'fadeOut') {
          setOpenInfo(false)
        }
      }}
      ref={openInfoRef}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),url(${imgSrc})`
      }}
      className='bg-no-repeat bg-cover bg-center border border-gray-300 shadow-lg rounded-lg  overflow-hidden text-white m-auto grid  pt-8 max-w-lg mx-auto items-center'>
      <h1 className='font-betonga text-2xl font-semibold capitalize text-center px-4'>
        {servicio.nombre}
      </h1>
      <section className='grid gap-2 mt-8'>
        {servicio.descripcionSecundaria &&
          servicio.descripcionSecundaria.split('.').map(
            (párrafo, index) =>
              párrafo.trim() && (
                <p className='px-8 text-pretty' key={index}>
                  {párrafo}.
                </p>
              )
          )}
      </section>
      {servicio.beneficiosLista.length > 0 && (
        <section className='grid gap-4 mt-8'>
          <h3 className='text-xl font-semibold capitalize text-center px-4'>
            {servicio.tituloBeneficios}
          </h3>
          <ul className='grid gap-2 px-8'>
            {servicio.beneficiosLista.map((detalle, i) => (
              <li key={i} className='text-pretty'>
                {detalle}
              </li>
            ))}
          </ul>
        </section>
      )}
      {servicio.tratamientos && servicio.tratamientos.length > 0 && (
        <ListTratamientos servicio={servicio} />
      )}
      <footer className='bg-white grid grid-cols-2 gap-2 p-4'>
        <Button
          className='w-full font-semibold'
          tipo='button'
          texto='Volver'
          onClickFunction={() => rutaServicios && cerrarOpenInfo()}
        />
        <Button
          bgColor={true}
          className='w-full font-semibold'
          tipo='button'
          texto='Reservar'
          onClickFunction={() => rutaServicios && reservar(servicio)}
        />
      </footer>
    </article>
  )
}
