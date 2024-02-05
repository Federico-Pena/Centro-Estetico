import { useContext, useRef, useState } from 'react'
import { formDataServicio } from './formDataServicio'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { Button } from '../../Botones/Button.jsx'
import { useServicio } from '../../../Hooks/Api/Servicio/useServicio.jsx'
import { CardServicio } from '../../CardServicio/CardServicio.jsx'
import { DialogForm } from './DialogForm.jsx'
import { PrimerParte } from './PrimerParte.jsx'
import { SegundaParte } from './SegundaParte.jsx'
import { HeaderFormServicio } from './HeaderFormServicio.jsx'
import { initialFormData, validationRules } from './initialFormYRules.js'
import { useLocation, useNavigate } from 'react-router-dom'
import { ServiciosContext } from '../../../context/Servicios/ServiciosContext.jsx'
import { RUTAS } from '../../../constantes.js'
import { ACTIONS_SERVICIOS } from '../../../context/Servicios/serviciosReducer.js'

export const FormServicio = () => {
  const location = useLocation()
  const stateServicio = location.state?.servicio
  const navigate = useNavigate()
  const edicion = location.pathname === RUTAS.admin.editarServicio
  const { dispatch } = useContext(ServiciosContext)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [masInfo, setMasInfo] = useState(false)
  const [previewServicio, setPreviewServicio] = useState(false)
  const [servicio] = useState(stateServicio || initialFormData)
  const formServicioContainerRef = useRef()
  const { editarServicio, agregarServicio } = useServicio()
  const { handleChange, values, validateForm, errors, resetForm } = useForm(
    servicio,
    validationRules
  )

  const openDialog = () => {
    setIsDialogOpen(true)
  }
  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  const handleVerServicio = () => {
    setPreviewServicio(true)
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }
  const cerrarForm = () => {
    setPreviewServicio(false)
    resetForm()
    dispatch({ type: ACTIONS_SERVICIOS.SET_SERVICIO, payload: null })
    navigate(-1)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validateForm()
    if (!isValid) {
      return
    }
    const datos = formDataServicio(values)
    const res = edicion ? await editarServicio(datos) : await agregarServicio(datos)
    if (res) {
      cerrarForm()
    }
  }
  return (
    <section className={`grid gap-4 px-4 py-8`} ref={formServicioContainerRef}>
      {!previewServicio && (
        <h1 className='uppercase w-full text-center text-color-violeta font-bold font-betonga text-2xl tracking-widest'>
          {edicion ? 'Editar servicio' : 'Agregar servicio'}
        </h1>
      )}
      {previewServicio && (
        <Button
          className={'m-auto'}
          onClickFunction={() => setPreviewServicio(false)}
          texto={'Cerrar'}
          tipo={'button'}
        />
      )}
      {!previewServicio && (
        <form
          onSubmit={handleSubmit}
          className='animate-fadeIn bg-color-logo grid gap-4 px-4 py-8 rounded-lg max-w-lg m-auto w-full border border-black'
          title='Formulario agregar servicio'>
          <HeaderFormServicio masInfo={masInfo} setMasInfo={setMasInfo} />
          <PrimerParte
            edicion={edicion}
            errors={errors}
            handleChange={handleChange}
            masInfo={masInfo}
            servicio={servicio}
            values={values}
          />
          <SegundaParte
            errors={errors}
            handleChange={handleChange}
            handleVerServicio={handleVerServicio}
            masInfo={masInfo}
            openDialog={openDialog}
            values={values}
          />
          <footer className='grid grid-flow-col gap-2'>
            <Button className={'w-full'} bgColor={true} tipo={'submit'} texto={'Guardar'} />
            <Button
              className={'w-full'}
              onClickFunction={cerrarForm}
              texto={'Cerrar'}
              tipo={'button'}
            />
          </footer>
        </form>
      )}

      {isDialogOpen && (
        <DialogForm closeDialog={closeDialog} handleChange={handleChange} values={values} />
      )}
      {previewServicio && <CardServicio servicio={values} className={'m-auto'} />}
    </section>
  )
}
