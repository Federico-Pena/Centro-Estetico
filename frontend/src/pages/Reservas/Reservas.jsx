import './Reservas.scss'
import { Loader } from '../../components/Loader/Loader'
import { useContext, useState } from 'react'
import { HOY_STRING_BIEN } from '../../constantes'
import { UserContext } from '../../context/userContext'
import ContadorReservas from '../../components/ContadorReservas/ContadorReservas'
import { FechasYHoras } from '../../components/FechasYHoras/FechasYHoras'
import { ContenedorReservas } from '../../components/ContenedorReservas/ContenedorReservas'
import useReservas from '../../hooks/useReservas'
import { ordenarPorFecha } from '../../helpers/FechasHoras/ordenarPorFecha'
import { MensajeToast } from '../../context/mensajeContext'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { Notificacion } from '../../components/Notificacion/Notificacion'
import { LoaderChico } from '../../components/Loader/LoaderChico'

export default function Reservas() {
	const [dia, setDia] = useState(HOY_STRING_BIEN.split('T')[0])
	const [reservadas, setReservadas] = useState([])
	const { loading } = useContext(UserContext)

	const {
		loading: cargando,
		delDia,
		setDelDia,
		loadingSemana,
	} = useReservas(false, dia, '23:59')
	const { setMensaje } = useContext(MensajeToast)

	const actualizarReservas = (datos) => {
		const { reserva } = datos
		const mensaje = `Reserva nueva de ${
			reserva.pacienteNombre
		} el dia ${formatFechaParaUser({ fecha: reserva.fecha })} a las ${
			reserva.hora
		}`
		setMensaje(mensaje)
		const reservasGuardadas = delDia.filter((res) => res._id !== reserva._id)
		setDelDia(reservasGuardadas.concat(reserva).sort(ordenarPorFecha))
	}

	const actualizarBorrada = (datos) => {
		const { reserva } = datos
		const mensaje = `Reserva borrada de ${
			reserva.pacienteNombre
		} el dia ${formatFechaParaUser({ fecha: reserva.fecha })} a las ${
			reserva.hora
		}`
		setMensaje(mensaje)
		const reservasGuardadas = delDia.filter((res) => res._id !== reserva._id)
		setDelDia(reservasGuardadas.sort(ordenarPorFecha))
	}
	const mostrarReservadas = (estado) => {
		if (estado === 'Toda') {
			setReservadas(delDia.sort(ordenarPorFecha))
		} else {
			const filtradas = delDia.filter((res) => res.estado === estado)
			setReservadas(filtradas.sort(ordenarPorFecha))
		}
	}
	const cerrarReserva = (e) => {
		e.current.parentElement.classList.add('animationReservaOut')
		setTimeout(() => {
			e.current.parentElement.classList.remove('animationReservaOut')
			setReservadas([])
		}, 500)
	}
	return (
		<>
			<Notificacion />
			{(loading || cargando) && <Loader />}
			<main className='divPageReservas'>
				{reservadas.length > 0 ? (
					<ContenedorReservas
						reservas={reservadas}
						actualizarReservas={actualizarReservas}
						actualizarReservaEliminada={actualizarBorrada}
						cerrarReserva={cerrarReserva}
					/>
				) : (
					<>
						<ContadorReservas
							reservas={delDia}
							mostrarReservadas={mostrarReservadas}
						/>
						<FechasYHoras
							actualizarReservas={actualizarReservas}
							reservas={delDia}
							setDiaPadre={setDia}
						/>
						{loadingSemana ? <LoaderChico /> : null}
						<ContenedorReservas
							reservas={delDia}
							actualizarReservas={actualizarReservas}
							actualizarReservaEliminada={actualizarBorrada}
							className={'ContenedorReservas'}
						/>
					</>
				)}
			</main>
		</>
	)
}
