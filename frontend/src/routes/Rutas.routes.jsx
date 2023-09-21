import { Route, Routes } from 'react-router-dom'
//import { UserContext } from '../context/userContext'
import { Suspense, lazy /* useContext */ } from 'react'
import { Loader } from '../components/Loader/Loader'
import { useAuth0 } from '@auth0/auth0-react'

const Home = lazy(() => import('../pages/Home/Home'))
const Contacto = lazy(() => import('../pages/Contacto/Contacto'))
const SobreMi = lazy(() => import('../pages/SobreMi/SobreMi'))
const Calendario = lazy(() => import('../pages/Calendario/Calendario'))
const Servicios = lazy(() => import('../pages/Servicios/Servicios'))
const Pacientes = lazy(() => import('../pages/Pacientes/PacientesPage'))
const Reservas = lazy(() => import('../pages/Reservas/Reservas'))

const Rutas = () => {
	//const { isAllowedAccess } = useContext(UserContext)
	const { isLoading } = useAuth0()
	if (isLoading) {
		return <Loader />
	}
	return (
		<Routes>
			<Route
				path='/'
				exact
				element={
					<Suspense fallback={<Loader />}>
						<Home />
					</Suspense>
				}
			/>
			<Route
				path='/servicios'
				element={
					<Suspense fallback={<Loader />}>
						<Servicios />
					</Suspense>
				}
			/>
			<Route
				path='/contacto'
				element={
					<Suspense fallback={<Loader />}>
						<Contacto />
					</Suspense>
				}
			/>
			<Route
				path='/sobreMi'
				element={
					<Suspense fallback={<Loader />}>
						<SobreMi />
					</Suspense>
				}
			/>
			<Route
				path='/reservas'
				element={
					<Suspense fallback={<Loader />}>
						{/* 						{isAllowedAccess ? <Reservas /> : <Home />} */}
						<Reservas />
					</Suspense>
				}
			/>
			<Route
				path='/pacientes'
				element={
					<Suspense fallback={<Loader />}>
						{/* {isAllowedAccess ? <Pacientes /> : <Home />} */}
						<Pacientes />
					</Suspense>
				}
			/>
			<Route
				path='/calendario'
				element={
					<Suspense fallback={<Loader />}>
						{/* {isAllowedAccess ? <Calendario /> : <Home />} */}
						<Calendario />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default Rutas
