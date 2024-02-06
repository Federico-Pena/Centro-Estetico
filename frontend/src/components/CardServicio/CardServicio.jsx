import { useState } from 'react'
import { FormularioReserva } from '../Formularios/Reserva/FormularioReserva.jsx'
import { OpenInfo } from './OpenInfo.jsx'
import { CardServicioContent } from './CardServicioContent.jsx'
export const CardServicio = ({ servicio, className }) => {
  const [openInfo, setOpenInfo] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const imgSrc =
    servicio.imgPreview ||
    servicio.imagen?.secure_url ||
    'https://res.cloudinary.com/fotoscloudinary/image/upload/v1698805202/Portfolio/Centro%20Est%C3%A9tico/Servicios/dil9yusbug9ccrmxtgtb.png'

  const cerrarForm = () => {
    setOpenForm(false)
  }

  if (!servicio || Object.keys(servicio).length === 0) {
    return null
  }
  return (
    <>
      {openForm && (
        <FormularioReserva observaciones={servicio.nombre} cerrarFormulario={cerrarForm} />
      )}
      {openInfo ? (
        <OpenInfo
          setOpenInfo={setOpenInfo}
          imgSrc={imgSrc}
          servicio={servicio}
          setOpenForm={setOpenForm}
        />
      ) : (
        <CardServicioContent
          imgSrc={imgSrc}
          servicio={servicio}
          setOpenForm={setOpenForm}
          setOpenInfo={setOpenInfo}
        />
      )}
    </>
  )
}
