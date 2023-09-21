import { Testimonio } from '../../components/Testimonio/Testimonio'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<main className='hero'>
			<section className='hero-section'>
				<div className='hero-content'>
					<h1 className='hero-title'>
						¡Descubre los beneficios de los masajes terapéuticos y modeladores!
					</h1>
					<p className='hero-subtitle'>
						Relájate y disfruta de un momento de tranquilidad
					</p>
					<Link className='hero-button' title='Ir a Servicios' to='/servicios'>
						Reserva ahora
					</Link>
				</div>
				<div className='hero-image'>
					<img
						className='imgHero'
						src='https://res.cloudinary.com/fotoscloudinary/image/upload/v1692718887/Masajes/heroImg_ut1ehd.webp'
						alt='imagen de sesión de masaje '
					/>
				</div>
			</section>
			<section className='testimonios-section'>
				<h2>Testimonios</h2>
				<div className='testimonios-container'>
					<Testimonio
						imgURL={
							'https://res.cloudinary.com/fotoscloudinary/image/upload/v1692716628/Masajes/Testimonios/testimonio2_wfihgv.webp'
						}
					/>
					<Testimonio
						imgURL={
							'https://res.cloudinary.com/fotoscloudinary/image/upload/v1692716628/Masajes/Testimonios/testimonio3_v09wrw.webp'
						}
					/>
					<Testimonio
						imgURL={
							'https://res.cloudinary.com/fotoscloudinary/image/upload/v1692716628/Masajes/Testimonios/testimonio5_eeczpq.webp'
						}
					/>
					<Testimonio
						imgURL={
							'https://res.cloudinary.com/fotoscloudinary/image/upload/v1692716628/Masajes/Testimonios/testimonio6_luaprv.webp'
						}
					/>
					<Testimonio
						imgURL={
							'https://res.cloudinary.com/fotoscloudinary/image/upload/v1692716628/Masajes/Testimonios/testimonio4_p0qldm.webp'
						}
					/>
					<Testimonio
						imgURL={
							'https://res.cloudinary.com/fotoscloudinary/image/upload/v1692716628/Masajes/Testimonios/testimonio1_xrhthh.webp'
						}
					/>
				</div>
			</section>
		</main>
	)
}

export default Home
