import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getServicio = async (accessToken, id) => {
  const url = `${apiRoutes.servicios.obtener}${id}`
  const opciones = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  }
  const response = await fetcher(url, opciones)
  return response
}
