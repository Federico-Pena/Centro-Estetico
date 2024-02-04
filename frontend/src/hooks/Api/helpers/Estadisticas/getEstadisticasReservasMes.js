import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getEstadisticasReservasMes = async (accessToken, year, mes) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const url = `${apiRoutes.estadisticas.reservasMes}${year}/${mes}`
  const response = await fetcher(url, options)
  return response
}
