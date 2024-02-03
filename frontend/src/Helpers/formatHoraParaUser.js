export const formatHoraParaUser = (fecha) => {
  const hora = new Date(fecha)
  return hora
    .toLocaleTimeString('es-UY', {
      hour12: false,
      timeZone: 'America/Montevideo'
    })
    .split(':', 2)
    .join(':')
}
