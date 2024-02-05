import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../Botones/Button.jsx'

export const NavbarSesion = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const handleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  }
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    })
  }
  return isAuthenticated ? (
    <li className='sesión'>
      <button
        title='Cerrar Sesión'
        onClick={handleLogout}
        type='Button'
        className='relative border-[1px] text-xs rounded-md grid place-content-center py-2 px-4 after:absolute after:w-full after:h-0 after:bg-white after:bg-opacity-30 hover:after:h-full after:transition-all'>
        Cerrar Sesión
      </button>
    </li>
  ) : (
    <li className='sesión'>
      <button
        title='Iniciar sesión'
        onClick={handleLogin}
        type='Button'
        className='relative border-[1px] text-xs rounded-md grid place-content-center py-2 px-4 after:absolute after:w-full after:h-0 after:bg-white after:bg-opacity-30 hover:after:h-full after:transition-all'>
        Iniciar sesión
      </button>
    </li>
  )
}
