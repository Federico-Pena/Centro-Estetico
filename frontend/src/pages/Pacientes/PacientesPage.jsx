import './PacientesPage.scss'
import { useContext, useState } from 'react'
import { BotónSecundario } from '../../components/Botones/BotonSecundario'
import SelectNombre from '../../components/SelectNombre/SelectNombre'
import { usePaciente } from '../../hooks/usePaciente'
import { Paciente } from '../../components/Paciente/Paciente'
import FormularioPaciente from '../../components/Formularios/Paciente/FormularioPaciente'
import { LoaderChico } from '../../components/Loader/LoaderChico'
import { MensajeToast } from '../../context/mensajeContext'
export default function Pacientes() {
	const [formulario, setFormulario] = useState(false)
	const { setPacientes, getPaciente, pacientes, loading } = usePaciente()
	const { setMensaje } = useContext(MensajeToast)

	const visibleForm = () => {
		setFormulario(!formulario)
	}
	const nuevoPaciente = (nuevo) => {
		if (nuevo) {
			setFormulario(false)
			const mensaje = `Nuevo paciente ${nuevo.nombre}
			`
			setMensaje(mensaje)
			setPacientes((prev) => [...prev, nuevo])
		}
	}

	return (
		<>
			<main className='containerPacientesPage'>
				<BotónSecundario
					className={'btn-cerrarFormulario'}
					onClickFunction={visibleForm}
					texto={
						loading ? (
							<LoaderChico />
						) : formulario ? (
							'Cerrar Formulario'
						) : (
							'Agregar Nuevo Paciente'
						)
					}
				/>

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

				{formulario && <FormularioPaciente nuevoPaciente={nuevoPaciente} />}
				{!pacientes.length && !formulario && (
					<SelectNombre onChangeNombre={getPaciente} />
				)}
			</main>
		</>
	)
}
