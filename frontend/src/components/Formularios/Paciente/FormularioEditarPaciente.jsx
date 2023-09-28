import './FormularioPaciente.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { formDataPaciente } from './formDataPaciente'
import { BotónSecundario } from '../../Botones/BotonSecundario'
import { BotónPrimario } from '../../Botones/BotonPrimario'
import { LoaderChico } from '../../Loader/LoaderChico'
import { apiEndPoint } from '../../../services/apiConfig'
import { fetchData } from '../../../hooks/fetchData'
import { UserContext } from '../../../context/userContext'
import { SelectTratamiento } from '../../SelectTratamiento/SelectTratamiento'

const FormularioEditarPaciente = ({
	paciente,
	cerrarForm,
	actualizarPacientes,
}) => {
	const [foto, setFoto] = useState(null)
	const [loading, setLoading] = useState(false)
	const { accessToken } = useContext(UserContext)
	const formRef = useRef(null)

	useEffect(() => {
		let options = {
			top: formRef.current.offsetTop - 100,
			left: 0,
			behavior: 'smooth',
		}
		window.scrollTo(options)
	}, [])

	const submitEditar = async (e) => {
		e.preventDefault()
		setLoading(true)
		const form = e.target
		const nuevoUsuario = formDataPaciente(form, foto)
		const url = `${apiEndPoint.paciente.editarPaciente}${paciente._id}`
		const options = {
			method: 'PUT',
			body: nuevoUsuario,
			headers: {
				authorization: `Bearer ${accessToken}`,
			},
		}
		await fetchData(url, options, actualizarPacientes)
		cerrarForm()
		setLoading(false)
	}

	const handleFotoChange = (e) => {
		const file = e.target.files[0]
		setFoto(file)
	}

	return (
		<form className='formEditarPaciente' onSubmit={submitEditar} ref={formRef}>
			<BotónSecundario
				tipo={'button'}
				onClickFunction={cerrarForm}
				texto={`🡸`}
			/>
			<h1>Editar Paciente</h1>
			<div className='input'>
				<label>Nombre</label>
				<input type='text' name='nombre' defaultValue={paciente.nombre} />
			</div>

			<div className='input'>
				<label>Nacimiento</label>
				<input
					type='date'
					name='fechaDeNac'
					defaultValue={paciente.fechaDeNac}
				/>
			</div>

			<div className='input'>
				<label>Cédula</label>
				<input type='number' name='cedula' defaultValue={paciente.cedula} />
			</div>

			<div className='input'>
				<label>Edad</label>
				<input type='number' name='edad' defaultValue={paciente.edad} />
			</div>

			<div className='input'>
				<label>Emergencia/Sociedad </label>
				<input type='text' name='sociedad' defaultValue={paciente.sociedad} />
			</div>

			<div className='input'>
				<label>Teléfono</label>
				<input type='number' name='telefono' defaultValue={paciente.telefono} />
			</div>

			<div className='input'>
				<label>Observaciones</label>
				<input
					type='text'
					name='observaciones'
					defaultValue={paciente.observaciones}
				/>
			</div>

			<div className='input'>
				<label>Foto</label>
				<input name='foto' type='file' onChange={handleFotoChange} />
			</div>

			<div className='input'>
				<label>Contacto de Emergencia </label>
				<div className='contactoEmergencia'>
					<input
						type='text'
						name='nombreContacto2'
						placeholder='Nombre'
						defaultValue={paciente.contactoEmergencia.nombreContacto2}
					/>
					<input
						type='number'
						placeholder='Teléfono'
						name='telefonoContacto2'
						defaultValue={paciente.contactoEmergencia.telefonoContacto2}
					/>
				</div>
			</div>

			<div className='inputSelect'>
				<label>Alimentación </label>
				<select name='alimentacion'>
					<option value={paciente.alimentacion}>{paciente.alimentacion}</option>
					<option value='Buena'>Buena</option>
					<option value='Regular'>Regular</option>
					<option value='Mala'>Mala</option>
				</select>
			</div>

			<div className='inputSelect'>
				<label>Descanso</label>
				<select name='descanso'>
					<option value={paciente.descanso}>{paciente.descanso}</option>
					<option value='Menos de 6 horas'>Menos de 6 horas</option>
					<option value='8 horas'>8 horas</option>
					<option value='Mas de 8 horas'>Mas de 8 horas</option>
				</select>
			</div>

			<div className='inputSelect'>
				<label>Hidratación</label>
				<select name='hidratacion'>
					<option value={paciente.hidratacion}>{paciente.hidratacion}</option>
					<option value='2 o más litros de agua'>2 o más litros de agua</option>
					<option value='1 litro de agua'>1 litro de agua</option>
					<option value='Nunca tomo agua'>Nunca tomo agua</option>
				</select>
			</div>

			<div className='inputSelect'>
				<label>Alcohol</label>
				<select name='alcohol'>
					<option value={paciente.alcohol}>{paciente.alcohol}</option>
					<option value='Siempre'>Siempre</option>
					<option value='Ocasionalmente'>Ocasionalmente</option>
					<option value='Nunca'>Nunca</option>
				</select>
			</div>

			<div className='inputSelect'>
				<label>Fuma</label>
				<select name='fuma'>
					<option value={paciente.fuma}>{paciente.fuma}</option>
					<option value='Siempre'>Siempre</option>
					<option value='Ocasionalmente'>Ocasionalmente</option>
					<option value='Nunca'>Nunca</option>
				</select>
			</div>

			<div className='input'>
				<label>Alergia</label>
				<input type='text' name='alergia' defaultValue={paciente.alergia} />
			</div>

			<div className='input'>
				<label>Problemas Circulatorios</label>
				<input
					type='text'
					name='circulatorio'
					defaultValue={paciente.circulatorio}
				/>
			</div>

			<div className='input'>
				<label>Embarazo</label>
				<input type='text' name='embarazo' defaultValue={paciente.embarazo} />
			</div>

			<div className='input'>
				<label>Operaciones</label>
				<input
					type='text'
					name='operaciones'
					defaultValue={paciente.operaciones}
				/>
			</div>

			<div className='input'>
				<label>Enfermedades oncológicas</label>
				<input
					type='text'
					name='oncologicas'
					defaultValue={paciente.oncologicas}
				/>
			</div>

			<div className='input'>
				<label>Otras enfermedades</label>
				<input
					type='text'
					name='enfermedades'
					defaultValue={paciente.enfermedades}
				/>
			</div>

			<div className='input'>
				<label>Medicamentos</label>
				<input
					type='text'
					name='medicamentos'
					defaultValue={paciente.medicamentos}
				/>
			</div>

			<div className='input'>
				<label>Implantes</label>
				<input type='text' name='implantes' defaultValue={paciente.implantes} />
			</div>

			<SelectTratamiento className={'inputSelect'} name={'tratamiento'} />

			<BotónPrimario
				tipo={'submit'}
				className={loading ? 'submitEditarAdmin' : ''}
				texto={loading ? <LoaderChico /> : 'Editar'}
			/>
		</form>
	)
}

export default FormularioEditarPaciente
