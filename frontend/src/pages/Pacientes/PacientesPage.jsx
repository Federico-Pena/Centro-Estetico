import './PacientesPage.scss'
import {  useState } from 'react'
import { BotónSecundario } from '../../components/Botones/BotonSecundario'
import SelectNombre from '../../components/SelectNombre/SelectNombre'
import { usePaciente } from '../../hooks/usePaciente'
import { Paciente } from '../../components/Paciente/Paciente'
import FormularioPaciente from '../../components/Formularios/Paciente/FormularioPaciente'
import { LoaderChico } from '../../components/Loader/LoaderChico'
export default function Pacientes() {
	const [formulario, setFormulario] = useState(false)
	const { setPacientes, getPaciente, pacientes, loading } = usePaciente()

	const nuevoPaciente = (nuevo) => {
		if (nuevo) {
			setFormulario(false)
			setPacientes((prev) => [...prev, nuevo])
		}
	}

	return (
		<>
			<main className='containerPacientesPage'>
				{!formulario && (
					<BotónSecundario
						className={'btn-cerrarFormulario'}
						onClickFunction={() => setFormulario(true)}
						texto={loading ? <LoaderChico /> : 'Agregar Nuevo Paciente'}
					/>
				)}
				{pacientes.length > 0 && !formulario && (
					<div className='containersCardsPacientes'>
						<BotónSecundario
							onClickFunction={() => setPacientes([])}
							texto={'Ocultar Paciente'}
						/>
						{pacientes.map((pac) => {
							return (
								<Paciente
									key={pac._id}
									paciente={pac}
									setPacientes={() => {
										setPacientes([])
									}}
								/>
							)
						})}
					</div>
				)}
				{formulario && (
					<FormularioPaciente
						setFormulario={() => setFormulario(false)}
						nuevoPaciente={nuevoPaciente}
					/>
				)}
				{!pacientes.length && !formulario && (
					<SelectNombre onChangeNombre={getPaciente} />
				)}
			</main>
		</>
	)
}
