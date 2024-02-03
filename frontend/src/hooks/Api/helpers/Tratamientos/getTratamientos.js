import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getTratamientos = async (accessToken) => {
  const url = apiRoutes.tratamientos.getTratamientos
  const opciones = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  }
  const response = await fetcher(url, opciones)
  return response
}
