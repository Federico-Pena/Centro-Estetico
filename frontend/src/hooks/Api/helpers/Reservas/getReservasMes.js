import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getReservasMes = async (accessToken, diaDelMes) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const url = `${apiRoutes.reservas.delMes}${diaDelMes}`
  const response = await fetcher(url, options)
  return response
}
