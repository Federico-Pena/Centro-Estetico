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
    <header className='sticky top-0 h-28 p-4 grid grid-cols-[100px_1fr] bg-color-violeta text-slate-50 z-30 '>
      <Link
        title='Volver a inicio'
        to='/'
        onClick={() => (openMenu ? setMenuState() : setOpenMenu(false))}
        className='w-16 justify-self-center h-full bg-contain bg-no-repeat bg-center bg-[url("/assets/icons/icon-192.png")]'></Link>
      <i
        onClick={setMenuState}
        className={`flex z-30 items-center justify-end cursor-pointer md:hidden`}>
        {openMenu ? <MenuCross /> : <Menu />}
      </i>
      <nav
        className={`text-2xl w-full h-screen grid items-center fixed left-0 transition ${
          openMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } bg-color-violeta md:relative md:text-lg md:h-auto md:translate-x-0 md:opacity-100`}>
        <ul className='w-full  grid items-center gap-8 text-center  hover:[&>li>a]:opacity-50 [&>li]:grid [&>li]:items-center [&>li]:px-2  [&>li]:m-auto [&>li>a]:transition-opacity [&>li>a>svg]:self-center md:gap-0 md:grid-flow-col'>
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
