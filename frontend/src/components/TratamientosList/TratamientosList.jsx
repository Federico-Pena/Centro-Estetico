import { useContext, useState } from 'react'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal'
import { TratamientoContext } from '../../context/Tratamiento/TratamientoContext.jsx'
import { ACTIONS_TRATAMIENTOS } from '../../context/Tratamiento/tratamientoReducer.js'
import { useTratamientos } from '../../Hooks/Api/Tratamiento/useTratamientos.jsx'
import { TratamientoListItem } from './TratamientoListItem.jsx'
import { BtnSecundario } from '../Botones/BtnSecundario.jsx'
import { Add } from '../Icons/Icons.jsx'
import { useNavigate } from 'react-router-dom'
import { RUTAS } from '../../constantes.js'
export const TratamientosList = () => {
  const { tratamiento, tratamientos, dispatch } = useContext(TratamientoContext)
  const { eliminarTratamiento } = useTratamientos()
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()
  const handleDelete = (tratamiento) => {
    dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_FILTRADO, payload: tratamiento })
    setModal(true)
  }
  const handleEdit = (tratamiento) => {
    dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_FILTRADO, payload: tratamiento })
    navigate(RUTAS.admin.editarTratamiento)
  }
  return (
    <>
      {modal && (
        <ConfirmationModal
          mensaje={`Desea borrar la cuponera ${tratamiento.descripcion}?.`}
          titulo={tratamiento.servicio.nombre}
          onCancel={() => setModal(false)}
          onConfirm={() => {
            setModal(false)
            eliminarTratamiento(tratamiento._id)
          }}
        />
      )}
      <article className='grid gap-4 md:grid-cols-2 xl:grid-cols-3 max-w-5xl m-auto'>
        <BtnSecundario
          onClickFunction={() => navigate(RUTAS.admin.agregarTratamiento)}
          tipo={'button'}
          texto={'Nuevo'}
          icono={<Add />}
          className={
            'col-span-full border border-color-violeta bg-color-violeta text-white flex items-center justify-center gap-2  max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity [&>span>svg]:text-xl'
          }
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
