import { useContext, useEffect, useRef, useState } from 'react'
import { MensajeToast } from '../../../context/mensajeContext'
import { formatHoraUser } from '../../../helpers/Formato/formatHoraUser'
import { BotónPrimario } from '../../Botones/BotonPrimario'
import { LoaderChico } from '../../Loader/LoaderChico'
import { apiEndPoint } from '../../../services/apiConfig'
import { UserContext } from '../../../context/userContext'
import { Horas } from '../../FechasYHoras/Horas'
import { comprobarHoras } from '../../../helpers/FechasHoras/comprobarHoras'
import { usePaciente } from '../../../hooks/usePaciente'
import { HOY_STRING_BIEN } from '../../../constantes'
import { BotónSecundario } from '../../Botones/BotonSecundario'
import { fetchData } from '../../../hooks/fetchData'
import { formatFechaParaUser } from '../../../helpers/Formato/formatFechaParaUser'
import { diasSemanaConHoras } from '../../../helpers/FechasHoras/diasSemanaConHoras'
import '../Reserva/FormularioReserva.scss'
import SelectNombre from '../../SelectNombre/SelectNombre'
export const FormularioReservaAdmin = ({
	reserva,
	setForm,
	editar,
	actualizarReserva,
}) => {
	const [dia, setDia] = useState(reserva.fecha || HOY_STRING_BIEN.split('T')[0])
	const [reservas, setReservas] = useState([])
	const [motivo, setMotivo] = useState(reserva.motivo)
	const [observaciones, setObservaciones] = useState(reserva.observaciones)
	const [horaForm, setHoraForm] = useState(reserva.hora || '')
	const [inputNombre, setInputNombre] = useState(reserva.pacienteNombre)
	const [loading, setLoading] = useState(false)
	const [horasFiltradas, setHorasFiltradas] = useState([])
	const formRef = useRef()
	const { setMensaje } = useContext(MensajeToast)
	const { accessToken } = useContext(UserContext)
	const { nombres, pagina, setPagina, totalPacientes, totalPaginas } =
		usePaciente()
	const cerrarReserva = () => {
		formRef.current.parentElement.classList.add('animationOut')
		setTimeout(() => {
			setForm()
		}, 300)
	}
	useEffect(() => {
		formRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
		const getData = async () => {
			const res = await fetch(`${apiEndPoint.reservas.deUnDia}${dia}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken || ''}`,
				},
			})
			const { data } = await res.json()
			setReservas(data)
		}
		/* accessToken && */ dia && getData()
	}, [dia, accessToken, reserva])

	useEffect(() => {
		const dias = diasSemanaConHoras(dia, reservas)
		const numero = dias.find(
			(d) => d.dia.getDay() === new Date(`${dia} ${horaForm}`).getDay()
		)
		setHorasFiltradas(numero?.horaID)
	}, [dia, reservas, horaForm])

	const onClickReservar = (e) => {
		setHoraForm(e.target.textContent)
		const comprobación = comprobarHoras(e, dia, reservas)
		if (!comprobación) {
			setMensaje('Hora no disponible para hacer una reserva')
			setHoraForm('')
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		const form = formRef.current
		const horaFin = new Date(`${form.fecha.value.split('T')[0]} ${horaForm}`)
		horaFin.setMinutes(horaFin.getMinutes() + 30)
		const res = {
			pacienteNombre: form.pacienteNombre.value,
			fecha: form.fecha.value,
			hora: horaForm,
			horaFin: formatHoraUser(horaFin),
			motivo: form.motivo ? form.motivo.value : undefined,
			observaciones: form.observaciones.value,
		}
		if (res.pacienteNombre.trim() && res.hora && res.fecha) {
			const options = {
				method: 'POST',
				body: JSON.stringify(res),
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${accessToken}`,
				},
			}
			await fetchData(
				`${apiEndPoint.reservas.agregar}`,
				options,
				actualizarReserva
			)
			form.classList.add('formOut')
			setForm()
		} else {
			setMensaje('Faltan campos')
		}
		setLoading(false)
	}
	const handleSubmitEditar = async (e) => {
		e.preventDefault()
		setLoading(true)
		const form = formRef.current
		const horaFin = new Date(`${form.fecha.value.split('T')[0]} ${horaForm}`)
		horaFin.setMinutes(horaFin.getMinutes() + 30)
		const res = {
			_id: reserva._id,
			pacienteNombre: form.pacienteNombre.value,
			fecha: form.fecha.value,
			hora: horaForm,
			horaFin: formatHoraUser(horaFin),
			motivo: form.motivo ? form.motivo.value : undefined,
			observaciones: form.observaciones.value,
		}
		if (res.pacienteNombre.trim() && res.hora && res.fecha) {
			const url = `${apiEndPoint.reservas.editar}${res._id}`
			const options = {
				method: 'PUT',
				body: JSON.stringify(res),
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${accessToken}`,
				},
			}
			await fetchData(url, options, actualizarReserva)
			setForm()
		} else {
			setMensaje('Faltan campos')
		}
		setLoading(false)
	}
	const setNombreGuardado = (e) => {
		setInputNombre(e)
	}
	return (
		<section className='formReservaContainer'>
			<BotónSecundario
				className='cerrarForm'
				texto={'Cerrar Formulario'}
				onClickFunction={cerrarReserva}
				tipo={'button'}
			/>
			<form
				onSubmit={editar ? handleSubmitEditar : handleSubmit}
				className='formReserva'
				ref={formRef}>
				<h3>Reserva</h3>
				{!inputNombre == 'admin' ||
					(!reserva.pacienteNombre && (
						<SelectNombre
							totalPacientes={totalPacientes}
							totalPaginas={totalPaginas}
							nombres={nombres}
							pagina={pagina}
							setPagina={setPagina}
							onChangeNombre={setNombreGuardado}
						/>
					))}
				<div className='input'>
					<label htmlFor='pacienteNombre'>Nombre</label>
					<input
						id='pacienteNombre'
						type='text'
						name='pacienteNombre'
						defaultValue={inputNombre}
						disabled={inputNombre ? true : false}
						required
					/>
				</div>
				<div className='input'>
					<label htmlFor='fecha'>Fecha</label>
					<input
						id='fecha'
						type='date'
						name='fecha'
						required
						disabled={
							inputNombre === 'admin' || reserva.pacienteNombre ? false : true
						}
						defaultValue={reserva.fecha || HOY_STRING_BIEN.split('T')[0]}
						onChange={(e) => {
							const fechaInput = e.target.value.split('T')[0]
							setDia(fechaInput)
						}}
					/>
				</div>
				{horasFiltradas?.length > 0 && (
					<div className='input'>
						<Horas horas={horasFiltradas} onClickReservar={onClickReservar} />
					</div>
				)}

				<div className='input'>
					<label htmlFor='observaciones'>
						{inputNombre === 'admin'
							? 'Tareas. Separadas por comas'
							: 'Observaciones'}
					</label>
					<input
						defaultValue={reserva.observaciones}
						id='observaciones'
						type='text'
						name='observaciones'
						onChange={(e) => setObservaciones(e.target.value)}
					/>
				</div>

				{inputNombre === 'admin' ? null : (
					<div className='input'>
						<label htmlFor='motivo'>Motivo</label>
						<select name='motivo' onChange={(e) => setMotivo(e.target.value)}>
							<option defaultValue={reserva.motivo}>
								{reserva.motivo ? reserva.motivo : ''}
							</option>
							<option value='Drenaje Linfático'>Drenaje Linfático</option>
							<option value='Masaje Estético'>Masaje Estético</option>
							<option value='Exfoliación Corporal'>Exfoliación Corporal</option>
							<option value='Masaje Cérvico-Craneal'>
								Masaje Cérvico-Craneal
							</option>
							<option value='Masaje Con Piedras Calientes'>
								Masaje Con Piedras Calientes
							</option>
							<option value='Masaje Descontracturante'>
								Masaje Descontracturante
							</option>
							<option value='Masaje Relajante'>Masaje Relajante</option>
							<option value='Masaje Prenatal'>Masaje Prenatal</option>
							<option value='Barras De access'>Barras De Access</option>
						</select>
					</div>
				)}
				<div className='input'>
					{inputNombre && (
						<span className='spanHora'>
							Nombre <strong>{inputNombre}</strong>
						</span>
					)}
					{dia && (
						<span className='spanHora'>
							Dia <strong>{formatFechaParaUser({ fecha: dia })}</strong>
						</span>
					)}
					{horaForm && (
						<span className='spanHora'>
							Hora <strong>{horaForm}</strong>
						</span>
					)}
					{observaciones && (
						<span className='spanHora'>
							Observaciones
							<strong>{observaciones}</strong>
						</span>
					)}
					{motivo && (
						<span className='spanHora'>
							Motivo <strong>{motivo}</strong>
						</span>
					)}
				</div>
				<BotónPrimario
					tipo={'submit'}
					className={'submitAdmin'}
					texto={loading ? <LoaderChico /> : 'Guardar'}
				/>
			</form>
		</section>
	)
}
