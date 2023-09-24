import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './Navbar.scss'
import { useState } from 'react'
import { BotónSecundario } from '../Botones/BotonSecundario'
//import { UserContext } from '../../context/userContext'
import { Menu } from '../Icons/Icons'

const Navbar = () => {
	const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()
	const [openMenu, setOpenMenu] = useState(false)
	//const { isAllowedAccess } = useContext(UserContext)
	const handleLogin = () => {
		loginWithRedirect({
			authorizationParams: {
				redirect_uri: window.location.origin,
			},
		})
	}
	const handleLogout = () => {
		logout({
			logoutParams: {
				returnTo: window.location.origin,
			},
		})
	}
	const setMenuState = () => {
		setOpenMenu(!openMenu)
		window.scrollTo(0, 0)
	}
	return (
		<header className='header'>
			<div className='headerdiv'>
				<div
					onClick={() => (openMenu ? setMenuState() : setOpenMenu(false))}
					className={`${openMenu ? 'divLogo' : ''}`}>
					<Link
						to='/'
						onClick={() => (openMenu ? setMenuState() : setOpenMenu(false))}>
						<img src='/assets/icons/icon-192.png' alt='Logo' />
					</Link>
				</div>

				<i
					onClick={setMenuState}
					className={`${openMenu ? '' : 'label-close'}`}>
					<Menu />
				</i>
				<nav className={`navbar ${openMenu ? 'menuActive' : ''}`}>
					<ul>
						<li>
							<Link onClick={setMenuState} to='/'>
								Inicio
							</Link>
						</li>
						<li>
							<Link onClick={setMenuState} to='/Servicios'>
								Servicios
							</Link>
						</li>
						<li>
							<Link onClick={setMenuState} to='/pacientes'>
								Pacientes
							</Link>
						</li>
						{/* {isAllowedAccess && (
							<li>
								<Link onClick={setMenuState} to='/pacientes'>
									Pacientes
								</Link>
							</li>
						)} */}
						<li>
							<Link onClick={setMenuState} to='/reservas'>
								Reservas
							</Link>
						</li>
						{/* {isAllowedAccess && (
							<li>
								<Link onClick={setMenuState} to='/reservas'>
									Reservas
								</Link>
							</li>
						)} */}
						<li>
							<Link onClick={setMenuState} to='/calendario'>
								Calendario
							</Link>
						</li>
						{/* 	{isAllowedAccess && (
							<li>
								<Link onClick={setMenuState} to='/calendario'>
									Calendario
								</Link>
							</li>
						)} */}
						<li>
							<Link onClick={setMenuState} to='/SobreMi'>
								Sobre mi
							</Link>
						</li>
						<li>
							<Link onClick={setMenuState} to='/Contacto'>
								Contacto
							</Link>
						</li>
						{isAuthenticated ? (
							<li className='sesión'>
								<figure>
									<picture>
										<img
											src={
												user.picture ||
												'https://res.cloudinary.com/fotoscloudinary/image/upload/v1692319008/Masajes/user-photo_cfemko.webp'
											}
										/>
									</picture>
									<BotónSecundario
										texto={'Cerrar sesión'}
										onClickFunction={handleLogout}
										tipo={'button'}
									/>
								</figure>
							</li>
						) : (
							<li className='sesión'>
								<BotónSecundario
									texto={'Iniciar sesión'}
									onClickFunction={handleLogin}
									tipo={'button'}
								/>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
