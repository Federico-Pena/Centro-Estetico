import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getServiciosNombresYTratamientos = async (accessToken, setMensaje) => {
  try {
    const url = apiRoutes.servicios.getServiciosNombresYTratamientos
    const opciones = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    }
    const res = await fetcher(url, opciones)
    const { error, mensaje, datos, status } = res
    if (status === 200) {
      setMensaje(mensaje)
      return datos
    } else {
      if (error) {
        setMensaje(error)
        return false
      }
    }
  } catch (error) {
    setMensaje('Ocurrió un error')
    return false
  }
}
