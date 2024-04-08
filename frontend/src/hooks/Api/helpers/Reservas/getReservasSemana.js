import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getReservasSemana = async (accessToken, diaDeLaSemana) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const url = `${apiRoutes.reservas.deLaSemana}${diaDeLaSemana}`
  const response = await fetcher(url, options)

  return response
}
