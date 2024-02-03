import { useEffect, useState, useRef } from 'react'

export const TransitionNumber = ({ from, to, duration = 1000, className }) => {
  const [currentValue, setCurrentValue] = useState(from)
  const previousToRef = useRef(to)

  useEffect(() => {
    let inicio
    let ultimoFrame
    const previousTo = previousToRef.current
    const animate = (timestamp) => {
      if (!inicio) inicio = timestamp
      const progreso = timestamp - inicio
      const porcentaje = duration > 0 ? Math.min(1, progreso / duration) : 1
      const nuevoValor = Math.floor(previousTo + (to - previousTo) * porcentaje)
      setCurrentValue(isNaN(nuevoValor) ? 0 : nuevoValor)
      if (porcentaje < 1) {
        ultimoFrame = requestAnimationFrame(animate)
      }
    }
    if (to !== previousTo) {
      previousToRef.current = to
      inicio = null
      ultimoFrame = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(ultimoFrame)
    }
  }, [from, to, duration])

  return <span className={className}>{currentValue || to}</span>
}
