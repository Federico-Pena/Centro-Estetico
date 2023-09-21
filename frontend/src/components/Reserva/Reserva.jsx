import { useContext, useRef, useState } from 'react'
import './Reserva.scss'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal'
import { BotónSecundario } from '../Botones/BotonSecundario'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { apiEndPoint } from '../../services/apiConfig'
import { UserContext } from '../../context/userContext'
import { obtenerSiguienteEstado } from '../../helpers/Estado/obtenerSiguienteEstado'
import { FormularioReservaAdmin } from '../Formularios/Admin/FormularioReservaAdmin'
import { fetchData } from '../../hooks/fetchData'
import { MensajeToast } from '../../context/mensajeContext'
export const Reserva = ({
	actualizarReservaEliminada,
	actualizarReserva,
	reserva: res,
	cerrarReserva,
}) => {
	const [showModal, setShowModal] = useState(false)
	const [openForm, setOpenForm] = useState(false)
	const [reserva, setReserva] = useState(res)
	const reservaRef = useRef()
	const { accessToken } = useContext(UserContext)
	const { setMensaje } = useContext(MensajeToast)
	const handleConfirmModal = async () => {
		const url = `${apiEndPoint.reservas.eliminar}${reserva._id}`
		const options = {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${accessToken}`,
			},
		}
		await fetchData(url, options, actualizarReservaEliminada)

		setShowModal(false)
	}

	const handleCancelModal = () => {
		setShowModal(false)
	}

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
			setReserva(datos.reserva)
			setMensaje(datos.mensaje)
		})
	}
	const handleCerrarReserva = () => {
		cerrarReserva(reservaRef)
	}
	const handleEditarReserva = () => {
		setOpenForm(true)
	}
	return openForm ? (
		<FormularioReservaAdmin
			editar={true}
			reserva={{
				...reserva,
				fecha: reserva.fecha.split('T')[0],
				nombre: reserva.pacienteNombre,
			}}
			actualizarReserva={(res) => {
				setReserva(res.reserva)
				actualizarReserva(res)
			}}
			setForm={() => {
				setOpenForm(false)
			}}
		/>
	) : showModal ? (
		<article className={`containerReserva`} ref={reservaRef}>
			<ConfirmationModal
				titulo={'Borrar Reserva'}
				mensaje={`¿Estás seguro de que deseas borrar la reserva de ${
					reserva.pacienteNombre
				} el dia ${formatFechaParaUser(reserva)} a las ${reserva.hora}?`}
				onConfirm={handleConfirmModal}
				onCancel={handleCancelModal}
			/>
		</article>
	) : (
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
						onClickFunction={() => setShowModal(true)}
					/>
				</div>
			) : (
				<div className={`reserva-container-botones`}>
					<BotónSecundario
						texto={'Eliminar'}
						className='btnCerrar'
						onClickFunction={() => setShowModal(true)}
					/>
				</div>
			)}
		</article>
	)
}
