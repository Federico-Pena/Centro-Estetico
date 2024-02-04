import { useContext, useState } from 'react'
import { ServiciosContext } from '../../context/Servicios/ServiciosContext.jsx'
import { ACTIONS_SERVICIOS } from '../../context/Servicios/serviciosReducer.js'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal.jsx'
import { useServicio } from '../../Hooks/Api/Servicio/useServicio.jsx'
import { ServicioListItem } from './ServicioListItem.jsx'
import { BtnSecundario } from '../Botones/BtnSecundario.jsx'
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
    dispatch({ type: ACTIONS_SERVICIOS.SET_SERVICIO, payload: servicio })
    navigate(RUTAS.admin.editarServicio)
  }
  return (
    <>
      <article className='grid gap-4 max-w-xl m-auto w-full'>
        <BtnSecundario
          onClickFunction={() => navigate(RUTAS.admin.agregarServicio)}
          tipo={'button'}
          texto={'Nuevo'}
          icono={<Add />}
          className={
            'border border-color-violeta bg-color-violeta text-white flex items-center justify-center gap-2 max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity [&>span>svg]:text-xl'
          }
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
