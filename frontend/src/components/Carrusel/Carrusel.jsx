import { useState, useRef } from 'react'
import { ArrowDown } from '../Icons/Icons'
import { FormularioReserva } from '../Formularios/Reserva/FormularioReserva.jsx'
import { useCarrusel } from './useCarrusel.jsx'
import { CarruselImagen } from './CarruselImagen.jsx'

const Carrusel = () => {
  const [openForm, setOpenForm] = useState(false)
  const [observacionReserva, setObservacionReserva] = useState('')
  const { nextSlide, prevSlide, promos, currentIndex } = useCarrusel()
  const touchStartX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    touchStartX.current === null
  }
  const handleTouchMove = (e) => {
    if (touchStartX.current === null) {
      return
    }
    const touchEndX = e.touches[0].clientX
    const deltaX = touchStartX.current - touchEndX
    if (deltaX > 50) {
      nextSlide()
    } else if (deltaX < -50) {
      prevSlide()
    }
  }

  const handleReservar = (promo) => {
    const observacion = `${promo.servicio.nombre} - ${promo.descripcion}`
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
        <section
          className='relative flex justify-center max-w-4xl m-auto mb-8'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {promos.length > 1 && (
            <span
              className='rounded-md cursor-pointer text-4xl absolute z-10 left-0 top-1/2 flex justify-center items-center rotate-90 transition-transform px-4 bg-[#00000025] hover:bg-[#0000003f] hover:scale-95'
              onClick={prevSlide}>
              <ArrowDown />
            </span>
          )}
          <CarruselImagen
            currentIndex={currentIndex}
            handleReservar={handleReservar}
            promos={promos}
          />
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
