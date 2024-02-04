import { useAuth0 } from '@auth0/auth0-react'
import { Footer } from './Components/Footer/Footer.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Toast } from './Components/Toast/Toast.jsx'
import { MensajeProvider } from './Context/Toast/mensajeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from './Components/Loader/Loader.jsx'
import Rutas from './routes/Rutas.routes.jsx'
import RutasAdmin from './routes/RutasAdmin.routes.jsx'
import { useRef } from 'react'
import { BtnSecundario } from './Components/Botones/BtnSecundario.jsx'
import { ArrowDown } from './Components/Icons/Icons.jsx'
import { LoaderProvider } from './Context/Loader/LoaderContext.jsx'
import { LoaderApi } from './Components/Loader/LoaderApi.jsx'

function App() {
  const { isLoading } = useAuth0()
  // const { isAllowedAccess } = useContext(UserContext)
  const mainRef = useRef()
  const isAllowedAccess = true

  if (isLoading) {
    return <Loader />
  }
  const volverArriba = () => {
    mainRef.current.scrollTop = 0
  }
  return (
    <LoaderProvider>
      <MensajeProvider>
        <BrowserRouter>
          <div
            className='relative grid w-screen h-screen grid-rows-[min-content_1fr_min-content] overflow-scroll scroll-smooth'
            ref={mainRef}>
            <Toast />
            <LoaderApi />
            <Navbar isAllowedAccess={isAllowedAccess} />
            {isAllowedAccess ? <RutasAdmin /> : <Rutas />}
            <BtnSecundario
              tipo={'button'}
              onClickFunction={volverArriba}
              icono={<ArrowDown />}
              className={
                'grid place-content-center fixed rotate-180 bottom-4 right-4 w-10 h-10 rounded-full bg-color-logo text-3xl shadow-2xl hover:scale-110 transition-transform'
              }
            />
            <Footer />
          </div>
        </BrowserRouter>
      </MensajeProvider>
    </LoaderProvider>
  )
}

export default App
