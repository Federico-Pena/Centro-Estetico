import { useEffect, useState } from 'react'
import useTratamiento from '../../hooks/useTratamiento'

export const SelectTratamiento = ({
	reserva,
	setMotivo,
	setSesion,
	className,
	name,
	formReserva,
}) => {
	const [tratamiento, setTratamiento] = useState(
		reserva?.tratamiento ? reserva.tratamiento.nombre : ''
	)
	const [sesionReserva, setSesionReserva] = useState(
		reserva?.tratamiento ? reserva.tratamiento?.descripcionSesion : ''
	)
	const [sesiones, setSesiones] = useState([])
	const { tratamientos } = useTratamiento()
	useEffect(() => {
		if (tratamiento && tratamientos.length > 0) {
			const sesionesTratamiento = tratamientos.find(
				(trata) => trata.nombre === tratamiento
			).sesiones
			setSesiones(sesionesTratamiento)
		}
	}, [tratamiento, tratamientos])
	return (
		<>
			<div className={className ? className : ''}>
				<label>Tratamiento</label>
				<select
					required
					name={name}
					onChange={(e) => {
						setMotivo(e.target.value)
						setTratamiento(e.target.value)
						setSesionReserva('')
					}}>
					<option
						defaultValue={
							reserva?.tratamiento ? reserva.tratamiento.nombre : ''
						}>
						{reserva?.tratamiento ? reserva.tratamiento.nombre : ''}
					</option>
					{tratamientos &&
						tratamientos.length &&
						tratamientos.map((trata) => {
							if (reserva) {
								return (
									reserva.tratamiento?.descripcionSesion !== trata.nombre && (
										<option key={trata._id} value={trata.nombre}>
											{trata.nombre}
										</option>
									)
								)
							}
							return (
								<option key={trata._id} value={trata.nombre}>
									{trata.nombre}
								</option>
							)
						})}
				</select>
			</div>
			{tratamiento && formReserva && (
				<div className={className ? className : ''}>
					<label>Sesiones</label>
					<select
						name='sesiones'
						required
						onChange={(e) => setSesion(e.target.value)}>
						<option defaultValue={sesionReserva}>{sesionReserva}</option>
						{sesiones.length > 0 &&
							sesiones.map((t) => {
								return (
									t.descripcion !== sesionReserva && (
										<option key={t._id} defaultValue={t.descripcion}>
											{t.descripcion}
										</option>
									)
								)
							})}
					</select>
				</div>
			)}
		</>
	)
}
