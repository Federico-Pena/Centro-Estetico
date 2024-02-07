import { useRef } from 'react'
import { RUTAS } from '../../constantes.js'
import { useLocation } from 'react-router-dom'
import { Button } from '../Botones/Button.jsx'

export const OpenInfo = ({ setOpenInfo, imgSrc, reservar, servicio }) => {
  const location = useLocation()
  const openInfoRef = useRef()
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
        backgroundImage: `linear-gradient(#000000b6, #000000b6),url(${imgSrc})`
      }}
      className={`bg-no-repeat bg-cover bg-center animate-fadeIn grid border border-black rounded-lg gap-8 overflow-hidden text-slate-50 m-auto`}>
      <div className='grid gap-8 py-8 max-w-lg mx-auto items-center'>
        <h1 className='font-betonga font-bold capitalize text-center underline underline-offset-4 text-2xl px-4'>
          {servicio.nombre}
        </h1>
        {servicio.descripcionSecundaria &&
          servicio.descripcionSecundaria.split('.').map(
            (párrafo) =>
              párrafo.trim() && (
                <p className={`px-8`} key={párrafo}>
                  {párrafo}.
                </p>
              )
          )}
        {servicio.beneficiosLista.length > 0 && (
          <>
            <h3 className='font-betonga font-bold capitalize text-center underline underline-offset-4 text-xl px-4'>
              {servicio.tituloBeneficios}
            </h3>
            <ul className={`grid gap-8 list-inside list-decimal`}>
              {servicio.beneficiosLista.map((detalle, i) => (
                <li className={`px-8`} key={detalle + i}>
                  {detalle}
                </li>
              ))}
            </ul>
          </>
        )}
        {servicio.tratamientos && servicio.tratamientos.length > 0 && (
          <>
            {servicio.tratamientos.map(
              (sesión, i) =>
                i === 0 && (
                  <ul key={i} className='flex-1 py-4 px-8 list-disc list-inside grid items-end'>
                    <li>{sesión.descripcion}.</li>
                    <li>$ {sesión.costoTotal}.</li>
                    <li>{sesión.tiempo} minutos.</li>
                  </ul>
                )
            )}
          </>
        )}
      </div>
      <footer className='bg-slate-50 grid grid-flow-col gap-2 p-4'>
        <Button
          className={'w-full'}
          tipo={'button'}
          texto={'Volver'}
          onClickFunction={() => rutaServicios && cerrarOpenInfo()}
        />
        <Button
          bgColor={true}
          className={'w-full'}
          tipo={'button'}
          texto={'Reservar'}
          onClickFunction={() => rutaServicios && reservar(servicio)}
        />
      </footer>
    </article>
  )
}
