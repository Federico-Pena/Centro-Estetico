import { useRef, useState } from 'react'
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
import { RUTAS } from '../../../constantes.js'
import { useServiciosContext } from '../../../Hooks/Context/useServiciosContext.jsx'
import { ACTIONS_SERVICIOS } from '../../../Context/Servicios/serviciosReducer.js'
import { useToastContext } from '../../../Hooks/Context/useToastContext.jsx'
import { OpenInfo } from '../../CardServicio/OpenInfo.jsx'

const FormServicio = () => {
  const location = useLocation()
  const stateServicio = location.state?.servicio
  const navigate = useNavigate()
  const edicion = location.pathname === RUTAS.admin.editarServicio
  const { dispatch } = useServiciosContext()
  const { setMensaje } = useToastContext()
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
    if (isValid) {
      const datos = formDataServicio(values)
      const res = edicion ? await editarServicio(datos) : await agregarServicio(datos)
      if (res) {
        cerrarForm()
      }
    } else {
      setMensaje('Faltan campos requeridos')
    }
  }

  return (
    <section className={`grid grid-rows-[auto_1fr] gap-4 px-4 py-8`} ref={formServicioContainerRef}>
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
          className='animate-fadeIn grid gap-4 px-4 py-8 rounded-lg max-w-lg self-start justify-self-center w-full bg-color-verde-blanco border border-gray-300 shadow-lg'
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
      {previewServicio && (
        <section className='grid gap-8'>
          <h2 className='underline underline-offset-4 w-full text-center text-color-violeta font-bold font-betonga text-2xl tracking-widest'>
            Primera parte
          </h2>
          <CardServicio servicio={values} />
          <h2 className='underline underline-offset-4 w-full text-center text-color-violeta font-bold font-betonga text-2xl tracking-widest'>
            Ver mas
          </h2>
          <OpenInfo imgSrc={values.imagen?.secure_url || values.imgPreview} servicio={values} />
        </section>
      )}
    </section>
  )
}
export default FormServicio
