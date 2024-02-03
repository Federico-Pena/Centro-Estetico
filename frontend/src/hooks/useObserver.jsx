import { useEffect, useState } from 'react'

export const useObserver = (ref) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const { current } = ref
    const observerFunction = (entries) => {
      entries.forEach((entry) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }
    const observador = new IntersectionObserver(observerFunction)
    ref.current && observador.observe(current)
    return () => current && observador.unobserve(current)
  }, [isVisible, ref])
  return { isVisible }
}
