import './FechasYHoras.scss'
import { useContext, useEffect, useState } from 'react'
import { ESTADOS_RESERVAS, HOY, HOY_STRING_BIEN, MESES } from '../../constantes'
import { MensajeToast } from '../../context/mensajeContext'
import { comprobarHoras } from '../../helpers/FechasHoras/comprobarHoras'
import { formatFechaIso } from '../../helpers/Formato/formarFechaIso'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { FormularioReservaAdmin } from '../Formularios/Admin/FormularioReservaAdmin'
import { diasSemanaConHoras } from '../../helpers/FechasHoras/diasSemanaConHoras'
import { UserContext } from '../../context/userContext'
import { TransitionNumber } from '../TransitionNumber/TransitionNumber'
import { fetchData } from '../../hooks/fetchData'
import { apiEndPoint } from '../../services/apiConfig'
import { encontrarHorasReservadas } from '../../helpers/FechasHoras/encontrarHorasDisponibles'
import { formatHoraUser } from '../../helpers/Formato/formatHoraUser'
import { compararFechas } from '../../helpers/FechasHoras/compararFechas'
import { useDiasYHoras } from '../../hooks/useDiasYHoras'
import { ListaHoras } from '../ListaHoras/ListaHoras'

export const FechasYHoras = ({ setDiaPadre, reservas, actualizarReservas }) => {
	const [dia, setDia] = useState(HOY_STRING_BIEN.split('T')[0])
	const [mes, setMes] = useState(HOY_STRING_BIEN.split('-')[1])
	const [hora, setHora] = useState(HOY_STRING_BIEN.split('T')[1])
	const [fechas, setFechas] = useState([])
	const [cantidadFechas, setCantidadFechas] = useState(0)
	const [totalReservasMes, setTotalReservasMes] = useState(0)
	const [openFormulario, setOpenFormulario] = useState(false)
	const { accessToken } = useContext(UserContext)
	const { setMensaje } = useContext(MensajeToast)
	const { diaConHoras, horas } = useDiasYHoras(dia, hora)
	useEffect(() => {
		const getFechas = async () => {
			const options = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken || ''}`,
				},
			}
			const url = `${apiEndPoint.reservas.dias}${mes}`
			await fetchData(url, options, fechasConReservas)
		}
		mes && getFechas()
	}, [accessToken, mes])

	const fechasConReservas = (res) => {
		const { cantidad, totalReservasMes, fechas } = res
		setCantidadFechas(cantidad)
		setTotalReservasMes(totalReservasMes)
		if (cantidad > 0) {
			setFechas(fechas)
		}
	}

	const onClickReservar = (e) => {
		const hora = e.target.textContent
		setHora(hora)
		const comprobación = compararFechas(new Date(`${dia} ${hora}`), reservas)
		if (
			comprobación.proximaHoraNoDisponible === ESTADOS_RESERVAS.cancelada ||
			comprobación.estado === ESTADOS_RESERVAS.cancelada
		) {
			setOpenFormulario(true)
			return
		}
		if (comprobación.estado || comprobación.proximaHoraNoDisponible) {
			setMensaje('Hora no disponible para hacer una reserva')
			setHora('')
			return
		}
		setOpenFormulario(true)
	}

	function obtenerNombreMes(numeroMes) {
		if (numeroMes >= 1 && numeroMes <= 12) {
			return MESES[numeroMes - 1]
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
							fecha: new Date(`${dia} ${hora}`),
							pacienteNombre:
								hora === '08:00' || hora === '08:30' ? 'admin' : null,
						}}
						setForm={() => setOpenFormulario(false)}
						actualizarReserva={actualizarReservas}
					/>
				</>
			)}

			<div className='select-container-container'>
				<div className='select-container'>
					<select value={mes} onChange={(e) => setMes(e.target.value)}>
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
					<h3>
						Fechas en {`${obtenerNombreMes(mes)}`}{' '}
						<TransitionNumber from={0} to={cantidadFechas} duration={500} />
					</h3>
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
					<option value={HOY_STRING_BIEN.split('T')[0]}>
						Hoy{' '}
						{formatFechaParaUser({
							fecha: new Date(HOY_STRING_BIEN),
						})}
					</option>
					{fechas?.length > 0 &&
						fechas?.map((dia) => {
							return (
								<option
									className='selectedComponent-option'
									key={dia}
									value={dia}>
									{formatFechaParaUser({ fecha: new Date(`${dia} ${hora}`) })}
								</option>
							)
						})}
				</select>
				{diaConHoras && (
					<ul className='horasDisplay'>
						<ListaHoras
							diaConHoras={diaConHoras}
							horas={horas}
							onClickReservar={onClickReservar}
							reservas={reservas}
						/>
					</ul>
				)}
			</div>
		</section>
	)
}
