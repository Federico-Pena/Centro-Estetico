import { useEffect } from 'react'
import './SobreMi.scss'
import { FormularioContacto } from '../../components/Formularios/Contacto/FormularioContacto'
const SobreMi = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<main className='containerSobreMi'>
			<h1>Algo sobre mi</h1>
			<div className='cardSobreMi'>
				<img
					src='https://res.cloudinary.com/fotoscloudinary/image/upload/v1692718886/Masajes/fotoNati_lc8nsa.webp'
					alt='Foto Masajista Natalia Pena'
				/>
				<div className='texto'>
					<p>
						Mi nombre es Natalia Pena, tengo 29 años, vivo en Playa Pascual y
						tengo mi consultorio propio en la zona de Cordón, Montevideo.
					</p>
					<p>Me dedico a esta profesión desde el año 2019.</p>
					<p>
						Tengo capacitación en masajes como por ejemplo descontracturantes,
						relajantes, prenatales, con piedras calientes, modeladores, post
						operatorios, etc.
					</p>
					<p>En 2023 comencé a ser facilitadora en barras de access.</p>
					<p>Me gusta estar en constante capacitación</p>
					<p>
						Disfruto cada momento y voy creciendo junto con mi emprendimiento
						tanto en lo personal como en lo laboral.
					</p>
					<p>
						Espero podamos conocernos pronto y los que ya me conocen, que me
						continúen acompañando este viaje tan hermoso.
					</p>
					<p>
						Agradezco a mi familia, amigos y pacientes por todo el apoyo y
						contención recibida.
					</p>
					<p>¿Qué mas es posible? ¿Cómo puede mejorar esto?</p>
				</div>
			</div>
			<FormularioContacto />
		</main>
	)
}

export default SobreMi
