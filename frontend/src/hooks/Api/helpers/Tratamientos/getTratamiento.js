import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getTratamiento = async (accessToken, id) => {
  const url = `${apiRoutes.tratamientos.obtener}${id}`
  const opciones = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  }
  const response = await fetcher(url, opciones)
  return response
}
