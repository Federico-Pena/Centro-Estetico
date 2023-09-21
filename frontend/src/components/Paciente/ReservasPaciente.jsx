import { useState } from 'react'
import { usePaciente } from '../../hooks/usePaciente'
import { Loader } from '../Loader/Loader'
import { BotónSecundario } from '../Botones/BotonSecundario'
import { BotónPrimario } from '../Botones/BotonPrimario'
import { FormularioReservaAdmin } from '../Formularios/Admin/FormularioReservaAdmin'
import { ContenedorReservas } from '../ContenedorReservas/ContenedorReservas'
import { HOY_STRING_BIEN } from '../../constantes'

export const ReservasPaciente = ({ paciente, cerrarReservas }) => {
	const [formReserva, setFormReserva] = useState(false)
	const {
		reservasPaciente,
		loading,
		actualizarReservaPaciente,
		eliminarReservaPaciente,
	} = usePaciente(paciente._id)

	const estadoFormulario = () => {
		setFormReserva(!formReserva)
	}

	return (
		<div className='reservasPaciente'>
			{loading && (
				<div className='loaderContainer'>
					<Loader />
				</div>
			)}
			<BotónSecundario
				className={'btnVolverPacientesPage'}
				onClickFunction={cerrarReservas}
				texto={'Volver'}
			/>
			<h2>Reservas de {paciente.nombre}</h2>
			<BotónPrimario
				onClickFunction={estadoFormulario}
				texto={'Agregar Reserva'}
			/>
			{formReserva ? (
				<FormularioReservaAdmin
					actualizarReserva={actualizarReservaPaciente}
					setForm={estadoFormulario}
					reserva={{
						pacienteNombre: paciente.nombre,
						fecha: HOY_STRING_BIEN.split('T')[0],
					}}
				/>
			) : (
				<ContenedorReservas
					actualizarReservaEliminada={eliminarReservaPaciente}
					actualizarReservas={actualizarReservaPaciente}
					reservas={reservasPaciente}
				/>
			)}
		</div>
	)
}
