import { useContext, useState } from 'react'
import './FormularioPaciente.scss'
import { formDataPaciente } from './formDataPaciente'
import { usePaciente } from '../../../hooks/usePaciente'
import { MensajeToast } from '../../../context/mensajeContext'
import { LoaderChico } from '../../Loader/LoaderChico'
import { BotónPrimario } from '../../Botones/BotonPrimario'
import { apiEndPoint } from '../../../services/apiConfig'
import { fetchData } from '../../../hooks/fetchData'
import { UserContext } from '../../../context/userContext'
import { BotónSecundario } from '../../Botones/BotonSecundario'
import { TRATAMIENTOS } from '../../../constantes'
const FormularioPaciente = ({ nuevoPaciente, setFormulario }) => {
	const [foto, setFoto] = useState(null)
	const { loading } = usePaciente()
	const { setMensaje } = useContext(MensajeToast)
	const { accessToken } = useContext(UserContext)

	const submitAgregar = async (e) => {
		e.preventDefault()
		const form = e.target
		const nuevoUsuario = formDataPaciente(form, foto)
		if (nuevoUsuario.get('nombre').trim()) {
			const url = apiEndPoint.paciente.agregarPaciente
			const opciones = {
				method: 'POST',
				body: nuevoUsuario,
				headers: {
					authorization: `Bearer ${accessToken}`,
				},
			}
			await fetchData(url, opciones, (res) => {
				const { error, paciente,mensaje } = res
				if (error) {
					setMensaje(error)
					console.log(error)
				} else {
					setMensaje(mensaje)
					nuevoPaciente(paciente)
				}
			})

			form.reset()
		} else {
			setMensaje('Campo nombre vacío')
		}
	}

	const handleFotoChange = (e) => {
		const file = e.target.files[0]
		setFoto(file)
	}

	return (
		<>
			<form className='formPaciente' onSubmit={submitAgregar}>
				<div className='input'>
					<h1>Agregar Paciente</h1>
					<BotónSecundario
						onClickFunction={setFormulario}
						texto={'cerrar'}
						tipo={'button'}
					/>
				</div>
				<div className='input'>
					<label htmlFor='nombre'>Nombre</label>
					<input type='text' id='nombre' name='nombre' />
				</div>

				<div className='input'>
					<label htmlFor='fechaDeNac'>Nacimiento</label>
					<input type='date' id='fechaDeNac' name='fechaDeNac' />
				</div>

				<div className='input'>
					<label htmlFor='cedula'>Cédula</label>
					<input type='number' id='cedula' name='cedula' />
				</div>

				<div className='input'>
					<label htmlFor='edad'>Edad</label>
					<input type='number' id='edad' name='edad' />
				</div>

				<div className='input'>
					<label htmlFor='sociedad'>Emergencia/Sociedad </label>
					<input type='text' id='sociedad' name='sociedad' />
				</div>

				<div className='input'>
					<label htmlFor='telefono'>Teléfono</label>
					<input type='number' id='telefono' name='telefono' />
				</div>

				<div className='input'>
					<label htmlFor='observaciones'>Observaciones</label>
					<input type='text' id='observaciones' name='observaciones' />
				</div>

				<div className='input'>
					<label htmlFor='foto'>Foto</label>
					<input
						id='foto'
						name='foto'
						type='file'
						onChange={handleFotoChange}
					/>
				</div>

				<div className='input '>
					<label htmlFor='nombreContacto2'>Contacto de Emergencia </label>
					<div className='contactoEmergencia'>
						<input
							type='text'
							id='nombreContacto2'
							name='nombreContacto2'
							placeholder='Nombre'
						/>
						<input
							type='number'
							name='telefonoContacto2'
							placeholder='Teléfono'
						/>
					</div>
				</div>

				<div className='inputSelect'>
					<label>Alimentación </label>
					<select name='alimentacion'>
						<option value=''>Seleccione una opción</option>
						<option value='Buena'>Buena</option>
						<option value='Regular'>Regular</option>
						<option value='Mala'>Mala</option>
					</select>
				</div>

				<div className='inputSelect'>
					<label>Descanso</label>
					<select name='descanso'>
						<option value=''>Seleccione una opción</option>
						<option value='Menos de 6 horas'>Menos de 6 horas</option>
						<option value='8 horas'>8 horas</option>
						<option value='Mas de 8 horas'>Mas de 8 horas</option>
					</select>
				</div>

				<div className='inputSelect'>
					<label>Hidratación</label>
					<select name='hidratacion'>
						<option value=''>Seleccione una opción</option>
						<option value='2 o más litros de agua'>
							2 o más litros de agua
						</option>
						<option value='1 litro de agua'>1 litro de agua</option>
						<option value='Nunca tomo agua'>Nunca tomo agua</option>
					</select>
				</div>

				<div className='inputSelect'>
					<label>Alcohol</label>
					<select name='alcohol'>
						<option value=''>Seleccione una opción</option>
						<option value='Siempre'>Siempre</option>
						<option value='Ocasionalmente'>Ocasionalmente</option>
						<option value='Nunca'>Nunca</option>
					</select>
				</div>

				<div className='inputSelect'>
					<label>Fuma</label>
					<select name='fuma'>
						<option value=''>Seleccione una opción</option>
						<option value='Siempre'>Siempre</option>
						<option value='Ocasionalmente'>Ocasionalmente</option>
						<option value='Nunca'>Nunca</option>
					</select>
				</div>

				<div className='input'>
					<label htmlFor='alergia'>Alergia</label>
					<input type='text' id='alergia' name='alergia' />
				</div>

				<div className='input'>
					<label htmlFor='circulatorio'>Problemas Circulatorios</label>
					<input type='text' id='circulatorio' name='circulatorio' />
				</div>

				<div className='input'>
					<label htmlFor='embarazo'>Embarazo</label>
					<input type='text' id='embarazo' name='embarazo' />
				</div>

				<div className='input'>
					<label htmlFor='operaciones'>Operaciones</label>
					<input type='text' id='operaciones' name='operaciones' />
				</div>

				<div className='input'>
					<label htmlFor='oncologicas'>Enfermedades oncológicas</label>
					<input type='text' id='oncologicas' name='oncologicas' />
				</div>

				<div className='input'>
					<label htmlFor='enfermedades'>Otras enfermedades</label>
					<input type='text' id='enfermedades' name='enfermedades' />
				</div>

				<div className='input'>
					<label htmlFor='medicamentos'>Medicamentos</label>
					<input type='text' id='medicamentos' name='medicamentos' />
				</div>

				<div className='input'>
					<label htmlFor='implantes'>Implantes</label>
					<input type='text' id='implantes' name='implantes' />
				</div>
				<div className='inputSelect'>
					<label htmlFor='implantes'>Tratamientos</label>
					<select name='tratamiento'>
						{Object.values(TRATAMIENTOS).map((trat) => {
							return (
								<option key={trat} value={trat}>
									{trat}
								</option>
							)
						})}
					</select>
				</div>
				<BotónPrimario texto={loading ? <LoaderChico /> : 'Guardar'} />
			</form>
		</>
	)
}

export default FormularioPaciente
