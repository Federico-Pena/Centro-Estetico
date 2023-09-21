import './PacientesPage.scss'
import { useState } from 'react'
import { BotónSecundario } from '../../components/Botones/BotonSecundario'
import SelectNombre from '../../components/SelectNombre/SelectNombre'
import { usePaciente } from '../../hooks/usePaciente'
import { Paciente } from '../../components/Paciente/Paciente'
import FormularioPaciente from '../../components/Formularios/Paciente/FormularioPaciente'
import { Loader } from '../../components/Loader/Loader'
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
		setNombres,
		setPagina,
		totalPaginas,
		totalPacientes,
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
	const actualizarBorrado = (userExistente) => {
		const nuevos = nombres
			.filter((nombre) => nombre._id !== userExistente._id)
			.sort((a, b) =>
				a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1 : 1
			)
		setNombres(nuevos)
		setPaciente(null)
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
							<Paciente paciente={paciente} setPaciente={actualizarBorrado} />
						)}
					</div>
				)}
				{}

				{formulario ? (
					<FormularioPaciente nuevoPaciente={nuevoPaciente} />
				) : (
					!paciente && (
						<SelectNombre
							setPagina={setPagina}
							onChangeNombre={getPaciente}
							totalPaginas={totalPaginas}
							nombres={nombres}
							pagina={pagina}
							totalPacientes={totalPacientes}
						/>
					)
				)}
			</main>
		</>
	)
}
