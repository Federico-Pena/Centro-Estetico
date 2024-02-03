import { useAuth0 } from '@auth0/auth0-react'
import { BtnSecundario } from '../Botones/BtnSecundario.jsx'

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
      <BtnSecundario
        texto={'Cerrar sesión'}
        onClickFunction={handleLogout}
        tipo={'button'}
        className={
          'border-[1px] text-xs rounded-md grid place-content-center py-2 px-4 transition-opacity hover:opacity-50'
        }
      />
    </li>
  ) : (
    <li className='sesión'>
      <BtnSecundario
        className={
          'border-[1px] text-xs rounded-md grid place-content-center py-2 px-4 transition-opacity hover:opacity-50'
        }
        texto={'Iniciar sesión'}
        onClickFunction={handleLogin}
        tipo={'button'}
      />
    </li>
  )
}
