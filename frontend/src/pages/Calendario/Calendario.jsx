import { useContext, useState } from 'react'
import './Calendario.scss'
import { MensajeToast } from '../../context/mensajeContext'
import { Loader } from '../../components/Loader/Loader'
import { BotónSecundario } from '../../components/Botones/BotonSecundario'
import { FormularioReservaAdmin } from '../../components/Formularios/Admin/FormularioReservaAdmin'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { ESTADOS_RESERVAS, HOY, HOY_STRING_BIEN } from '../../constantes'
import { LoaderChico } from '../../components/Loader/LoaderChico'
import { ordenarPorFecha } from '../../helpers/FechasHoras/ordenarPorFecha'
import { ContenedorReservas } from '../../components/ContenedorReservas/ContenedorReservas'
import ContadorReservas from '../../components/ContadorReservas/ContadorReservas'
import { encontrarHorasReservadas } from '../../helpers/FechasHoras/encontrarHorasDisponibles'
import { compararFechas } from '../../helpers/FechasHoras/compararFechas'
import { formatHoraUser } from '../../helpers/Formato/formatHoraUser'
import { useCalendario } from '../../hooks/useCalendario'
import { UserContext } from '../../context/userContext'

function Calendario() {
	const [fechaReserva, setFechaReserva] = useState(
		HOY_STRING_BIEN.split('T')[0]
	)
	const [horaReserva, setHoraReserva] = useState(HOY_STRING_BIEN.split('T')[1])
	const [openFormulario, setOpenFormulario] = useState(false)
	const [nombreAdmin, setNombreAdmin] = useState('')
	const [reservadas, setReservadas] = useState([])
	const { setMensaje } = useContext(MensajeToast)
	const { loading: cargando } = useContext(UserContext)

	const {
		semanaAnterior,
		semanaSiguiente,
		reservasSemanales,
		setReservasSemanales,
		loading,
		diasSemana,
	} = useCalendario(fechaReserva)
	const actualizarReservaNueva = (res) => {
		const { reserva } = res
		const mensaje = `Reserva nueva de ${
			reserva.pacienteNombre
		} el dia ${formatFechaParaUser({
			fecha: reserva.horario.horaInicio,
		})} a las ${formatHoraUser(new Date(reserva.horario.horaInicio))}`
		setMensaje(mensaje)
		const reservasGuardadas = reservasSemanales.filter(
			(res) => res._id !== reserva._id
		)
		const reservasdasGuardadas = reservadas.filter(
			(res) => res._id !== reserva._id
		)
		setReservadas([...reservasdasGuardadas, reserva])
		setReservasSemanales([...reservasGuardadas, reserva])
	}
	const reservarHora = (e) => {
		setReservadas([])
		setNombreAdmin('')
		const horaSeleccionada = e.target.getAttribute('data-fecha')
		const fechaISOString = new Date(horaSeleccionada).toISOString()
		const [fecha] = fechaISOString.split('T')
		setFechaReserva(fecha)
		setHoraReserva(fechaISOString)
		const comprobación = compararFechas(
			new Date(horaSeleccionada),
			reservasSemanales
		)
		if (e.target.className.includes('paraReservaAdmin')) {
			setNombreAdmin('admin')
		}
		if (comprobación.estado) {
			setReservadas(comprobación.reservadas)
			if (comprobación.estado === ESTADOS_RESERVAS.cancelada) {
				setOpenFormulario(true)
			}
			return
		}
		if (!comprobación.proximaHoraNoDisponible) {
			setOpenFormulario(true)
			return
		} else {
			if (comprobación.proximaHoraNoDisponible === ESTADOS_RESERVAS.cancelada) {
				setOpenFormulario(true)
			} else {
				const mensaje = 'Hora no disponible para reservar'
				setMensaje(mensaje)
			}
		}
	}
	const cerrarReserva = (e) => {
		e.current.parentElement.classList.add('animationReservaOut')
		setTimeout(() => {
			e.current.parentElement.remove('animationReservaOut')

			setReservadas([])
		}, 500)
	}
	const actualizarBorrada = (datos) => {
		const { reserva } = datos
		if (reserva) {
			const mensaje = `Reserva borrada de ${
				reserva.pacienteNombre
			} el dia ${formatFechaParaUser({
				fecha: reserva.horario.horaInicio,
			})} a las  ${formatHoraUser(new Date(reserva.horario.horaInicio))}`
			setMensaje(mensaje)
			const reservasGuardadas = reservasSemanales.filter(
				(res) => res._id !== reserva._id
			)
			setReservasSemanales(reservasGuardadas.sort(ordenarPorFecha))
			setReservadas([])
		}
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
			{cargando && <Loader />}
			{reservadas?.length > 0 ? (
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

			{openFormulario && reservadas?.length === 0 && (
				<FormularioReservaAdmin
					reserva={{
						pacienteNombre: nombreAdmin,
						fecha: horaReserva,
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
					<h1>Hoy {formatFechaParaUser({ fecha: HOY_STRING_BIEN })}</h1>
					<div className='containerBotones'>
						<BotónSecundario
							onClickFunction={semanaAnterior}
							texto={'Anterior'}
						/>
						{loading && <LoaderChico />}
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
												fecha: dia.dia,
											})}
										</h3>
										<ul className='HorasCalendario'>
											{dia.horas.map((hora, i) => {
												const horaReservada = encontrarHorasReservadas(
													reservasSemanales,
													diasSemana
												).find(
													(reservadaHora) =>
														reservadaHora.hora.toISOString() ===
														hora.toISOString()
												)
												const claseHora =
													i == 0 || i == 1
														? `paraReservaAdmin ${horaReservada?.estado || ''}`
														: horaReservada &&
														  horaReservada.nombreReserva === 'admin' &&
														  (horaReservada.estado === ESTADOS_RESERVAS.pago ||
																horaReservada.estado ===
																	ESTADOS_RESERVAS.pendiente)
														? `paraReservaAdmin ${horaReservada.estado}`
														: horaReservada
														? `${horaReservada.estado}`
														: ''
												return (
													<li
														key={hora.toISOString()}
														data-fecha={hora}
														onClick={reservarHora}
														className={claseHora}>
														{formatHoraUser(hora)}
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
						{loading && <LoaderChico />}
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
