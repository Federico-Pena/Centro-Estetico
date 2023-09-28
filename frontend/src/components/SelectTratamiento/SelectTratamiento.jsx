export const SelectTratamiento = ({
	tratamientos,
	reserva,
	setMotivo,
	className,
	name,
}) => {
	console.log(tratamientos)
	return (
		<div className={className ? className : ''}>
			<label>Tratamiento</label>
			<select
				required
				name={name}
				onChange={(e) => setMotivo && setMotivo(e.target.value)}>
				{reserva ? (
					<option
						defaultValue={
							reserva.tratamiento ? reserva.tratamiento.nombre : ''
						}>
						{reserva.tratamiento ? reserva.tratamiento.nombre : ''}
					</option>
				) : (
					<option></option>
				)}
				{tratamientos &&
					tratamientos.length &&
					tratamientos.map((trata) => {
						return (
							<option key={trata._id} value={trata.nombre}>
								{trata.nombre}
							</option>
						)
					})}
			</select>
		</div>
	)
}
