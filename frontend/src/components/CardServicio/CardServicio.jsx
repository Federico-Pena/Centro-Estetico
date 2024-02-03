import { useRef, useState } from 'react'
import { FormularioReserva } from '../Formularios/Reserva/FormularioReserva.jsx'
import { useObserver } from '../../Hooks/useObserver.jsx'
export const CardServicio = ({ servicio, className }) => {
  const [openInfo, setOpeninfo] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const imgRef = useRef()
  const openInfoRef = useRef()
  const { isVisible } = useObserver(imgRef)
  const imgSrc =
    servicio.imgPreview ||
    servicio.imagen?.secure_url ||
    'https://res.cloudinary.com/fotoscloudinary/image/upload/v1698805202/Portfolio/Centro%20Est%C3%A9tico/Servicios/dil9yusbug9ccrmxtgtb.png'

  const cerrarForm = () => {
    setOpenForm(false)
  }
  const cerrarOpenInfo = () => {
    openInfoRef.current.classList.add('animate-toastOut')
  }
  if (!servicio || Object.keys(servicio).length === 0) {
    return null
  }
  return (
    <>
      {openForm && (
        <FormularioReserva observaciones={servicio.nombre} cerrarFormulario={cerrarForm} />
      )}
      {openInfo && (
        <article
          id={'openInfo'}
          onAnimationEnd={(e) => {
            if (e.target.id === 'openInfo' && e.animationName === 'toastOut') {
              setOpeninfo(false)
            }
          }}
          ref={openInfoRef}
          style={{
            backgroundImage: `linear-gradient(#000000b6, #000000b6),url(${imgSrc})`
          }}
          className={`${
            className ? className : ''
          } bg-no-repeat bg-cover bg-center animate-toastIn fixed overflow-auto inset-0 z-30 grid grid-rows-[1fr,auto] text-slate-50`}>
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
          <footer className='bg-slate-50 grid grid-flow-col place-content-center gap-8 p-4'>
            <button
              className='w-full font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
              onClick={cerrarOpenInfo}>
              Volver
            </button>
            <button
              className='font-bold text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50'
              onClick={() => setOpenForm(true)}>
              Reservar
            </button>
          </footer>
        </article>
      )}
      <article
        className={`${
          isVisible ? 'animate-fadeIn' : ''
        } flex flex-col border border-black rounded-lg overflow-hidden gap-8 ${
          className ? className : ''
        }`}
        key={servicio._id}
        ref={imgRef}>
        {isVisible ? (
          <img className='w-full h-80 object-cover' src={imgSrc} alt={servicio.nombre} />
        ) : null}
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
        <footer className='grid grid-flow-col p-8 gap-4'>
          <button
            className='font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
            onClick={() => setOpeninfo(true)}>
            Mas info
          </button>
          <button
            className='font-bold text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50'
            onClick={() => setOpenForm(true)}>
            Reservar
          </button>
        </footer>
      </article>
    </>
  )
}
