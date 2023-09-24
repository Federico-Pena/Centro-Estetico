import './SelectNombre.scss'
import { BotónSecundario } from '../Botones/BotonSecundario'
import { TransitionNumber } from '../TransitionNumber/TransitionNumber'
import { usePaciente } from '../../hooks/usePaciente'

const SelectNombre = ({ nombres, onChangeNombre, setPagina, pagina }) => {
	const { totalPaginas } = usePaciente()
	return (
		<div className='selectNombre-container'>
			<div className='encabezado'>
				<strong>
					Páginas:{' '}
					<TransitionNumber from={0} to={totalPaginas} duration={1000} />
				</strong>
				<strong>
					Página actual:{' '}
					<TransitionNumber from={1} to={pagina} duration={200} />
				</strong>
			</div>

			<div className='pagination-buttons'>
				<BotónSecundario
					tipo={'button'}
					className={'pagination-buttons-Anterior'}
					texto={'Pág anterior'}
					onClickFunction={() => pagina > 1 && setPagina(pagina - 1)}
				/>
				<BotónSecundario
					tipo={'button'}
					className={'pagination-buttons-Siguiente'}
					onClickFunction={() =>
						pagina !== totalPaginas && setPagina(pagina + 1)
					}
					texto={'Siguiente pág'}
				/>
			</div>
			{nombres.length > 0 &&
				nombres.map((opcion, index) => (
					<div
						className={
							opcion.nombre === 'admin' || opcion.pacienteNombre === 'admin'
								? 'selectNombre-option admin'
								: 'selectNombre-option'
						}
						key={index}
						onClick={() =>
							onChangeNombre(opcion.nombre || opcion.pacienteNombre)
						}>
						<img
							src={opcion.foto.secure_url}
							alt={opcion.nombre || opcion.pacienteNombre}
							className='imagen'
						/>
						<span className='nombre'>
							{opcion.nombre || opcion.pacienteNombre}
						</span>

						<span className='numero'>
							Numero de reservas: {opcion.totalReservas}
						</span>
					</div>
				))}
		</div>
	)
}

export default SelectNombre
