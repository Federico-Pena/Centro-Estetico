import { useContext, useEffect, useRef, useState } from 'react'
import { MensajeToast } from '../../../context/mensajeContext'
import { formatHoraUser } from '../../../helpers/Formato/formatHoraUser'
import { BotónPrimario } from '../../Botones/BotonPrimario'
import { LoaderChico } from '../../Loader/LoaderChico'
import { apiEndPoint } from '../../../services/apiConfig'
import { UserContext } from '../../../context/userContext'
import { usePaciente } from '../../../hooks/usePaciente'
import {
	ESTADOS_RESERVAS,
	HOY_STRING_BIEN,
	TRATAMIENTOS,
} from '../../../constantes'
import { BotónSecundario } from '../../Botones/BotonSecundario'
import { fetchData } from '../../../hooks/fetchData'
import { formatFechaParaUser } from '../../../helpers/Formato/formatFechaParaUser'
import '../Reserva/FormularioReserva.scss'
import SelectNombre from '../../SelectNombre/SelectNombre'
import { compararFechas } from '../../../helpers/FechasHoras/compararFechas'
import { useDiasYHoras } from '../../../hooks/useDiasYHoras'
import { ListaHoras } from '../../ListaHoras/ListaHoras'
import { SelectTratamiento } from '../../SelectTratamiento/SelectTratamiento'
import { useTratamiento } from '../../../hooks/useTratamiento'
export const FormularioReservaAdmin = ({
	reserva,
	setForm,
	editar,
	actualizarReserva,
}) => {
	const [dia, setDia] = useState(
		new Date(`${reserva.fecha}`).toISOString().split('T')[0] ||
			HOY_STRING_BIEN.split('T')[0]
	)
	const [horaForm, setHoraForm] = useState(
		formatHoraUser(new Date(`${reserva.fecha}`)) || ''
	)
	const [reservas, setReservas] = useState([])
	const [motivo, setMotivo] = useState(reserva.tratamiento?.nombre || '')
	const [observaciones, setObservaciones] = useState(reserva.observaciones)
	const [inputNombre, setInputNombre] = useState(reserva.pacienteNombre)
	const [loading, setLoading] = useState(false)
	const formRef = useRef()
	const { setMensaje } = useContext(MensajeToast)
	const { accessToken } = useContext(UserContext)
	const { nombres, pagina, setPagina, totalPacientes, totalPaginas } =
		usePaciente()
	const { diaConHoras, horas } = useDiasYHoras(dia, horaForm)
	const { tratamientos } = useTratamiento()
	useEffect(() => {
		formRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}, [])
	const cerrarReserva = () => {
		formRef.current.parentElement.classList.add('animationOut')
		setTimeout(() => {
			setForm()
		}, 300)
	}
	useEffect(() => {
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

	const onClickReservar = (e) => {
		const hora = e.target.textContent
		setHoraForm(hora)
		const comprobación2 = compararFechas(new Date(`${dia} ${hora}`), reservas)
		if (comprobación2.estado || comprobación2.proximaHoraNoDisponible) {
			setMensaje('Hora no disponible para hacer una reserva')
			setHoraForm('')
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		const form = formRef.current
		const res = {
			pacienteNombre: form.pacienteNombre.value,
			fecha: new Date(`${form.fecha.value} ${horaForm}`),
			tratamiento: form.tratamiento.value,
			observaciones: form.observaciones.value,
			sesionSeleccionada: form.sesiones.value,
		}
		if (
			res.pacienteNombre.trim() &&
			res.fecha instanceof Date &&
			res.sesionSeleccionada.trim() &&
			res.tratamiento.trim()
		) {
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
		const res = {
			_id: reserva._id,
			pacienteNombre: form.pacienteNombre.value,
			fecha: new Date(`${form.fecha.value} ${horaForm}`),
			tratamiento: form.tratamiento.value,
			observaciones: form.observaciones.value,
			sesionSeleccionada: form.sesiones.value,
			estado: reserva.estado || ESTADOS_RESERVAS.pendiente,
		}
		if (
			res.pacienteNombre.trim() &&
			res.fecha instanceof Date &&
			res.sesionSeleccionada.trim() &&
			res.tratamiento.trim()
		) {
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
							onChangeNombre={setInputNombre}
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
						defaultValue={dia || HOY_STRING_BIEN.split('T')[0]}
						onChange={(e) => {
							const fechaInput = e.target.value.split('T')[0]
							setDia(fechaInput)
							setHoraForm('')
						}}
					/>
				</div>
				{diaConHoras && (
					<div className='input'>
						<ul className='horasDisplay'>
							<ListaHoras
								diaConHoras={diaConHoras}
								horas={horas}
								onClickReservar={onClickReservar}
								reservas={reservas}
							/>
						</ul>
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
				<SelectTratamiento
					className={'input'}
					reserva={reserva}
					tratamientos={tratamientos}
					setMotivo={setMotivo}
					name={'tratamiento'}
				/>
				{motivo && (
					<div className='input'>
						<label htmlFor='sesiones'>Sesiones</label>
						<select name='sesiones' required>
							{reserva && reserva.tratamiento && (
								<option defaultValue={reserva.tratamiento.descripcionSesion}>
									{reserva.tratamiento.descripcionSesion}
								</option>
							)}
							{tratamientos.length > 0 &&
								tratamientos
									.filter((trata) => trata.nombre === motivo)[0]
									.sesiones.map((t) => {
										return (
											<option key={t._id} defaultValue={t.descripcion}>
												{t.descripcion}
											</option>
										)
									})}
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
							Dia{' '}
							<strong>
								{formatFechaParaUser({ fecha: new Date(`${dia} ${horaForm}`) })}
							</strong>
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
							Tratamiento <strong>{motivo}</strong>
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
