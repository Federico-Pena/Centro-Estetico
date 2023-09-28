import { useContext, useEffect, useState } from 'react'
import './Toast.scss'
import { MensajeToast } from '../../context/mensajeContext'

export const Toast = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [secondsVisible, setSecondsVisible] = useState(0)
	const { mensaje, setMensaje, error, setError } = useContext(MensajeToast)

	useEffect(() => {
		if (mensaje || error) {
			setIsVisible(true)
			setSecondsVisible(0)
		}
	}, [mensaje, error])

	useEffect(() => {
		const intervalId =
			(isVisible || secondsVisible) &&
			setInterval(() => {
				setSecondsVisible((prevSeconds) => prevSeconds + 0.5)
			}, 500)

		if (secondsVisible >= 3) {
			setIsVisible(false)
		}
		if (secondsVisible > 3.5) {
			setSecondsVisible(0)
			clearInterval(intervalId)
			setMensaje()
			setError()
		}
		return () => {
			clearInterval(intervalId)
		}
	}, [secondsVisible, isVisible, setMensaje, setError])

	return (
		<div
			className={`${
				isVisible && (mensaje || error) ? 'toast-show' : 'toast-hide'
			}`}>
			<div className={`my-toast `}>
				<div className='toastContent'>
					{error &&
						error.split('.').map((oración) => <p key={oración}>{oración}</p>)}
					{mensaje && <p>{mensaje}</p>}
				</div>
			</div>
		</div>
	)
}
