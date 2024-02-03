export const formatFechaActualIso = (fecha) => {
  const timeZoneOffset = fecha.getTimezoneOffset() * 60000
  const localISOTime = new Date(Date.now() - timeZoneOffset)
    .toISOString()
    .split('.')[0]
    .slice(0, -3)
  return localISOTime
}
