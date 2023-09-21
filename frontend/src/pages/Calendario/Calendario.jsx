import { useContext, useRef, useState } from 'react'
import './Calendario.scss'
import { MensajeToast } from '../../context/mensajeContext'
import { compararFechas } from '../../helpers/FechasHoras/compararFechas'
import { comprobarHoras } from '../../helpers/FechasHoras/comprobarHoras'
import { Loader } from '../../components/Loader/Loader'
import { BotónSecundario } from '../../components/Botones/BotonSecundario'
import { FormularioReservaAdmin } from '../../components/Formularios/Admin/FormularioReservaAdmin'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { ESTADOS_RESERVAS, HOY, HOY_STRING_BIEN } from '../../constantes'
import { LoaderChico } from '../../components/Loader/LoaderChico'
import useReservas from '../../hooks/useReservas'
import { ordenarPorFecha } from '../../helpers/FechasHoras/ordenarPorFecha'
import { ContenedorReservas } from '../../components/ContenedorReservas/ContenedorReservas'
import ContadorReservas from '../../components/ContadorReservas/ContadorReservas'
import { Notificacion } from '../../components/Notificacion/Notificacion'

function Calendario() {
	const [fechaReserva, setFechaReserva] = useState('')
	const [horaReserva, setHoraReserva] = useState('')
	const [openFormulario, setOpenFormulario] = useState(false)
	const [nombreAdmin, setNombreAdmin] = useState('')
	const [reservadas, setReservadas] = useState([])
	const { setMensaje } = useContext(MensajeToast)
	const {
		loadingSemana,
		diasSemana,
		reservasSemanales,
		loading,
		semanaAnterior,
		semanaSiguiente,
		setReservasSemanales,
	} = useReservas(true, fechaReserva)

	const actualizarReservaNueva = (res) => {
		const { reserva } = res
		const mensaje = `Reserva nueva de ${
			reserva.pacienteNombre
		} el dia ${formatFechaParaUser({ fecha: reserva.fecha })} a las ${
			reserva.hora
		}`
		setMensaje(mensaje)
		const reservasGuardadas = reservasSemanales.filter(
			(res) => res._id !== reserva._id
		)
		setReservasSemanales([...reservasGuardadas, reserva])
	}
	const reservarHora = (e) => {
		setReservadas([])
		setNombreAdmin('')
		const horaSeleccionada = e.target
		if (horaSeleccionada.className.includes('paraReservaAdmin')) {
			setNombreAdmin('admin')
		}

		const id = horaSeleccionada.id
		const [fecha, hora] = id.split(' ')
		const desdeCompararFechas = compararFechas(new Date(id), reservasSemanales)
		const comprobar = comprobarHoras(e, id.split(' ')[0], reservasSemanales)

		if (horaSeleccionada.className.includes(ESTADOS_RESERVAS.cancelada)) {
			setReservadas(desdeCompararFechas.reservadas)
			setOpenFormulario(true)
			return
		}
		if (comprobar === false) {
			setReservadas(desdeCompararFechas.reservadas)
			if (desdeCompararFechas.reservadas.length === 0) {
				let mensaje = 'Hora no disponible para hacer reserva'
				setMensaje(mensaje)
			}
			return
		} else {
			setOpenFormulario(true)
			setFechaReserva(fecha)
			setHoraReserva(hora)
		}
	}
	const cerrarReserva = (e) => {
		e.current.parentElement.classList.add('animationReservaOut')
		setTimeout(() => {
			e.current.parentElement.remove('animationReservaOut')

			setReservadas([])
		}, 500)
	}

	const clase = (index, hora) => {
		return index === 0 || index === 1
			? `paraReservaAdmin ${hora.estado || ''}`
			: hora.estado
			? hora.reservaAdmin
				? `paraReservaAdmin ${
						hora.paga
							? ESTADOS_RESERVAS.pago
							: hora.pendiente
							? ESTADOS_RESERVAS.pendiente
							: hora.cancelada
							? ESTADOS_RESERVAS.cancelada
							: ''
				  }`
				: hora.estado
			: ''
	}
	const actualizarBorrada = (datos) => {
		const { reserva } = datos
		const mensaje = `Reserva borrada de ${
			reserva.pacienteNombre
		} el dia ${formatFechaParaUser({ fecha: reserva.fecha })} a las ${
			reserva.hora
		}`
		setMensaje(mensaje)
		const reservasGuardadas = reservasSemanales.filter(
			(res) => res._id !== reserva._id
		)
		setReservasSemanales(reservasGuardadas.sort(ordenarPorFecha))
		setReservadas([])
	}

	const mostrarReservadas = (estado) => {
		if (estado === 'Toda') {
			setReservadas(reservasSemanales.sort(ordenarPorFecha))
		} else {
			const filtradas = reservasSemanales.filter((res) => res.estado === estado)
			setReservadas(filtradas.sort(ordenarPorFecha))
		}
	}

	return (
		<>
			<Notificacion />
			{loading && <Loader />}
			{reservadas.length > 0 ? (
				<div className={reservadas.length ? `divReservaCalendario` : ''}>
					<ContenedorReservas
						cerrarReserva={cerrarReserva}
						reservas={reservadas}
						actualizarReservaEliminada={actualizarBorrada}
						actualizarReservas={(res) => {
							actualizarReservaNueva(res)
						}}
					/>
				</div>
			) : null}

			{openFormulario && !reservadas.length && (
				<FormularioReservaAdmin
					reserva={{
						pacienteNombre: nombreAdmin,
						fecha: fechaReserva,
						hora: horaReserva,
					}}
					actualizarReserva={(e) => {
						actualizarReservaNueva(e)
					}}
					setForm={() => {
						setOpenFormulario(false)
					}}
				/>
			)}
			<main className='containerCalendario'>
				<>
					<ContadorReservas
						reservas={reservasSemanales}
						mostrarReservadas={mostrarReservadas}
					/>
					<h1>
						Hoy {formatFechaParaUser({ fecha: HOY_STRING_BIEN.split('T')[0] })}
					</h1>
					<div className='containerBotones'>
						<BotónSecundario
							onClickFunction={semanaAnterior}
							texto={'Anterior'}
						/>
						{loadingSemana && <LoaderChico />}
						<BotónSecundario
							onClickFunction={semanaSiguiente}
							texto={'Siguiente'}
						/>
					</div>
					<div className='containerFechas'>
						{diasSemana.map((dia) => {
							return (
								!(dia.dia.getDay() === 0) && (
									<div key={dia.dia} className={`dias`}>
										<h3
											className={`${
												dia.dia.getDate() === HOY.getDate() &&
												dia.dia.getDay() === HOY.getDay()
													? 'esHoy'
													: ''
											}`}>
											{formatFechaParaUser({
												fecha: dia.dia.setUTCHours(dia.dia.getUTCHours() - 3),
											})}
										</h3>
										<ul className='HorasCalendario'>
											{dia.horaID.map((hora, i) => {
												return (
													<li
														onClick={reservarHora}
														className={clase(i, hora)}
														key={hora.id}
														id={hora.id}>
														{hora.id.split(' ')[1]}
													</li>
												)
											})}
										</ul>
									</div>
								)
							)
						})}
					</div>
					<div className='containerBotonesAbajo'>
						<BotónSecundario
							onClickFunction={semanaAnterior}
							texto={'Anterior'}
						/>
						{loadingSemana && <LoaderChico />}
						<BotónSecundario
							onClickFunction={semanaSiguiente}
							texto={'Siguiente'}
						/>
					</div>
				</>
			</main>
		</>
	)
}

export default Calendario
