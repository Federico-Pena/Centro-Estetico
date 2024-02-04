import { useContext, useEffect, useState } from 'react'
import { ToastContext } from '../../Context/Toast/mensajeContext.jsx'

export const Toast = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [secondsVisible, setSecondsVisible] = useState(0)
  const { mensaje, setMensaje } = useContext(ToastContext)

  useEffect(() => {
    if (mensaje) {
      setIsVisible(true)
      setSecondsVisible(0)
    }
  }, [mensaje])

  useEffect(() => {
    const intervalId =
      (isVisible || secondsVisible) &&
      setInterval(() => {
        setSecondsVisible((prevSeconds) => prevSeconds + 0.5)
      }, 500)

    if (secondsVisible >= 5) {
      setIsVisible(false)
    }
    if (secondsVisible > 5.5) {
      setSecondsVisible(0)
      clearInterval(intervalId)
      setMensaje()
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [secondsVisible, isVisible, setMensaje])
  const progressWidth = 100 - (secondsVisible / 4.7) * 100

  return (
    mensaje && (
      <div
        className={`grid bg-color-logo min-h-14 border-2 rounded-md max-w-xs fixed z-[999] bottom-1 left-1 ${
          isVisible && mensaje ? 'animate-toastIn' : 'animate-toastOut'
        }`}>
        <div className='relative grid place-content-center'>
          <p className='capitalize p-2 text-center text-balance'>{mensaje}</p>
          <div
            style={{
              transition: 'width 0.5s linear',
              width: `${progressWidth < 0 ? 0 : progressWidth}%`
            }}
            className={`absolute left-0 bottom-0 h-1 bg-cyan-500`}></div>
        </div>
      </div>
    )
  )
}
