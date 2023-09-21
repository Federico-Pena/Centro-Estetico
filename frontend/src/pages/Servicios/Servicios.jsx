import { useEffect } from 'react'
import masajes from '../../../servicios.json'
import { CardServicio } from '../../components/CardServicio/CardServicio'
import './Servicios.scss'
export default function Servicios() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<main className='containerPageServicios'>
			<h1>Servicios</h1>
			{masajes.map((masaje) => (
				<CardServicio masaje={masaje} key={masaje.titulo} />
			))}
		</main>
	)
}
