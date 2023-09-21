import { usePaciente } from '../../hooks/usePaciente'
import { BotónSecundario } from '../Botones/BotonSecundario'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal'
import FormularioEditarPaciente from '../Formularios/Paciente/FormularioEditarPaciente'
import { Imprimir } from '../Imprimir/Imprimir'
import './Paciente.scss'
import { useContext, useRef, useState } from 'react'
import { ReservasPaciente } from './ReservasPaciente'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { apiEndPoint } from '../../services/apiConfig'
import { UserContext } from '../../context/userContext'
import { fetchData } from '../../hooks/fetchData'

export const Paciente = ({ paciente, setPaciente }) => {
	const [showModal, setShowModal] = useState(false)
	const [openReservas, setOpenReservas] = useState(false)
	const [openForm, setOpenForm] = useState(false)
	const [nuevoPaciente, setNuevoPaciente] = useState(paciente)
	const { editarPaciente, eliminarPaciente } = usePaciente()
	const { accessToken } = useContext(UserContext)
	const imprimirRef = useRef()
	const abrirReservas = () => {
		setOpenReservas(true)
	}
	const cerrarReservas = () => {
		setOpenReservas(false)
	}

	const handleConfirm = async () => {
		const options = {
			headers: {
				authorization: `Bearer ${accessToken}`,
			},
			method: 'DELETE',
		}
		const url = `${apiEndPoint.paciente.eliminarPaciente}${paciente._id}`
		const res = await fetchData(url, options, eliminarPaciente)
		setShowModal(false)
		setPaciente(res.userExistente)
	}
	const handleCancel = () => {
		setShowModal(false)
	}

	const actualizarPacientes = (nuevoUser) => {
		editarPaciente(nuevoUser)
		setNuevoPaciente(nuevoUser)
		setOpenForm(false)
	}
	const abrirForm = () => {
		setOpenForm(true)
	}
	const fecha = formatFechaParaUser({ fecha: nuevoPaciente.fechaDeNac })
	return openForm ? (
		<FormularioEditarPaciente
			paciente={nuevoPaciente}
			cerrarForm={() => setOpenForm(false)}
			actualizarPacientes={actualizarPacientes}
		/>
	) : openReservas ? (
		<ReservasPaciente
			paciente={nuevoPaciente}
			cerrarReservas={cerrarReservas}
		/>
	) : (
		<div className='containerPaciente'>
			<div className='botones'>
				<div className='imprimir'>
					<Imprimir referencia={imprimirRef} />
				</div>

				<BotónSecundario texto={'Reservas'} onClickFunction={abrirReservas} />
				<BotónSecundario texto={'Editar'} onClickFunction={abrirForm} />
				<BotónSecundario
					texto={'Eliminar'}
					onClickFunction={() => setShowModal(true)}
				/>
			</div>
			<picture className='containerFoto'>
				<img
					src={nuevoPaciente.foto.secure_url}
					alt={`Foto del paciente ${nuevoPaciente.nombre}`}
					className='paciente-foto'
				/>
			</picture>
			<div className='divImprimir' ref={imprimirRef}>
				<div className='paciente-details'>
					<h4>Detalles del paciente</h4>
					<ul>
						<li className='nombre'>
							<span>Nombre:</span> {nuevoPaciente.nombre}
						</li>
						<li>
							<span>Nacimiento:</span>
							{fecha || '-'}
						</li>
						<li>
							<span>Cédula:</span> {nuevoPaciente.cedula || '-'}
						</li>
						<li>
							<span>Edad:</span> {nuevoPaciente.edad || '-'}
						</li>
						<li>
							<span>Sociedad:</span> {nuevoPaciente.sociedad || '-'}
						</li>
						<li>
							<span>Teléfono:</span> {nuevoPaciente.telefono || '-'}
						</li>
						<li>
							<span>Obs:</span> {nuevoPaciente.observaciones || '-'}
						</li>
						<li className='nombre'>
							<span>Tratamiento:</span> {nuevoPaciente.tratamiento || '-'}
						</li>
					</ul>
				</div>
				<div className='paciente-details'>
					<h4>Contacto de Emergencia</h4>
					<ul>
						<li className='nombre'>
							<span>Nombre:</span>
							{nuevoPaciente.contactoEmergencia.nombreContacto2 || '-'}
						</li>
						<li>
							<span>Teléfono:</span>
							{nuevoPaciente.contactoEmergencia.telefonoContacto2 || '-'}
						</li>
					</ul>
				</div>
				<div className='paciente-details'>
					<h4>Costumbres Diarias</h4>
					<ul>
						<li>
							<span>Alimentación:</span>
							{nuevoPaciente.alimentacion || '-'}
						</li>
						<li>
							<span>Descanso:</span> {nuevoPaciente.descanso || '-'}
						</li>
						<li>
							<span>Hidratación:</span> {nuevoPaciente.hidratacion || '-'}
						</li>
						<li>
							<span>Alcohol:</span> {nuevoPaciente.alcohol || '-'}
						</li>
						<li>
							<span>Fuma:</span> {nuevoPaciente.fuma || '-'}
						</li>
					</ul>
				</div>
				<div className='paciente-details'>
					<h4>Condiciones</h4>
					<ul>
						<li>
							<span>Alergia:</span> {nuevoPaciente.alergia || '-'}
						</li>
						<li>
							<span>Problema Circulatorio:</span>
							{nuevoPaciente.circulatorio || '-'}
						</li>
						<li>
							<span>Embarazo:</span> {nuevoPaciente.embarazo || '-'}
						</li>
						<li>
							<span>Operaciones:</span> {nuevoPaciente.operaciones || '-'}
						</li>
						<li>
							<span>Oncológicas:</span> {nuevoPaciente.oncologicas || '-'}
						</li>
						<li>
							<span>Otras Enfermedades:</span>
							{nuevoPaciente.enfermedades || '-'}
						</li>
						<li>
							<span>Medicamentos:</span>
							{nuevoPaciente.medicamentos || '-'}
						</li>
						<li>
							<span>Implantes:</span> {nuevoPaciente.implantes || '-'}
						</li>
					</ul>
				</div>
			</div>
			{showModal && (
				<ConfirmationModal
					titulo={'Borrar Paciente'}
					mensaje={`¿Estás seguro de que deseas eliminar al paciente ${paciente.nombre}?`}
					onConfirm={handleConfirm}
					onCancel={handleCancel}
				/>
			)}
		</div>
	)
}
