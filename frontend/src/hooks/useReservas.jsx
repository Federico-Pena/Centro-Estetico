import { useContext, useEffect, useState } from 'react'
import { ordenarPorFecha } from '../helpers/FechasHoras/ordenarPorFecha'
import { MensajeToast } from '../context/mensajeContext'
import { apiEndPoint } from '../services/apiConfig'
import { UserContext } from '../context/userContext'
import { diasSemanaConHoras } from '../helpers/FechasHoras/diasSemanaConHoras'
import { DIAS_DE_LA_SEMANA, HOY } from '../constantes'
import { fetchData } from './fetchData'

export const actualizarReservas = (reservaNueva, reservas) => {
	const reservasGuardadas = reservas.filter(
		(reserva) => reserva._id !== reservaNueva._id
	)
	return reservasGuardadas.concat(reservaNueva).sort(ordenarPorFecha)
}

/**
 *
 * @param {boolean} calendario
 * Si se encuentra en pagina calendario
 * @param {string} url
 * Si se encuentra en página reservas
 * @returns
 */
const useReservas = (calendario, dia) => {
	const [delDia, setDelDia] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentDate, setCurrentDate] = useState(HOY)
	const [reservasSemanales, setReservasSemanales] = useState([])
	const [loadingSemana, setLoadingSemana] = useState(false)
	const { setMensaje, setError } = useContext(MensajeToast)
	const { accessToken } = useContext(UserContext)
	const diasSemana = diasSemanaConHoras(currentDate, reservasSemanales)
	useEffect(() => {
		const getReservas = async () => {
			setLoadingSemana(true)
			let dia = currentDate.toISOString().split('T')[0]
			const options = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken || ''}`,
				},
			}
			try {
				const url = `${apiEndPoint.reservas.deLaSemana}${dia}`
				await fetchData(url, options, (res) => {
					if (res.error) {
						setError(res.error)
						return
					} else {
						setReservasSemanales(res.reservas)
					}
				})
			} catch (error) {
				console.log(error)
			}
			setLoading(false)
			setLoadingSemana(false)
		}
		calendario && getReservas()
	}, [currentDate, accessToken, calendario, setError])

	useEffect(() => {
		const getReservas = async () => {
			setLoadingSemana(true)
			const options = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken || ''}`,
				},
			}
			try {
				const url = `${apiEndPoint.reservas.deUnDia}${dia}`
				await fetchData(url, options, (res) => {
					setDelDia(res.data)
				})
			} catch (err) {
				setMensaje(err.message)
			}
			setLoading(false)
			setLoadingSemana(false)
		}
		dia && !calendario && getReservas()
	}, [dia, accessToken, calendario, setMensaje])

	const semanaAnterior = () => {
		setLoading(true)
		setLoadingSemana(true)
		const newDate = new Date(currentDate)
		newDate.setDate(newDate.getDate() - DIAS_DE_LA_SEMANA)
		setCurrentDate(newDate)
		setLoading(false)
		setLoadingSemana(false)
	}
	const semanaSiguiente = () => {
		setLoading(true)
		setLoadingSemana(true)
		const newDate = new Date(currentDate)
		newDate.setDate(newDate.getDate() + DIAS_DE_LA_SEMANA)
		setCurrentDate(newDate)
		setLoading(false)
		setLoadingSemana(false)
	}

	return {
		delDia,
		loading,
		reservasSemanales,
		diasSemana,
		loadingSemana,
		setReservasSemanales,
		semanaAnterior,
		semanaSiguiente,
		setDelDia,
	}
}

export default useReservas
