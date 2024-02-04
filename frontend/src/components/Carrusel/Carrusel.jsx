import { useState } from 'react'
import { ArrowDown } from '../Icons/Icons'
import { FormularioReserva } from '../Formularios/Reserva/FormularioReserva.jsx'
import { useCarrusel } from './useCarrusel.jsx'

const Carrusel = () => {
  const [openForm, setOpenForm] = useState(false)
  const [observacionReserva, setObservacionReserva] = useState('')
  const { nextSlide, prevSlide, promos, currentIndex } = useCarrusel()

  const handleReservar = (promo) => {
    const observacion = `${promo.servicio.nombre}\r ${promo.descripcion}`
    setObservacionReserva(observacion)
    setOpenForm(true)
  }
  if (!(promos instanceof Array)) {
    return null
  }
  return (
    promos.length > 0 && (
      <>
        {openForm && (
          <FormularioReserva
            observaciones={observacionReserva}
            cerrarFormulario={() => setOpenForm(false)}
          />
        )}
        <section className='relative flex justify-center max-w-4xl max-h-[500px] h-[60vh] m-auto mb-8'>
          {promos.length > 1 && (
            <span
              className='rounded-md cursor-pointer text-4xl absolute z-10 left-0 top-1/2 flex justify-center items-center rotate-90 transition-transform px-4 bg-[#00000025] hover:bg-[#0000003f] hover:scale-95'
              onClick={prevSlide}>
              <ArrowDown />
            </span>
          )}
          <div className='overflow-hidden flex rounded-lg border border-slate-500'>
            {promos.map((promocion) => (
              <figure
                key={promocion._id}
                className='transition-transform duration-500 relative flex-[0_0_100%]'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                <img
                  className='object-cover w-full h-full object-center bg-slate-50'
                  src={promocion.imagen?.secure_url || promocion.servicio.imagen?.secure_url}
                  alt={promocion.nombre}
                />
                <button
                  className='absolute bottom-4 left-1/2 -translate-x-1/2 font-bold text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-transparent'
                  onClick={() => handleReservar(promocion)}>
                  Reservar
                </button>
              </figure>
            ))}
          </div>
          {promos.length > 1 && (
            <span
              className='rounded-md cursor-pointer text-4xl absolute z-10 right-0 top-1/2 flex justify-center items-center -rotate-90 transition-transform px-4 bg-[#00000025] hover:bg-[#0000003f] hover:scale-95'
              onClick={nextSlide}>
              <ArrowDown />
            </span>
          )}
          <div className=' overflow-hidden absolute rounded-xl px-4 py-2 bg-[#00000025] -bottom-10 flex justify-center gap-x-4 m-auto'>
            {Array.from(promos).map((promo, i) => (
              <span
                className={`${
                  i === currentIndex ? 'bg-color-violeta translate-y-0' : 'translate-y-8'
                } rounded-full w-4 h-4 transition duration-500`}
                key={i}></span>
            ))}
          </div>
        </section>
      </>
    )
  )
}

export default Carrusel
