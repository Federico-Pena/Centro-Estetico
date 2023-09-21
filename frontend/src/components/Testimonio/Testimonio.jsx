import { useEffect, useRef, useState } from 'react'
import './Testimonio.scss'
export const Testimonio = ({ imgURL }) => {
	const [visible, setVisible] = useState(false)
	const [src, setSrc] = useState('')

	const imgRef = useRef()
	useEffect(() => {
		const { current } = imgRef
		const observerFunction = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true)
					setSrc(imgURL)
				}
			})
		}
		const observador = new IntersectionObserver(observerFunction)
		imgRef.current && observador.observe(current)
		return () => current && observador.unobserve(current)
	}, [visible, imgURL])

	return (
		<div className='testimonio' ref={imgRef}>
			{visible && src ? (
				<img
					className='imgTestimonio'
					src={src}
					alt={`testimonio de paciente `}
				/>
			) : null}
		</div>
	)
}
