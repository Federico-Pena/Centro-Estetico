/**
 * @param {object} params - Parámetros necesarios para crear la respuesta.
 * @param {object} params.res - El objeto de respuesta de Express.
 * @param {number} params.status - El código de estado HTTP de la respuesta.
 * @param {string} params.error - El mensaje de error (opcional).
 * @param {string} params.mensaje - El mensaje a mostrar con los datos (opcional).
 * @param {any} params.datos - Los datos a incluir en la respuesta (opcional).
 * @returns {Promise<object>} - La respuesta en formato JSON.
 */
export const crearRespuestaJSON = ({ res, status, error, datos, mensaje }) => {
  const objError = {
    status: status || 500,
    error: error || undefined,
    mensaje: mensaje || undefined,
    datos: datos || undefined
  }
  return res.status(status).json(objError)
}
