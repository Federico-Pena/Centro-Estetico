import { useRef } from 'react'
import { RUTAS } from '../../constantes.js'
import { useObserver } from '../../Hooks/useObserver.jsx'
import { useLocation } from 'react-router-dom'
import { Button } from '../Botones/Button.jsx'

export const CardServicioContent = ({ reservar, abrirMasInfo, servicio, imgSrc }) => {
  const location = useLocation()
  const rutaServicios = location.pathname === RUTAS.user.servicios
  const imgRef = useRef()
  const { isVisible } = useObserver(imgRef)
  return (
    <article
      className={`${
        isVisible ? 'animate-fadeIn' : ''
      }  mx-auto gap-8 max-w-md flex flex-col w-full border border-black rounded-lg overflow-hidden `}
      key={servicio._id}
      ref={imgRef}>
      {isVisible && <img className='w-full h-80 object-cover' src={imgSrc} alt={servicio.nombre} />}
      <h1 className='font-betonga font-bold text-color-violeta capitalize text-center underline underline-offset-4 text-2xl px-4'>
        {servicio.nombre}
      </h1>
      <p className='px-4 text-balance flex-1'>{servicio.descripcion}</p>
      {servicio.tratamientos &&
        servicio.tratamientos.length > 0 &&
        servicio.tratamientos.map(
          (sesión, i) =>
            i === 0 && (
              <ul key={i} className='flex-1 py-4 px-8 list-disc list-inside grid items-end'>
                <li>{sesión.descripcion}.</li>
                <li>$ {sesión.costoTotal}.</li>
                <li>{sesión.tiempo} minutos.</li>
              </ul>
            )
        )}
      <footer className='grid grid-flow-col p-4 gap-2'>
        <Button
          className={'w-full'}
          tipo={'button'}
          texto={'Ver mas'}
          onClickFunction={() => rutaServicios && abrirMasInfo()}
        />
        <Button
          bgColor={true}
          className={'w-full'}
          tipo={'button'}
          texto={'Reservar'}
          onClickFunction={() => rutaServicios && reservar()}
        />
      </footer>
    </article>
  )
}
