import { Email, Instagram, WhatsApp } from '../Icons/Icons'
import { Link } from 'react-router-dom'
import { navLinks } from '../Navbar/links.js'
import { NavbarLink } from '../Navbar/NavbarLink.jsx'
export const Footer = () => {
  const email = import.meta.env.VITE_IS_ALLOWED_ACCESS_1
  return (
    <footer className='grid grid-cols-2 gap-y-8 bg-color-violeta p-10 text-slate-50'>
      <div className='grid gap-4 grid-flow-col items-center justify-evenly hover:[&>a>svg]:opacity-50 [&>a>svg]:transition-opacity'>
        <Link title='Ir a WhatsApp' to={'https://wa.link/7nzofi'} target='_blank'>
          <WhatsApp />
        </Link>
        <Link title='Ir a Instagram' to='https://www.instagram.com/' target='_blank'>
          <Instagram />
        </Link>
        <Link title='Ir a Mail' to={`mailto:${email}`} target='_blank'>
          <Email />
        </Link>
      </div>

      <ul className='grid gap-4 justify-center [&>li]:px-2 [&>li]:text-center hover:[&>li>a]:opacity-50 [&>li>a]:transition-opacity'>
        {navLinks.map((link) => (
          <NavbarLink key={link.name} name={link.name} path={link.path} />
        ))}
      </ul>
      <div className='col-span-full text-center [&>p>a]:transition-opacity  hover:[&>p>a]:opacity-50 [&>p>a]:underline [&>p>a]:underline-offset-4'>
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
    </footer>
  )
}
