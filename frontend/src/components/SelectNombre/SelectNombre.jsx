import './SelectNombre.scss'
import { BotónSecundario } from '../Botones/BotonSecundario'
import { BotónPrimario } from '../Botones/BotonPrimario'
import { useNombres } from '../../hooks/useNombres'
import { useState } from 'react'
import { LoaderChico } from '../Loader/LoaderChico'

const SelectNombre = ({ onChangeNombre }) => {
	const [nombre, setNombre] = useState('')
	const [nombreSubmit, setNombreSubmit] = useState()
	const { totalPages, nombres, pagina, setPagina, loading } =
		useNombres(nombreSubmit)
	return (
		<div className='selectNombre-container'>
			<div className='formBuscarPorNombre'>
				<input
					name='nombre'
					id='buscarPaciente'
					type='text'
					placeholder='Buscar Nombre'
					onChange={(e) => setNombre(e.target.value)}
				/>
				<BotónPrimario
					tipo={'button'}
					texto={'Buscar'}
					className={'formBuscarBtn'}
					onClickFunction={() => setNombreSubmit(nombre)}
				/>
			</div>

			{nombres.length > 0 && (
				<>
					<div className='pagination-buttons'>
						<div className='encabezado'>
							{loading ? (
								<LoaderChico className={'loaderPacientes'} />
							) : (
								<strong>
									Página: {pagina} / {totalPages}
								</strong>
							)}
						</div>
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
								pagina !== totalPages && setPagina(pagina + 1)
							}
							texto={'Siguiente pág'}
						/>
					</div>

					{nombres.map((opcion, index) => (
						<div
							className={
								opcion.nombre === 'admin'
									? 'selectNombre-option admin'
									: 'selectNombre-option'
							}
							key={index}
							onClick={() => onChangeNombre(opcion.nombre)}>
							<img
								src={opcion.foto.secure_url}
								alt={opcion.nombre}
								className='imagen'
							/>
							<span className='nombre'>{opcion.nombre}</span>

							<span className='numero'>
								Numero de reservas: {opcion.totalReservas}
							</span>
						</div>
					))}
				</>
			)}
		</div>
	)
}

export default SelectNombre
