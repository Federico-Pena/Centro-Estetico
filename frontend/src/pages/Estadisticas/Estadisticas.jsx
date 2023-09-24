import { useContext, useEffect, useState } from 'react'

import { TransitionNumber } from '../../components/TransitionNumber/TransitionNumber'
import { HOY_STRING_BIEN, MESES } from '../../constantes'
import './Estadisticas.scss'
import { fetchData } from '../../hooks/fetchData'
import { apiEndPoint } from '../../services/apiConfig'
import { UserContext } from '../../context/userContext'
function obtenerNombreMes(numeroMes) {
	if (numeroMes >= 1 && numeroMes <= 12) {
		return MESES[numeroMes - 1]
	} else {
		return 'Mes no válido'
	}
}
const Estadisticas = () => {
	const [mes, setMes] = useState(HOY_STRING_BIEN.split('-')[1])
	const [cantidadFechas, setCantidadFechas] = useState(0)
	const [totalReservasMes, setTotalReservasMes] = useState(0)
	const [totalPacientes, setTotalPacientes] = useState(0)
	const { accessToken } = useContext(UserContext)

	useEffect(() => {
		const url = `${apiEndPoint.estadisticas.estadisticas}${'09'}`
		const options = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken || ''}`,
			},
		}
		const getStatics = async () => {
			const res = await fetchData(url, options, datos)
		}
		getStatics()
	}, [accessToken])

	const datos = (res) => {
		console.log(res)
	}
	return (
		<main className='mainEstadisticas'>
			<div className='select-container'>
				<h3>
					Fechas en {`${obtenerNombreMes(mes)}`}{' '}
					<TransitionNumber from={0} to={cantidadFechas} duration={500} />
				</h3>
				<select value={mes} onChange={(e) => setMes(e.target.value)}>
					<option></option>
					{MESES.map((mes, i) => (
						<option key={mes} value={i + 1}>
							{mes}
						</option>
					))}
				</select>
				<h3>
					Reservas en {`${obtenerNombreMes(mes)}`}{' '}
					<TransitionNumber from={0} to={totalReservasMes} duration={500} />
				</h3>
			</div>
			<div className='encabezado'>
				<strong>
					Pacientes:{' '}
					<TransitionNumber from={0} to={totalPacientes} duration={2000} />
				</strong>
			</div>
		</main>
	)
}
export default Estadisticas
