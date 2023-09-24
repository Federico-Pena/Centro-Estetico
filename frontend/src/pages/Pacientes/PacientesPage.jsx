import './PacientesPage.scss'
import { useState } from 'react'
import { BotónSecundario } from '../../components/Botones/BotonSecundario'
import SelectNombre from '../../components/SelectNombre/SelectNombre'
import { usePaciente } from '../../hooks/usePaciente'
import { Paciente } from '../../components/Paciente/Paciente'
import FormularioPaciente from '../../components/Formularios/Paciente/FormularioPaciente'
import { Notificacion } from '../../components/Notificacion/Notificacion'
import { LoaderChico } from '../../components/Loader/LoaderChico'
export default function Pacientes() {
	const [formulario, setFormulario] = useState(false)
	const {
		setPaciente,
		getPaciente,
		paciente,
		loading,
		agregarPaciente,
		nombres,
		pagina,
		editarPaciente,
		setPagina,
		totalPaginas,
		eliminarPaciente,
	} = usePaciente()

	const visibleForm = () => {
		setFormulario(!formulario)
	}
	const nuevoPaciente = (nuevo) => {
		if (nuevo) {
			setFormulario(false)
			agregarPaciente(nuevo)
		}
	}

	return (
		<>
			<Notificacion />
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

				{paciente && (
					<div className='containersCardsPacientes'>
						<BotónSecundario
							onClickFunction={() => setPaciente(null)}
							texto={'Ocultar Paciente'}
						/>
						{paciente && (
							<Paciente
								paciente={paciente}
								eliminarPaciente={(res) => {
									eliminarPaciente(res)
									setPaciente(null)
								}}
								editarPaciente={editarPaciente}
							/>
						)}
					</div>
				)}

				{formulario && <FormularioPaciente nuevoPaciente={nuevoPaciente} />}
				{nombres.length > 0 && !paciente && (
					<SelectNombre
						setPagina={setPagina}
						onChangeNombre={getPaciente}
						totalPaginas={totalPaginas}
						nombres={nombres}
						pagina={pagina}
					/>
				)}
			</main>
		</>
	)
}
