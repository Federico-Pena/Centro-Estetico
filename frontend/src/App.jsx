import { Footer } from './Components/Footer/Footer.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Toast } from './Components/Toast/Toast.jsx'
import { BrowserRouter } from 'react-router-dom'
import Rutas from './routes/Rutas.routes.jsx'
import { useRef } from 'react'
import { ArrowDown } from './Components/Icons/Icons.jsx'
import { useUserContext } from './Hooks/Context/useUserContext.jsx'

function App() {
  // const { isAllowedAccess } = useUserContext()
  const mainRef = useRef()
  const volverArriba = () => {
    mainRef.current.scrollTop = 0
  }
  const isAllowedAccess = true
  return (
    <BrowserRouter>
      <div
        className='grid w-full h-screen scroll-smooth overflow-auto  grid-rows-[min-content_1fr_min-content]'
        ref={mainRef}>
        <Toast />
        <Navbar isAllowedAccess={isAllowedAccess} />
        <Rutas isAllowedAccess={isAllowedAccess} mainRef={mainRef} />
        <button
          title='Volver Arriba'
          onClick={volverArriba}
          type='button'
          className='grid place-content-center fixed rotate-180 bottom-4 right-4 w-10 h-10 rounded-full bg-color-logo text-3xl shadow-2xl hover:scale-110 transition-transform'>
          <ArrowDown />
        </button>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
