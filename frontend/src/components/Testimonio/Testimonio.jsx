import { useEffect, useRef, useState } from 'react'
import './Testimonio.scss'
export const Testimonio = ({ testimonio }) => {
  const [visible, setVisible] = useState(false)
  const [src, setSrc] = useState('')
  const { imgURL, titulo, contenido } = testimonio
  const imgRef = useRef()
  useEffect(() => {
    const { current } = imgRef
    const observerFunction = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setSrc(imgURL)
          entry.target.classList.add('visible')
        }
      })
    }
    const observador = new IntersectionObserver(observerFunction)
    imgRef.current && observador.observe(current)
    return () => current && observador.unobserve(current)
  }, [visible, imgURL])

  return (
    <article className='testimonio' ref={imgRef}>
      {visible && src ? (
        <>
          <header className='headerTestimonio'>
            <img className='imgTestimonio' src={src} alt={`testimonio de paciente `} />
            <h4 className='tituloTestimonio'>{titulo}</h4>
          </header>
          <p className='contenidoTestimonio'>{contenido}</p>
        </>
      ) : null}
    </article>
  )
}
