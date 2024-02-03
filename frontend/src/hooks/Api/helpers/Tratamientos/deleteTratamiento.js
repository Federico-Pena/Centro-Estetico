import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const deleteTratamiento = async (accessToken, id) => {
  const url = `${apiRoutes.tratamientos.deleteTratamiento}${id}`
  const opciones = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const response = await fetcher(url, opciones)
  return response
}
