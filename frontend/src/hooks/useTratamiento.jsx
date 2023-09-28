import { useContext, useEffect, useState } from 'react'
import { fetchData } from './fetchData'
import { UserContext } from '../context/userContext'
import { apiEndPoint } from '../services/apiConfig'

export const useTratamiento = () => {
	const [tratamientos, setTratamientos] = useState([])
	const { accessToken } = useContext(UserContext)

	useEffect(() => {
		const getTratamientos = async () => {
			const options = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken || ''}`,
				},
			}
			const url = apiEndPoint.tratamientos.todos
			await fetchData(url, options, (res) => {
				setTratamientos(res.tratamientos)
			})
		}
		getTratamientos()
	}, [accessToken])
	return { tratamientos }
}
