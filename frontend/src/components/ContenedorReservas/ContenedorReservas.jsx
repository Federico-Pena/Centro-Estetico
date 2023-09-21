import { Reserva } from '../Reserva/Reserva'
import './ContenedorReservas.scss'
export const ContenedorReservas = ({
	reservas,
	actualizarReservas,
	actualizarReservaEliminada,
	cerrarReserva,
}) => {
	return (
		<section className='ContenedorReservas'>
			{reservas?.length > 0 &&
				reservas.map((res) => {
					return (
						<Reserva
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
