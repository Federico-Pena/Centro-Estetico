import './FechasYHoras.scss'
import { useContext, useEffect, useState } from 'react'
import { HOY, HOY_STRING_BIEN } from '../../constantes'
import { MensajeToast } from '../../context/mensajeContext'
import { comprobarHoras } from '../../helpers/FechasHoras/comprobarHoras'
import { formatFechaIso } from '../../helpers/Formato/formarFechaIso'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { FormularioReservaAdmin } from '../Formularios/Admin/FormularioReservaAdmin'
import { Horas } from './Horas'
import { diasSemanaConHoras } from '../../helpers/FechasHoras/diasSemanaConHoras'
import { UserContext } from '../../context/userContext'
import { fechasConReservas } from './fechasConReservas'
import { TransitionNumber } from '../TransitionNumber/TransitionNumber'
const meses = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
]
export const FechasYHoras = ({ setDiaPadre, reservas, actualizarReservas }) => {
	const [dia, setDia] = useState(HOY_STRING_BIEN.split('T')[0])
	const [mes, setMes] = useState(HOY_STRING_BIEN.split('-')[1])
	const [hora, setHora] = useState('')
	const [horasState, setHorasState] = useState([])
	const [fechas, setFechas] = useState([])
	const [cantidadFechas, setCantidadFechas] = useState(0)
	const [totalReservasMes, setTotalReservasMes] = useState(0)
	const [openFormulario, setOpenFormulario] = useState(false)
	const [loading, setLoading] = useState(false)
	const { accessToken } = useContext(UserContext)
	const { setMensaje } = useContext(MensajeToast)
	useEffect(() => {
		const getReservas = async () => {
			setLoading(true)
			const data = await fechasConReservas(accessToken, mes)
			setCantidadFechas(data.cantidad)
			setTotalReservasMes(data.totalReservasMes)
			if (data.cantidad > 0) {
				setFechas(data.fechas)
			} else {
				setLoading(false)
				return
			}
			setLoading(false)
		}
		mes && getReservas()
	}, [accessToken, mes])

	useEffect(() => {
		setLoading(true)
		const dias = diasSemanaConHoras(dia, reservas)
		const numero = dias.find(
			(d) => d.dia.getDay() === new Date(`${dia} ${hora}`).getDay()
		)
		setHorasState(numero.horaID)
		setLoading(false)
	}, [dia, reservas, hora])

	const onClickReservar = (e) => {
		setHora(e.target.textContent)
		const comprobación = comprobarHoras(e, dia, reservas)
		if (comprobación) {
			setOpenFormulario(true)
		} else {
			setMensaje('Hora no disponible para hacer una reserva')
		}
	}

	function obtenerNombreMes(numeroMes) {
		if (numeroMes >= 1 && numeroMes <= 12) {
			return meses[numeroMes - 1]
		} else {
			return 'Mes no válido'
		}
	}

	return (
		<section className='containerFechasYHoras'>
			{openFormulario && (
				<>
					<FormularioReservaAdmin
						reserva={{
							fecha: dia,
							hora: hora,
							pacienteNombre:
								hora === '08:00' || hora === '08:30' ? 'admin' : null,
						}}
						fecha={dia}
						hora={hora}
						setForm={() => setOpenFormulario(false)}
						actualizarReserva={actualizarReservas}
					/>
				</>
			)}

			<div className='select-container-container'>
				<div className='select-container'>
					<h3>
						Fechas en {`${obtenerNombreMes(mes)}`}{' '}
						<TransitionNumber from={0} to={cantidadFechas} duration={500} />
					</h3>
					<select value={mes} onChange={(e) => setMes(e.target.value)}>
						{meses.map((mes, i) => (
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
				<select
					className='selectedFecha'
					name='selectedFecha'
					onChange={(e) => {
						const fecha = e.target.value.split('T')[0]
						setDiaPadre(fecha)
						setDia(fecha)
					}}>
					<option value={formatFechaIso(HOY)}>
						Hoy {formatFechaParaUser({ fecha: formatFechaIso(HOY) })}
					</option>
					{fechas?.length > 0 &&
						fechas?.map((dia) => {
							return (
								<option
									className='selectedComponent-option'
									key={dia.fecha}
									value={dia.fecha}>
									{formatFechaParaUser(dia)}
								</option>
							)
						})}
				</select>
				{horasState.length > 0 && (
					<Horas horas={horasState} onClickReservar={onClickReservar} />
				)}
			</div>
		</section>
	)
}
