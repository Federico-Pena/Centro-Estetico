import { useEffect } from 'react'
import './Contacto.scss'
import { FormularioContacto } from '../../components/Formularios/Contacto/FormularioContacto'
const Contacto = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className='containerContacto'>
			<h1>Contacto</h1>
			<FormularioContacto />
			<iframe
				title='Mapa de ubicación del local'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0665981572465!2d-56.18592132345823!3d-34.904778173461544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cae669900f%3A0xf3a706db4331ce16!2sAvenida%2018%20de%20Julio%20%26%20V%C3%A1zquez%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1692061943682!5m2!1ses-419!2suy'
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'></iframe>
		</div>
	)
}
export default Contacto
