import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { apiEndPoint } from '../services/apiConfig'
import { MensajeToast } from '../context/mensajeContext'
import { ordenarPorFecha } from '../helpers/FechasHoras/ordenarPorFecha'
import { formatFechaParaUser } from '../helpers/Formato/formatFechaParaUser'
import { formatHoraUser } from '../helpers/Formato/formatHoraUser'
import { fetchData } from './fetchData'

export const usePaciente = (id) => {
	const [reservasPaciente, setReservasPaciente] = useState([])
	const [pacientes, setPacientes] = useState([])
	const [loading, setLoading] = useState(false)
	const { setMensaje } = useContext(MensajeToast)
	const { accessToken } = useContext(UserContext)

	useEffect(() => {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken || ''}`,
			},
		}
		const getReservasPaciente = async () => {
			setLoading(true)
			const url = `${apiEndPoint.reservas.deUnPaciente}${id}`
			try {
				const res = await fetch(url, options)
				if (res.ok) {
					const data = await res.json()
					setReservasPaciente(data.sort(ordenarPorFecha))
				}
			} catch (error) {
				console.log(error)
			}
			setLoading(false)
		}
		id && getReservasPaciente()
	}, [accessToken, id])

	const getPaciente = async (nombre) => {
		const opciones = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken || ''}`,
			},
		}
		setPacientes([])
		setLoading(true)
		if (nombre) {
			const url = `${apiEndPoint.paciente.porNombre}${nombre}`
			const res = await fetch(url, opciones)
			const data = await res.json()
			setPacientes(data)
		} else {
			setPacientes([])
		}
		setLoading(false)
	}
	const actualizarReservaPaciente = (nuevaReserva) => {
		const { reserva } = nuevaReserva
		const mensaje = `Reserva nueva de ${
			reserva.pacienteNombre
		} el dia ${formatFechaParaUser({
			fecha: reserva.horario.horaInicio,
		})} a las  ${formatHoraUser(new Date(reserva.horario.horaInicio))}`
		const reservasGuardadas = reservasPaciente.filter(
			(res) => res._id !== reserva._id
		)
		setMensaje(mensaje)
		setReservasPaciente(reservasGuardadas.concat(reserva).sort(ordenarPorFecha))
	}
	const eliminarReservaPaciente = (res) => {
		const { reserva } = res
		const reservasGuardadas = reservasPaciente.filter(
			(res) => res._id !== reserva._id
		)
		const mensaje = `Reserva eliminada de ${
			reserva.pacienteNombre
		}. El dia ${formatFechaParaUser({
			fecha: reserva.fecha.split('T')[0],
		})} a las ${reserva.hora}`
		setMensaje(mensaje)
		setReservasPaciente(reservasGuardadas.sort(ordenarPorFecha))
	}

	return {
		setPacientes,
		getPaciente,
		actualizarReservaPaciente,
		eliminarReservaPaciente,
		reservasPaciente,
		pacientes,
		loading,
		setReservasPaciente,
	}
}
