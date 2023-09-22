import { Reserva } from '../Reserva/Reserva'
import './ContenedorReservas.scss'
export const ContenedorReservas = ({
	reservas,
	actualizarReservas,
	actualizarReservaEliminada,
	cerrarReserva,
	className,
}) => {
	return (
		<section className={`ContenedorReservas ${className}`}>
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
