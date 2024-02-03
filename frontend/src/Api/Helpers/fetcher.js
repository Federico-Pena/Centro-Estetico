export const fetcher = async (url, options) => {
  try {
    if (!url) {
      throw new Error('URL no definida')
    }
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    return {
      error: 'Ocurrió un error inesperado'
    }
  }
}
