import { useState } from 'react'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal'
import { ACTIONS_TRATAMIENTOS } from '../../context/Tratamiento/tratamientoReducer.js'
import { useTratamientos } from '../../Hooks/Api/Tratamiento/useTratamientos.jsx'
import { TratamientoListItem } from './TratamientoListItem.jsx'
import { Button } from '../Botones/Button.jsx'
import { Add } from '../Icons/Icons.jsx'
import { useNavigate } from 'react-router-dom'
import { RUTAS } from '../../constantes.js'
import { useTratamientoContext } from '../../Hooks/Context/useTratamientoContext.jsx'
export const TratamientosList = () => {
  const { tratamiento, tratamientos, dispatch } = useTratamientoContext()
  const { eliminarTratamiento } = useTratamientos()
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()
  const handleDelete = (tratamiento) => {
    dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_FILTRADO, payload: tratamiento })
    setModal(true)
  }
  const handleEdit = (tratamiento) => {
    dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_FILTRADO, payload: tratamiento })
    navigate(RUTAS.admin.editarTratamiento, { state: { tratamiento: tratamiento } })
  }
  return (
    <>
      {modal && (
        <ConfirmationModal
          mensaje={`Desea borrar el tratamiento ${tratamiento.descripcion}?.`}
          titulo={tratamiento.servicio.nombre}
          onCancel={() => setModal(false)}
          onConfirm={() => {
            setModal(false)
            eliminarTratamiento(tratamiento._id)
          }}
        />
      )}
      <article className='grid gap-4 md:grid-cols-2 xl:grid-cols-3 max-w-5xl m-auto'>
        <Button
          onClickFunction={() => navigate(RUTAS.admin.agregarTratamiento)}
          tipo={'button'}
          texto={'Nuevo'}
          icono={<Add />}
          className={'col-span-full grid grid-flow-col gap-2 place-content-center'}
        />
        {tratamientos.length > 0
          ? tratamientos.map((trata) => (
              <TratamientoListItem
                key={trata._id}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                tratamiento={trata}
              />
            ))
          : null}
      </article>
    </>
  )
}
