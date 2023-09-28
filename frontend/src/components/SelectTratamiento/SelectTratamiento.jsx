export const SelectTratamiento = ({ reserva, setMotivo, className, name }) => {
	return (
		<div className={className ? className : ''}>
			<label>Tratamiento</label>
			<select
				required
				name={name}
				onChange={(e) => setMotivo && setMotivo(e.target.value)}>
				<option
					defaultValue={reserva.tratamiento ? reserva.tratamiento.nombre : ''}>
					{reserva.tratamiento ? reserva.tratamiento.nombre : ''}
				</option>
				<option value='Admin'>Admin</option>
				<option value='Drenaje Linfático'>Drenaje Linfático</option>
				<option value='Masaje Estético'>Masaje Estético</option>
				<option value='Exfoliación Corporal'>Exfoliación Corporal</option>
				<option value='Masaje Cérvico-Craneal'>Masaje Cérvico-Craneal</option>
				<option value='Masaje Con Piedras Calientes'>
					Masaje Con Piedras Calientes
				</option>
				<option value='Masaje Descontracturante'>
					Masaje Descontracturante
				</option>
				<option value='Masaje Relajante'>Masaje Relajante</option>
				<option value='Masaje Prenatal'>Masaje Prenatal</option>
				<option value='Barras De access'>Barras De Access</option>
			</select>
		</div>
	)
}
