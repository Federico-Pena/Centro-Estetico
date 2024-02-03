import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, MenuCross } from '../Icons/Icons'
import { navLinks } from './links.js'
import { NavbarLink } from './NavbarLink.jsx'
import { AdminMenu } from './AdminMenu.jsx'
import { NavbarSesion } from './NavbarSesion.jsx'

const Navbar = ({ isAllowedAccess }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const setMenuState = () => {
    setOpenMenu(!openMenu)
    window.scrollTo(0, 0)
  }

  return (
    <header className='sticky top-0 h-28 p-2 grid grid-flow-col gap-8 bg-color-violeta text-slate-50 z-30'>
      <Link
        title='Volver a inicio'
        to='/'
        onClick={() => (openMenu ? setMenuState() : setOpenMenu(false))}
        className='w-16 h-full bg-contain bg-no-repeat bg-center bg-[url("/assets/icons/icon-192.png")]'></Link>
      <i
        onClick={setMenuState}
        className={`flex z-30 items-center justify-end cursor-pointer md:hidden`}>
        {openMenu ? <MenuCross /> : <Menu />}
      </i>
      <nav
        className={`text-2xl w-full h-screen px-8 fixed left-0 transition-transform ${
          openMenu ? 'translate-x-0' : 'translate-x-full'
        }  grid grid-flow-row bg-color-violeta md:relative md:text-lg md:translate-x-0 md:visible md:flex md:justify-end md:max-5xl md:h-auto`}>
        <ul
          className='w-full h-full grid justify-center items-center py-24 gap-4 text-center md:grid-flow-col md:py-0 md:place-content-center md:justify-between hover:[&>li>a]:opacity-50
        [&>li]:px-2  [&>li]:transition-colors
         [&>li>a]:transition-opacity'>
          {navLinks.map((link) => (
            <NavbarLink key={link.name} {...link} onClick={() => setMenuState()} />
          ))}

          {isAllowedAccess && <AdminMenu onClick={() => setMenuState()} />}
          <NavbarSesion />
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
