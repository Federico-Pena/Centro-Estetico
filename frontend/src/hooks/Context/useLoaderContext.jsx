import { useContext } from 'react'
import { LoaderContext } from '../../Context/Loader/LoaderContext.jsx'

export const useLoaderContext = () => {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error('usePacientes must be used within a PacientesProvider')
  }
  return context
}
