import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { apiEndPoint } from '../services/apiConfig'
import { MensajeToast } from '../context/mensajeContext'
import { ordenarPorFecha } from '../helpers/FechasHoras/ordenarPorFecha'
import { formatFechaParaUser } from '../helpers/Formato/formatFechaParaUser'

export const usePaciente = (id) => {
	const [reservasPaciente, setReservasPaciente] = useState([])
	const [paciente, setPaciente] = useState(null)
	const [loading, setLoading] = useState(false)
	const [nombres, setNombres] = useState([])
	const [pagina, setPagina] = useState(1)
	const [totalPacientes, setTotalPacientes] = useState(null)
	const [totalPaginas, setTotalPaginas] = useState(1)
	const { setMensaje } = useContext(MensajeToast)
	const { accessToken } = useContext(UserContext)

	useEffect(() => {
		const getNombres = async () => {
			setLoading(true)
			const options = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken || ''}`,
				},
			}
			const url = `${apiEndPoint.paciente.nombres}/${pagina}`
			const res = await fetch(url, options)
			const { pacientes, page, totalPages, totalPacientes } = await res.json()
			setTotalPacientes(totalPacientes)
			setTotalPaginas(totalPages)
			setPagina(page)
			if (pacientes.length) {
				setNombres(
					pacientes.sort((a, b) =>
						a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1 : 1
					)
				)
			} else {
				setNombres([])
			}

			setLoading(false)
		}
		pagina && getNombres()
	}, [accessToken, pagina])

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

	const opciones = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken || ''}`,
		},
	}

	const getPaciente = async (nombre) => {
		setPaciente(null)
		setLoading(true)
		if (nombre) {
			const filtrado = nombres.find((paciente) => paciente.nombre === nombre)
			const url = `${apiEndPoint.paciente.porId}${filtrado._id}`
			const res = await fetch(url, opciones)
			const data = await res.json()
			setPaciente(data)
		} else {
			setPaciente(null)
		}
		setLoading(false)
	}
	const actualizarReservaPaciente = (nuevaReserva) => {
		const { reserva } = nuevaReserva
		const mensaje = `Reserva nueva de ${
			reserva.pacienteNombre
		}. El dia ${formatFechaParaUser({
			fecha: reserva.fecha.split('T')[0],
		})} a las ${reserva.hora}`
		const reservasGuardadas = reservasPaciente.filter(
			(res) => res._id !== reserva._id
		)
		setMensaje(mensaje)
		setReservasPaciente(reservasGuardadas.concat(reserva).sort(ordenarPorFecha))
	}
	const editarPaciente = (res) => {
		setPaciente(null)
		const mensaje = `Paciente nuevo ${res.nombre}.`
		setMensaje(mensaje)
		setPaciente(res)
	}
	const eliminarPaciente = (res) => {
		const { mensaje } = res
		setMensaje(mensaje)
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
	const agregarPaciente = (nuevo) => {
		if (nuevo.error) {
			setMensaje(nuevo.mensaje)
			return
		}
		nuevo.totalReservas = 0

		setNombres(
			[...nombres, nuevo].sort((a, b) =>
				a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1 : 1
			)
		)
		const mensaje = `Paciente nuevo ${nuevo.nombre}.`
		setMensaje(mensaje)
	}
	return {
		setPaciente,
		agregarPaciente,
		getPaciente,
		eliminarPaciente,
		actualizarReservaPaciente,
		eliminarReservaPaciente,
		reservasPaciente,
		nombres,
		paciente,
		loading,
		setNombres,
		editarPaciente,
		setReservasPaciente,
		pagina,
		setPagina,
		totalPaginas,
		totalPacientes,
	}
}
