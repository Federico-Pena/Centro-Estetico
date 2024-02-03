import { useRef } from 'react'
import { useObserver } from '../../Hooks/useObserver.jsx'
export const Testimonio = ({ testimonio }) => {
  const { imgURL, titulo, contenido } = testimonio
  const imgRef = useRef()
  const { isVisible } = useObserver(imgRef)
  return (
    <article
      className={`grid gap-8 p-5 border border-gray-500 rounded ${
        isVisible ? 'animate-fadeIn' : ''
      }`}
      ref={imgRef}>
      {isVisible && imgURL ? (
        <>
          <header className='grid gap-4 grid-flow-col items-center'>
            <img
              className='w-12 h-12 rounded-full object-cover'
              src={imgURL}
              alt={`testimonio de paciente ${titulo.split('.')[0]}`}
            />
            <h4 className='font-bold text-xl font-betonga text-color-violeta'>{titulo}</h4>
          </header>
          <p className='contenidoTestimonio'>{contenido}</p>
        </>
      ) : null}
    </article>
  )
}
