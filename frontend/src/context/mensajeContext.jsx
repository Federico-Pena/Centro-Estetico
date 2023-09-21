import { createContext, useState } from 'react'

export const MensajeToast = createContext({})
export const MensajeProvider = ({ children }) => {
	const [mensaje, setMensaje] = useState('')
	const [error, setError] = useState('')

	return (
		<MensajeToast.Provider value={{ mensaje, setMensaje, error, setError }}>
			{children}
		</MensajeToast.Provider>
	)
}
