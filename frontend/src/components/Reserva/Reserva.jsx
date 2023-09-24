import { useContext, useRef, useState } from 'react'
import './Reserva.scss'
import { BotónSecundario } from '../Botones/BotonSecundario'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { apiEndPoint } from '../../services/apiConfig'
import { UserContext } from '../../context/userContext'
import { obtenerSiguienteEstado } from '../../helpers/Estado/obtenerSiguienteEstado'
import { fetchData } from '../../hooks/fetchData'
import { MensajeToast } from '../../context/mensajeContext'
export const Reserva = ({
	actualizarReserva,
	reserva: res,
	cerrarReserva,
	setForm,
	setModal,
}) => {
	const [reserva, setReserva] = useState(res)
	const reservaRef = useRef()
	const { accessToken } = useContext(UserContext)
	const { setMensaje } = useContext(MensajeToast)

	const cambiarEstadoActual = async () => {
		const estado = obtenerSiguienteEstado(reserva.estado)
		const url = `${apiEndPoint.reservas.editarEstado}${reserva._id}`
		const options = {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ estado }),
		}
		await fetchData(url, options, (datos) => {
			actualizarReserva(datos)
			setMensaje(datos.mensaje)
		})
	}
	const handleCerrarReserva = () => {
		cerrarReserva(reservaRef)
	}
	const handleEditarReserva = () => {
		setForm(reserva)
	}
	return (
		<>
			<article className={`containerReserva`} ref={reservaRef}>
				<div className={`reserva-container-titulo  ${reserva.estado}`}>
					<h3>Detalles de la reserva</h3>
				</div>
				<div className={`reserva-container-cuerpo  ${reserva.estado}`}>
					<ul>
						<li>
							Paciente: <strong>{reserva.pacienteNombre}</strong>
						</li>
						<li>
							Fecha:
							<strong>{formatFechaParaUser(reserva)}</strong>
						</li>
						<li>
							Hora: <strong>{reserva.hora}</strong>
						</li>
						{reserva.pacienteNombre !== 'admin' && (
							<>
								<li>
									Motivo: <strong>{reserva.motivo}</strong>
								</li>
								<li>
									Observaciones: <strong>{reserva.observaciones}</strong>
								</li>
								<li>
									Estado:
									<strong className='strongEstado'>{reserva.estado}</strong>
								</li>
							</>
						)}
					</ul>
					{reserva.pacienteNombre === 'admin' && (
						<ul className='tareasAdmin'>
							<li>Lista:</li>
							{reserva.observaciones.split(',').map((observacion) => (
								<li className='liTarea' key={observacion}>
									<span>{observacion}</span>
								</li>
							))}
							<li>
								Estado:
								<strong className='strongEstado'>{reserva.estado}</strong>
							</li>
						</ul>
					)}
				</div>

				<div className={`reserva-container-botones`}>
					<BotónSecundario
						texto={'Editar'}
						className='btnEditar'
						onClickFunction={handleEditarReserva}
					/>
					<BotónSecundario
						texto={'Cambiar Estado'}
						className={`btnCompletada ${reserva.estado}`}
						onClickFunction={cambiarEstadoActual}
					/>
				</div>
				{cerrarReserva ? (
					<div className={`reserva-container-botones`}>
						<BotónSecundario
							texto={'Cerrar'}
							className='btnCerrarReserva'
							onClickFunction={handleCerrarReserva}
							tipo={'button'}
						/>
						<BotónSecundario
							texto={'Eliminar'}
							className='btnCerrar Cancelada'
							onClickFunction={() => setModal(reserva)}
						/>
					</div>
				) : (
					<div className={`reserva-container-botones`}>
						<BotónSecundario
							texto={'Eliminar'}
							className='btnCerrar'
							onClickFunction={() => setModal(reserva)}
						/>
					</div>
				)}
			</article>
		</>
	)
}
