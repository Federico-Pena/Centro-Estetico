import { Email, Instagram, Whatsapp } from '../Icons/Icons'
import './Footer.scss'
import { Link } from 'react-router-dom'
export const Footer = () => {
  const email = import.meta.env.VITE_IS_ALLOWED_ACCESS_1
  console.log(email)
  return (
    <footer>
      <div className='footer'>
        <div className='row logos'>
          <Link title='Ir a WhatsApp' to={`https://wa.link/7nzofi`} target='_blank'>
            <Whatsapp />
          </Link>
          <Link title='Ir a Instagram' to='https://www.instagram.com/' target='_blank'>
            <Instagram />
          </Link>
          <Link title='Ir a Mail' to={`mailto:${email}`} target='_blank'>
            <Email />
          </Link>
        </div>

        <div className='row'>
          <ul>
            <li>
              <Link title='Ir a Servicios' to='/Servicios'>
                Servicios
              </Link>
            </li>
            <li>
              <Link title='Ir a Nosotros' to='/Nosotros'>
                Nosotros
              </Link>
            </li>
            <li>
              <Link title='Ir a Contacto' to='/Contacto'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className='row'>
          <p>
            Centro Estético Copyright © 2023 Centro Estético - All rights reserved || Designed By:{' '}
            <Link
              title='Federico Pena'
              to={'https://portfolio-federico-pena.vercel.app/'}
              target='_blank'>
              Federico
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
