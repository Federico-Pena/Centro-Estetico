import { useRef } from 'react'
import { useObserver } from '../../Hooks/useObserver.jsx'
export const Testimonio = ({ testimonio }) => {
  const { imgURL, titulo, contenido } = testimonio
  const imgRef = useRef()
  const { isVisible } = useObserver(imgRef)
  return (
    <article
      className={`grid gap-2 p-5 border border-gray-300 shadow-lg rounded-xl overflow-hidden ${
        isVisible ? 'animate-fadeIn' : ''
      }`}
      ref={imgRef}>
      {isVisible && imgURL ? (
        <>
          <header className='grid gap-4 grid-flow-col items-center mb-2'>
            <img
              className='w-12 h-12 rounded-full object-cover object-center'
              src={imgURL}
              alt={`testimonio de paciente ${titulo.split('.')[0]}`}
            />
            <h4 className='font-bold text-xl font-betonga text-color-violeta '>{titulo}</h4>
          </header>
          {contenido.split('.').map((parr, i) => (
            <p key={i}>{parr}.</p>
          ))}
        </>
      ) : null}
    </article>
  )
}
