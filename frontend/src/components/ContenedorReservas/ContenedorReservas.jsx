import { useContext, useState } from 'react'
import { Reserva } from '../Reserva/Reserva'
import './ContenedorReservas.scss'
import { FormularioReservaAdmin } from '../Formularios/Admin/FormularioReservaAdmin'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal'
import { fetchData } from '../../hooks/fetchData'
import { UserContext } from '../../context/userContext'
import { apiEndPoint } from '../../services/apiConfig'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { formatHoraUser } from '../../helpers/Formato/formatHoraUser'
export const ContenedorReservas = ({
	reservas,
	actualizarReservas,
	actualizarReservaEliminada,
	cerrarReserva,
	className,
}) => {
	const [form, setForm] = useState(false)
	const [reserva, setReserva] = useState(false)
	const [modal, setModal] = useState(false)
	const { accessToken } = useContext(UserContext)
	const handleEditar = (res) => {
		setReserva(res)
		setForm(true)
	}
	const handleConfirmModal = async () => {
		const url = `${apiEndPoint.reservas.eliminar}${reserva._id}`
		const options = {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${accessToken}`,
			},
		}
		await fetchData(url, options, actualizarReservaEliminada)

		setModal(false)
	}

	const handleCancelModal = () => {
		setModal(false)
	}
	const handleModal = (res) => {
		setReserva(res)
		setModal(true)
	}
	return form ? (
		<FormularioReservaAdmin
			editar={true}
			reserva={{
				...reserva,
				fecha: reserva.horario.horaInicio,
				nombre: reserva.pacienteNombre,
			}}
			actualizarReserva={actualizarReservas}
			setForm={() => {
				setForm(false)
			}}
		/>
	) : modal ? (
		<ConfirmationModal
			titulo={'Borrar Reserva'}
			mensaje={`¿Estás seguro de que deseas borrar la reserva de ${
				reserva.pacienteNombre
			} el dia ${formatFechaParaUser({
				fecha: reserva.horario.horaInicio,
			})} a las ${formatHoraUser(new Date(reserva.horario.horaInicio))}?`}
			onConfirm={handleConfirmModal}
			onCancel={handleCancelModal}
		/>
	) : (
		<section className={`ContenedorReservas ${className || ''}`}>
			{reservas?.length > 0 &&
				reservas.map((res) => {
					return (
						<Reserva
							setModal={handleModal}
							setForm={handleEditar}
							cerrarReserva={cerrarReserva}
							actualizarReservaEliminada={actualizarReservaEliminada}
							actualizarReserva={actualizarReservas}
							reserva={res}
							key={res._id}
						/>
					)
				})}
		</section>
	)
}
