import { EstadisticasProvider } from './Estadisticas/EstadisticasContext.jsx'
import { LoaderProvider } from './Loader/LoaderContext.jsx'
import { PacientesProvider } from './Pacientes/PacientesContext.jsx'
import { ReservasProvider } from './Reservas/ReservasContext.jsx'
import { ServiciosProvider } from './Servicios/ServiciosContext.jsx'
import { MensajeProvider } from './Toast/ToastContext.jsx'
import { TratamientosProvider } from './Tratamiento/TratamientoContext.jsx'

const AdminProvider = ({ children }) => (
  <LoaderProvider>
    <MensajeProvider>
      <EstadisticasProvider>
        <TratamientosProvider>
          <ServiciosProvider>
            <ReservasProvider>
              <PacientesProvider>{children}</PacientesProvider>
            </ReservasProvider>
          </ServiciosProvider>
        </TratamientosProvider>
      </EstadisticasProvider>
    </MensajeProvider>
  </LoaderProvider>
)
export default AdminProvider
