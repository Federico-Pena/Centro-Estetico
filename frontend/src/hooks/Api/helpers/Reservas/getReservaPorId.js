import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getReservaPorId = async (accessToken, id) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const url = `${apiRoutes.reservas.gerReservaPorId}${id}`
  const response = await fetcher(url, options)
  return response
}
