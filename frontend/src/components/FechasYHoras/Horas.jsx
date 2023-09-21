import { useState } from 'react'
import { ESTADOS_RESERVAS } from '../../constantes'
import './Horas.scss'
const condición = (index, hora) =>
	index === 0 || index === 1
		? false
		: hora.paga || hora.pendiente || hora.cancelada
		? false
		: true

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
export const Horas = ({ horas, onClickReservar, publico }) => {
	const [horaSeleccionada, setHoraSeleccionada] = useState('')
	return (
		horas.length > 0 && (
			<ul className='horasDisplay'>
				{horas.map((hora, index) => {
					const horaDisplay = hora.id?.split(' ')[1]
					return publico ? (
						condición(index, hora) && (
							<li
								className={`liHora ${
									horaDisplay === horaSeleccionada ? 'horaSeleccionada' : ''
								}`}
								key={hora.id || index}
								onClick={(e) => {
									setHoraSeleccionada(e.target.textContent)
									onClickReservar(e)
								}}>
								{horaDisplay}
							</li>
						)
					) : (
						<li
							className={`
						liHora ${clase(index, hora)}`}
							key={hora.id || index}
							onClick={(e) => {
								setHoraSeleccionada(e.target.textContent)
								onClickReservar(e)
							}}>
							{horaDisplay}
						</li>
					)
				})}
			</ul>
		)
	)
}
