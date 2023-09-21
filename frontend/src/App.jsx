import Navbar from './components/Navbar/Navbar'
import { HashRouter } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Toast } from './components/Toast/Toast'
import Rutas from './routes/Rutas.routes'
import { MensajeProvider } from './context/mensajeContext'
import { useAuth0 } from '@auth0/auth0-react'
import { Loader } from './components/Loader/Loader'
const App = () => {
	const { isLoading } = useAuth0()
	if (isLoading) {
		return <Loader />
	}
	return (
		<MensajeProvider>
			<HashRouter>
				<Toast />
				<Navbar />
				<Rutas />
				<Footer />
			</HashRouter>
		</MensajeProvider>
	)
}

export default App
