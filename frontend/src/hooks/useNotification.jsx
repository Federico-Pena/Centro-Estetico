import { useContext, useEffect, useState } from 'react'
import { HOY } from '../constantes'
import { apiEndPoint } from '../services/apiConfig'
import { fetchData } from './fetchData'
import { UserContext } from '../context/userContext'

export const useNotification = () => {
	const [reservasSemanales, setReservasSemanales] = useState([])
	const { accessToken } = useContext(UserContext)

	useEffect(() => {
		const getReservas = async () => {
			let dia = HOY.toISOString().split('T')[0]
			const options = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken || ''}`,
				},
			}
			try {
				const url = `${apiEndPoint.publicas.fechasHorasReservadasDeLaSemana}${dia}`
				await fetchData(url, options, (res) => {
					setReservasSemanales(res.reservas)
				})
			} catch (error) {
				console.log(error)
			}
		}
		accessToken && getReservas()
	}, [accessToken])
	return { reservasSemanales }
}
