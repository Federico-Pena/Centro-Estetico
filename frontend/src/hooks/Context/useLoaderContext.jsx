import { useContext } from 'react'
import { LoaderContext } from '../../Context/Loader/LoaderContext.jsx'

export const useLoaderContext = () => {
  const context = useContext(LoaderContext)
  return context
}
