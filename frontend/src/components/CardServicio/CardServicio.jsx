import { CardServicioContent } from './CardServicioContent.jsx'
export const CardServicio = ({ servicio, abrirMasInfo, reservar }) => {
  const imgSrc =
    servicio.imgPreview ||
    servicio.imagen?.secure_url ||
    'https://res.cloudinary.com/fotoscloudinary/image/upload/v1695323606/Portfolio/Centro%20Est%C3%A9tico/icon-192_fwqand.png'

  if (!servicio || Object.keys(servicio).length === 0) {
    return null
  }
  return (
    <CardServicioContent
      imgSrc={imgSrc}
      servicio={servicio}
      reservar={() => reservar(servicio)}
      abrirMasInfo={() => abrirMasInfo(servicio, imgSrc)}
    />
  )
}
