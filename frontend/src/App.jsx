import { useAuth0 } from '@auth0/auth0-react'
import { Footer } from './Components/Footer/Footer.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Toast } from './Components/Toast/Toast.jsx'
import { MensajeProvider } from './Context/Toast/mensajeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from './Components/Loader/Loader.jsx'
import Rutas from './routes/Rutas.routes.jsx'
import RutasAdmin from './routes/RutasAdmin.routes.jsx'

function App() {
  const { isLoading } = useAuth0()
  // const { isAllowedAccess } = useContext(UserContext)

  const isAllowedAccess = true

  if (isLoading) {
    return <Loader />
  }
  return (
    <MensajeProvider>
      <BrowserRouter>
        <div className=' bg-gradient-to-b from-white to-color-verde-blanco relative grid w-screen min-h-screen grid-rows-[min-content_1fr_min-content]'>
          <Toast />
          <Navbar isAllowedAccess={isAllowedAccess} />
          {isAllowedAccess ? <RutasAdmin /> : <Rutas />}
          <Footer />
        </div>
      </BrowserRouter>
    </MensajeProvider>
  )
}

export default App
