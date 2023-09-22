import { apiEndPoint } from '../../services/apiConfig'

export const fechasConReservas = async (accessToken, mes) => {
	const url = `${apiEndPoint.reservas.dias}${mes}`
	const options = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken || ''}`,
		},
	}
	try {
		const res = await fetch(url, options)
		if (res.ok) {
			const { fechas, cantidad, totalReservasMes } = await res.json()
			return { fechas, cantidad, totalReservasMes }
		}
	} catch (error) {
		return error
	}
}
