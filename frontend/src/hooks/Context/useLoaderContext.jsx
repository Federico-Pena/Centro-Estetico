import { useContext } from 'react'
import { LoaderContext } from '../../Context/Loader/LoaderContext.jsx'

export const useLoaderContext = () => {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderContext')
  }
  return context
}
