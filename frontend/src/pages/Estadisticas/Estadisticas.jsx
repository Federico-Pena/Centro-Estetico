import { useContext, useEffect, useState } from 'react'

import { TransitionNumber } from '../../components/TransitionNumber/TransitionNumber'
import { HOY_STRING_BIEN, MESES } from '../../constantes'
import './Estadisticas.scss'
import { fetchData } from '../../hooks/fetchData'
import { apiEndPoint } from '../../services/apiConfig'
import { UserContext } from '../../context/userContext'
import { PacienteEstadisticas } from './PacienteEstadisticas'
import { PorcentajesComponent } from '../../components/PorcentajesComponent/PorcentajesComponent'
import { Loader } from '../../components/Loader/Loader'
const estadoInicialestadisticasReservas = {
	estadosMes: {
		reservasCanceladas: 0,
		reservasPendientes: 0,
		reservasTerminadas: 0,
		reservasTodas: 0,
	},
	estadosTodas: {
		reservasCanceladas: 0,
		reservasPendientes: 0,
		reservasTerminadas: 0,
		reservasTodas: 0,
	},
}
function obtenerNombreMes(numeroMes) {
	if (numeroMes >= 1 && numeroMes <= 12) {
		return MESES[numeroMes - 1]
	} else {
		return 'Mes no válido'
	}
}

const Estadisticas = () => {
	const [mes, setMes] = useState(HOY_STRING_BIEN.split('-')[1])
	const [estadisticasPacientes, setEstadisticasPacientes] = useState({
		totalPacientes: 0,
		promedioDeEdades: 0,
	})
	const [estadisticasReservas, setEstadisticasReservas] = useState(
		estadoInicialestadisticasReservas
	)
	const [tratamientosPacientes, setTratamientosPacientes] = useState({})
	const [motivoReservas, setMotivoReservas] = useState({})
	const [loading, setLoading] = useState(false)
	const { accessToken } = useContext(UserContext)

	useEffect(() => {
		const url = `${apiEndPoint.estadisticas.estadisticas}${mes}`
		const options = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken || ''}`,
			},
		}
		const getStatics = async () => {
			setLoading(true)
			await fetchData(url, options, datos)
			setLoading(false)
		}
		getStatics()
	}, [accessToken, mes])

	const datos = (res) => {
		const { estadisticasPaciente, estadosMes, estadosTodas, reservaMotivo } =
			res
		setEstadisticasReservas({ estadosMes, estadosTodas })
		setEstadisticasPacientes(estadisticasPaciente)
		setTratamientosPacientes(estadisticasPaciente.tratamientosPacientes)
		setMotivoReservas(reservaMotivo)
	}

	return (
		<main className='mainEstadisticas'>
			<PacienteEstadisticas
				estadisticasPacientes={estadisticasPacientes}
				tratamientosPacientes={tratamientosPacientes}
			/>
			<section className='reservasEstadisticas'>
				<h2>Datos de Reservas</h2>
				<article className='reservasEstadisticasArticle'>
					<h3>Reservas del mes</h3>
					<select
						className='selectMeses'
						value={mes}
						onChange={(e) => setMes(e.target.value)}>
						<option key={mes} value={mes}>
							{`${obtenerNombreMes(mes)}`}
						</option>
						{MESES.map(
							(m, i) =>
								m !== `${obtenerNombreMes(mes)}` && (
									<option key={m} value={i + 1}>
										{m}
									</option>
								)
						)}
					</select>
					<ul className='ulReservasDatos'>
						<li>
							Reservas de {`${obtenerNombreMes(mes)}`}
							<strong>
								<TransitionNumber
									from={0}
									to={estadisticasReservas.estadosMes.reservasTodas}
									duration={500}
								/>
							</strong>
						</li>
						<ListaDatos datos={estadisticasReservas.estadosMes} />
					</ul>
				</article>

				<article className='reservasEstadisticasArticle'>
					<h3>Reservas Totales</h3>
					<ul className='ulReservasDatos'>
						<li>
							Reservas Totales
							<strong>
								<TransitionNumber
									from={0}
									to={estadisticasReservas.estadosTodas.reservasTodas}
									duration={500}
								/>
							</strong>
						</li>
						<ListaDatos datos={estadisticasReservas.estadosTodas} />
					</ul>
				</article>

				<PorcentajesComponent datos={motivoReservas} />
			</section>
		</main>
	)
}
export default Estadisticas

const ListaDatos = ({ datos }) => {
	return (
		<>
			<li className='Pago'>
				Reservas Terminadas
				<strong>
					<TransitionNumber
						from={0}
						to={datos.reservasTerminadas}
						duration={500}
					/>
				</strong>
			</li>
			<li className='Pendiente'>
				Reservas Pendientes
				<strong>
					<TransitionNumber
						from={0}
						to={datos.reservasPendientes}
						duration={500}
					/>
				</strong>
			</li>
			<li className='Cancelada'>
				Reservas Canceladas
				<strong>
					<TransitionNumber
						from={0}
						to={datos.reservasCanceladas}
						duration={500}
					/>
				</strong>
			</li>
		</>
	)
}
