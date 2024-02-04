import { useContext } from 'react'
import { LoaderContext } from '../../Context/Loader/LoaderContext.jsx'

export const LoaderApi = () => {
  const { loading } = useContext(LoaderContext)

  return (
    loading && (
      <div className='fixed inset-0 grid place-content-center z-50 bg-white bg-opacity-5 backdrop-blur-xl'>
        <span className='w-3 h-3 rounded-full block my-4 mx-auto relative text-color-violeta animate-animloader'></span>
      </div>
    )
  )
}
