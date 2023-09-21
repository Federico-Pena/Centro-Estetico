import './ContadorReservas.scss'
import { ESTADOS_RESERVAS } from '../../constantes'
import { useState } from 'react'
import { BotónSecundario } from '../Botones/BotonSecundario'
import { TransitionNumber } from '../TransitionNumber/TransitionNumber'
function contador(arrayReservas) {
	if (arrayReservas instanceof Array) {
		const counts = arrayReservas.reduce(
			(acc, reserva) => {
				if (reserva.estado === ESTADOS_RESERVAS.pago) {
					acc.terminadas++
				} else if (reserva.estado === ESTADOS_RESERVAS.cancelada) {
					acc.canceladas++
				} else if (reserva.estado === ESTADOS_RESERVAS.pendiente) {
					acc.pendientes++
				}
				return acc
			},
			{ terminadas: 0, canceladas: 0, pendientes: 0 }
		)
		return {
			reservasCanceladas: counts.canceladas,
			reservasPendientes: counts.pendientes,
			reservasTerminadas: counts.terminadas,
			reservasTodas: counts.canceladas + counts.pendientes + counts.terminadas,
		}
	} else {
		return {
			reservasCanceladas: [],
			reservasPendientes: [],
			reservasTerminadas: [],
			reservasTodas: [],
		}
	}
}
function ContadorReservas({ reservas, mostrarReservadas }) {
	const {
		reservasCanceladas,
		reservasPendientes,
		reservasTerminadas,
		reservasTodas,
	} = contador(reservas)

	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}

	const onClickMostrar = (e) => {
		mostrarReservadas(e.currentTarget.className)
	}
	return (
		<div className={`contador-container`}>
			<BotónSecundario
				className={'btnContador'}
				tipo={'button'}
				texto={`${isVisible ? 'Ocultar Contador' : 'Mostrar Contador'}`}
				onClickFunction={toggleVisibility}
			/>
			{
				<section
					className={`contadorEstadosReservas ${
						isVisible ? 'visible' : 'hidden'
					}`}>
					<div className='Pendiente' onClick={onClickMostrar}>
						<p>Pendientes</p>
						<strong>
							<TransitionNumber
								from={0}
								to={reservasPendientes}
								duration={500}
							/>
						</strong>
					</div>
					<div className='Cancelada' onClick={onClickMostrar}>
						<p>Canceladas</p>
						<strong>
							<TransitionNumber
								from={0}
								to={reservasCanceladas}
								duration={500}
							/>
						</strong>
					</div>
					<div className='Pago' onClick={onClickMostrar}>
						<p>Pagas</p>
						<strong>
							<TransitionNumber
								from={0}
								to={reservasTerminadas}
								duration={500}
							/>
						</strong>
					</div>
					<div className='Toda' onClick={onClickMostrar}>
						<p>Todas</p>
						<strong>
							<TransitionNumber from={0} to={reservasTodas} duration={500} />
						</strong>
					</div>
				</section>
			}
		</div>
	)
}

export default ContadorReservas
