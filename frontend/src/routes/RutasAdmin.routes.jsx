import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Loader } from '../Components/Loader/Loader.jsx'
import { FormTratamiento } from '../Components/Formularios/Tratamiento/FormTratamiento.jsx'
import { FormServicio } from '../Components/Formularios/Servicios/FormServicio.jsx'
import { RUTAS } from '../constantes.js'
import AdminProvider from '../Context/AdminProvider.jsx'
import FormularioPaciente from '../Components/Formularios/Paciente/FormularioPaciente.jsx'
import Estadisticas from '../Pages/Estadisticas.jsx'
const Home = lazy(() => import('../Pages/Home.jsx'))
const Servicios = lazy(() => import('../Pages/Servicios.jsx'))
const Contacto = lazy(() => import('../Pages/Contacto.jsx'))
const Nosotros = lazy(() => import('../Pages/Nosotros.jsx'))
const Administración = lazy(() => import('../Pages/Administración.jsx'))
const Calendario = lazy(() => import('../Pages/Calendario.jsx'))
const ReservasPaciente = lazy(() => import('../Components/Pacientes/ReservasPaciente.jsx'))
const FormularioReservaAdmin = lazy(() =>
  import('../Components/Formularios/Reserva/FormularioReservaAdmin.jsx')
)

export const RutasAdmin = () => {
  const { isLoading } = useAuth0()
  if (isLoading) {
    return <Loader />
  }
  return (
    <AdminProvider>
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
          path={RUTAS.admin.administracion}
          element={
            <Suspense fallback={<Loader />}>
              <Administración />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.agregarTratamiento}
          element={
            <Suspense fallback={<Loader />}>
              <FormTratamiento />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.editarTratamiento}
          element={
            <Suspense fallback={<Loader />}>
              <FormTratamiento />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.agregarServicio}
          element={
            <Suspense fallback={<Loader />}>
              <FormServicio />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.editarServicio}
          element={
            <Suspense fallback={<Loader />}>
              <FormServicio />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.agregarPaciente}
          element={
            <Suspense fallback={<Loader />}>
              <FormularioPaciente />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.editarPaciente}
          element={
            <Suspense fallback={<Loader />}>
              <FormularioPaciente />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.agregarReserva}
          element={
            <Suspense fallback={<Loader />}>
              <FormularioReservaAdmin />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.editarReserva}
          element={
            <Suspense fallback={<Loader />}>
              <FormularioReservaAdmin />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.reservasPaciente}
          element={
            <Suspense fallback={<Loader />}>
              <ReservasPaciente />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.calendario}
          element={
            <Suspense fallback={<Loader />}>
              <Calendario />
            </Suspense>
          }
        />
        <Route
          path={RUTAS.admin.estadisticas}
          element={
            <Suspense fallback={<Loader />}>
              <Estadisticas />
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
    </AdminProvider>
  )
}
export default RutasAdmin
