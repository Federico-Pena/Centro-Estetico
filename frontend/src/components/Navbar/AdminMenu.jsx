import { ArrowDown } from '../Icons/Icons.jsx'
import { NavbarLink } from './NavbarLink.jsx'
import { adminLinks } from './links.js'

export const AdminMenu = ({ onClick }) => {
  return (
    <li className='grid group relative'>
      <a className='grid grid-cols-[1fr_max-content] cursor-pointer group-hover:opacity-0 md:flex md:items-center md:gap-2 '>
        Admin
        <ArrowDown className={'transition-transform group-hover:rotate-180'} />
      </a>
      <ul
        className='invisible -z-50 rounded-md grid opacity-0 absolute left-1/2 -translate-x-1/2 top-1/4 translate-y-full p-4 gap-4 bg-color-violeta transition-transform group-hover:z-auto group-hover:visible group-hover:translate-y-[0%] group-hover:opacity-100 hover:[&>li>a]:opacity-50 [&>li>a]:transition-opacity md:top-[100%]'
        id='adminListMenu'>
        {adminLinks.map((link) => (
          <NavbarLink key={link.name} {...link} onClick={onClick} />
        ))}
      </ul>
    </li>
  )
}
