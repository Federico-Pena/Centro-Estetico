import { Route, Routes } from 'react-router-dom'
//import { UserContext } from '../context/userContext'
import { Suspense, lazy } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Loader } from '../Components/Loader/Loader.jsx'
import { RUTAS } from '../constantes.js'

const Home = lazy(() => import('../Pages/Home.jsx'))
const Servicios = lazy(() => import('../Pages/Servicios.jsx'))
const Contacto = lazy(() => import('../Pages/Contacto.jsx'))
const Nosotros = lazy(() => import('../Pages/Nosotros.jsx'))
import('../Components/Formularios/Reserva/FormularioReservaAdmin.jsx')

const Rutas = () => {
  const { isLoading } = useAuth0()
  if (isLoading) {
    return <Loader />
  }
  return (
    <Routes>
      <Route
        path={RUTAS.user.inicio}
        exact
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={RUTAS.user.servicios}
        element={
          <Suspense fallback={<Loader />}>
            <Servicios />
          </Suspense>
        }
      />
      <Route
        path={RUTAS.user.nosotros}
        exact
        element={
          <Suspense fallback={<Loader />}>
            <Nosotros />
          </Suspense>
        }
      />
      <Route
        path={RUTAS.user.contacto}
        element={
          <Suspense fallback={<Loader />}>
            <Contacto />
          </Suspense>
        }
      />
      <Route
        path='*'
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }></Route>
    </Routes>
  )
}

export default Rutas
