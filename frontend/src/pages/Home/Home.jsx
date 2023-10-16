import { Testimonio } from '../../components/Testimonio/Testimonio'
import './Home.scss'
import { Link } from 'react-router-dom'
import testimonios from '../../../testimonios.json'
const Home = () => {
  return (
    <main className='hero'>
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            ¡Descubre los beneficios de los masajes terapéuticos y modeladores!
          </h1>
          <p className='hero-subtitle'>Relájate y disfruta de un momento de tranquilidad</p>
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
          {testimonios.map((test) => (
            <Testimonio key={test.titulo} testimonio={test} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
