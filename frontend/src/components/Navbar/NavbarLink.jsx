import { Link, useLocation } from 'react-router-dom'

export const NavbarLink = ({ name, path, onClick }) => {
  const location = useLocation()
  const isActive = path === location.pathname ? 'bg-color-logo text-color-violeta rounded' : ''

  return (
    <li className={isActive}>
      <Link onClick={onClick} to={path}>
        {name}
      </Link>
    </li>
  )
}
