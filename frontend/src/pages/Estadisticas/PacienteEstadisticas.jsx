import { PorcentajesComponent } from '../../components/PorcentajesComponent/PorcentajesComponent'
import { TransitionNumber } from '../../components/TransitionNumber/TransitionNumber'

export const PacienteEstadisticas = ({
	estadisticasPacientes,
	tratamientosPacientes,
}) => {
	return (
		estadisticasPacientes && (
			<section className='pacientesDatos'>
				<h2>Datos de Pacientes</h2>
				<ul className='ulPacientesDatos'>
					<li>
						Pacientes
						<strong>
							<TransitionNumber
								from={0}
								to={estadisticasPacientes.totalPacientes}
								duration={2000}
							/>
						</strong>
					</li>
					<li>
						Promedio De Edad
						<strong>
							<TransitionNumber
								from={0}
								to={estadisticasPacientes.promedioDeEdades}
								duration={2000}
							/>{' '}
							<span> años</span>
						</strong>
					</li>
				</ul>
				{tratamientosPacientes && (
					<section className='pacientesPorcentaje'>
						<PorcentajesComponent datos={tratamientosPacientes} />
					</section>
				)}
			</section>
		)
	)
}
