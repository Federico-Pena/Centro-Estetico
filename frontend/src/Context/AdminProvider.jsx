import { EstadisticasProvider } from './Estadisticas/EstadisticasContext.jsx'
import { PacientesProvider } from './Pacientes/PacientesContext.jsx'
import { ReservasProvider } from './Reservas/ReservasContext.jsx'
import { ServiciosProvider } from './Servicios/ServiciosContext.jsx'
import { TratamientosProvider } from './Tratamiento/TratamientoContext.jsx'

const AdminProvider = ({ children }) => (
  <EstadisticasProvider>
    <TratamientosProvider>
      <ServiciosProvider>
        <ReservasProvider>
          <PacientesProvider>{children}</PacientesProvider>
        </ReservasProvider>
      </ServiciosProvider>
    </TratamientosProvider>
  </EstadisticasProvider>
)
export default AdminProvider
