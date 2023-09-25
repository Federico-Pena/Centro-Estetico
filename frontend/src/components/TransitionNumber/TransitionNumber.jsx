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
				ultimoFrame = requestAnimationFrame(animate)
			}
		}
		if (to !== previousTo) {
			previousToRef.current = to
			inicio = null
			ultimoFrame = requestAnimationFrame(animate)
		}
		return () => cancelAnimationFrame(ultimoFrame)
	}, [from, to, duration])
	return <span>{currentValue}</span>
}
