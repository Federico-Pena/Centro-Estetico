import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getEstadisticasReservasAno = async (accessToken, year) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const url = `${apiRoutes.estadisticas.reservasAno}${year}`
  const response = await fetcher(url, options)
  return response
}
