import { useEffect, useState, useRef } from 'react'
export const TransitionNumber = ({ from, to, duration = 1000 }) => {
	const [currentValue, setCurrentValue] = useState(from)
	const previousToRef = useRef(to)

	useEffect(() => {
		let inicio
		let ultimoFrame
		const previousTo = previousToRef.current

		const animate = (timestamp) => {
			if (!inicio) inicio = timestamp
			const progreso = timestamp - inicio
			const porcentaje = Math.min(1, progreso / duration)
			const nuevoValor = Math.floor(previousTo + (to - previousTo) * porcentaje)
			setCurrentValue(nuevoValor)
			if (porcentaje < 1) {
				// Continuar la animación
				ultimoFrame = requestAnimationFrame(animate)
			}
		}
		// Si el valor "to" cambia, actualizar el valor anterior y reiniciar la animación
		if (to !== previousTo) {
			previousToRef.current = to
			inicio = null // Reiniciar el tiempo de inicio
			ultimoFrame = requestAnimationFrame(animate) // Reiniciar la animación
		}
		return () => cancelAnimationFrame(ultimoFrame)
	}, [from, to, duration])
	return <span>{currentValue}</span>
}
