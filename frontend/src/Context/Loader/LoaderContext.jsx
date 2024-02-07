import { createContext, useState } from 'react'
import { LoaderApi } from '../../Components/Loader/LoaderApi.jsx'

export const LoaderContext = createContext()
export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading && <LoaderApi />}
      {children}
    </LoaderContext.Provider>
  )
}
