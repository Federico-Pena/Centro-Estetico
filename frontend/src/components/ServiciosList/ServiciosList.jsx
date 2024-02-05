import { useContext, useState } from 'react'
import { ServiciosContext } from '../../context/Servicios/ServiciosContext.jsx'
import { ACTIONS_SERVICIOS } from '../../context/Servicios/serviciosReducer.js'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal.jsx'
import { useServicio } from '../../Hooks/Api/Servicio/useServicio.jsx'
import { ServicioListItem } from './ServicioListItem.jsx'
import { Button } from '../Botones/Button.jsx'
import { Add } from '../Icons/Icons.jsx'
import { useNavigate } from 'react-router-dom'
import { RUTAS } from '../../constantes.js'
export const ServiciosList = () => {
  const [modal, setModal] = useState(false)
  const { servicio, servicios, dispatch } = useContext(ServiciosContext)
  const { eliminarServicio } = useServicio()
  const navigate = useNavigate()
  const handleBorrarServicio = (ser) => {
    dispatch({
      type: ACTIONS_SERVICIOS.SET_SERVICIO,
      payload: ser
    })
    setModal(true)
  }
  const handleEditarServicio = (servicio) => {
    navigate(RUTAS.admin.editarServicio, { state: { servicio: servicio } })
  }
  return (
    <>
      <article className='grid gap-4 max-w-xl m-auto w-full'>
        <Button
          onClickFunction={() => navigate(RUTAS.admin.agregarServicio)}
          tipo={'button'}
          texto={'Nuevo'}
          icono={<Add />}
          className={'grid grid-flow-col place-content-center gap-2'}
        />
        {servicios instanceof Array &&
          servicios.map((ser) => (
            <ServicioListItem
              ser={ser}
              key={ser._id}
              handleBorrarServicio={handleBorrarServicio}
              handleEditarServicio={handleEditarServicio}
            />
          ))}
      </article>
      {modal && (
        <ConfirmationModal
          mensaje={`Desea borrar el servicio?. Se eliminaran las cuponeras asociadas y no se podrán hacer mas reservas.`}
          titulo={servicio.nombre}
          onCancel={() => setModal(false)}
          onConfirm={() => {
            setModal(false)
            eliminarServicio(servicio._id)
          }}
        />
      )}
    </>
  )
}
