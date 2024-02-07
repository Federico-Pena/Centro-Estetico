import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import { RUTAS } from '../constantes.js'
import { LoaderApi } from '../Components/Loader/LoaderApi.jsx'
const Home = lazy(() => import('../Pages/Home.jsx'))
const Servicios = lazy(() => import('../Pages/Servicios.jsx'))
const Contacto = lazy(() => import('../Pages/Contacto.jsx'))
const Nosotros = lazy(() => import('../Pages/Nosotros.jsx'))
const Administración = lazy(() => import('../Pages/Administración.jsx'))
const FormularioPaciente = lazy(() =>
  import('../Components/Formularios/Paciente/FormularioPaciente.jsx')
)
const FormularioReservaAdmin = lazy(() =>
  import('../Components/Formularios/Reserva/FormularioReservaAdmin.jsx')
)
const Calendario = lazy(() => import('../Pages/Calendario.jsx'))
const ReservasPaciente = lazy(() => import('../Components/Pacientes/ReservasPaciente.jsx'))
const Estadisticas = lazy(() => import('../Pages/Estadisticas.jsx'))
const FormTratamiento = lazy(() =>
  import('../Components/Formularios/Tratamiento/FormTratamiento.jsx')
)
const FormServicio = lazy(() => import('../Components/Formularios/Servicios/FormServicio.jsx'))

const Rutas = ({ isAllowedAccess, mainRef }) => {
  const location = useLocation()
  useEffect(() => {
    mainRef.current.scrollTop = 0
  }, [location, mainRef])

  return (
    <Routes>
      <Route
        path={RUTAS.user.inicio}
        exact
        element={
          <Suspense fallback={<LoaderApi />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={RUTAS.user.servicios}
        element={
          <Suspense fallback={<LoaderApi />}>
            <Servicios />
          </Suspense>
        }
      />
      <Route
        path={RUTAS.user.nosotros}
        exact
        element={
          <Suspense fallback={<LoaderApi />}>
            <Nosotros />
          </Suspense>
        }
      />
      <Route
        path={RUTAS.user.contacto}
        element={
          <Suspense fallback={<LoaderApi />}>
            <Contacto />
          </Suspense>
        }
      />
      {isAllowedAccess && (
        <>
          <Route
            path={RUTAS.admin.administracion}
            element={
              <Suspense fallback={<LoaderApi />}>
                <Administración />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.agregarTratamiento}
            element={
              <Suspense fallback={<LoaderApi />}>
                <FormTratamiento />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.editarTratamiento}
            element={
              <Suspense fallback={<LoaderApi />}>
                <FormTratamiento />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.agregarServicio}
            element={
              <Suspense fallback={<LoaderApi />}>
                <FormServicio />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.editarServicio}
            element={
              <Suspense fallback={<LoaderApi />}>
                <FormServicio />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.agregarPaciente}
            element={
              <Suspense fallback={<LoaderApi />}>
                <FormularioPaciente />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.editarPaciente}
            element={
              <Suspense fallback={<LoaderApi />}>
                <FormularioPaciente />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.agregarReserva}
            element={
              <Suspense fallback={<LoaderApi />}>
                <FormularioReservaAdmin />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.editarReserva}
            element={
              <Suspense fallback={<LoaderApi />}>
                <FormularioReservaAdmin />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.reservasPaciente}
            element={
              <Suspense fallback={<LoaderApi />}>
                <ReservasPaciente />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.calendario}
            element={
              <Suspense fallback={<LoaderApi />}>
                <Calendario />
              </Suspense>
            }
          />
          <Route
            path={RUTAS.admin.estadisticas}
            element={
              <Suspense fallback={<LoaderApi />}>
                <Estadisticas />
              </Suspense>
            }
          />
        </>
      )}

      <Route
        path='*'
        element={
          <Suspense fallback={<LoaderApi />}>
            <Home />
          </Suspense>
        }></Route>
    </Routes>
  )
}

export default Rutas
