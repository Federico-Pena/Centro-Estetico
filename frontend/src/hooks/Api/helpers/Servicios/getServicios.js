import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getServicios = async (accessToken) => {
  const url = apiRoutes.servicios.getServicios
  const opciones = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  }
  const res = await fetcher(url, opciones)
  return res
}
