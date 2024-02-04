import { useContext, useRef } from 'react'
import { formularioReservaSubmit } from './formularioReservaSubmit'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import { LabelInput } from '../LabelInput.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'
import { useFormReserva } from './useFormReserva.jsx'
import { HorasForm } from './HorasForm.jsx'
import { ResumerReserva } from './ResumerReserva.jsx'
import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'
import { HOY_FECHA_STRING } from '../../../constantes.js'
import { LoaderContext } from '../../../Context/Loader/LoaderContext.jsx'

const formRules = {
  nombre: { required: true },
  fecha: { required: true },
  hora: { required: true }
}
export const FormularioReserva = ({ observaciones, cerrarFormulario }) => {
  const { loading } = useContext(LoaderContext)

  const sectionFormRef = useRef()
  const { setMensaje } = useContext(ToastContext)
  const initialForm = {
    nombre: '',
    fecha: '',
    hora: '',
    observaciones: observaciones || ''
  }
  const { errors, handleChange, values, validateForm } = useForm(initialForm, formRules)
  const { horasDisponibles } = useFormReserva(values.fecha)
  const esDomingo = new Date(values.fecha).getDay() === 6

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm() && !esDomingo && values.nombre
    if (isValid) {
      formularioReservaSubmit(values)
      animationClose()
    } else {
      setMensaje(`Faltan campos requeridos.`)
    }
  }
  const animationClose = () => {
    sectionFormRef.current.classList.add('animate-toastOut')
  }
  const handleSetHora = (value) => {
    const hora = { target: { name: 'hora', value: value } }
    handleChange(hora)
  }
  return (
    <section
      id='sectionForm'
      ref={sectionFormRef}
      className='fixed overflow-auto bg-gradient-to-b from-slate-50 to-color-verde-blanco py-8 inset-0 z-50 grid'
      onAnimationEnd={(e) => {
        if (e.target.id === 'sectionForm' && e.animationName !== 'fadeIn') {
          cerrarFormulario()
        }
      }}>
      <form
        onSubmit={handleSubmit}
        className='animate-fadeIn grid w-full max-w-md py-8 px-4 rounded-lg bg-color-logo gap-4 m-auto'>
        <h3 className='font-betonga text-color-violeta font-bold capitalize text-center underline underline-offset-4 text-2xl px-4'>
          Reserva
        </h3>
        <LabelInput
          errors={errors}
          labelText={'Nombre'}
          name={'nombre'}
          onChange={handleChange}
          placeholder={'Nombre'}
          type={'text'}
          value={values.nombre}
        />
        <LabelInput
          className={'w-full'}
          errors={errors}
          labelText={'Fecha'}
          name={'fecha'}
          onChange={(e) => {
            handleChange(e)
            handleSetHora('')
          }}
          type={'date'}
          value={values.fecha}
          min={HOY_FECHA_STRING.split('T')[0]}
        />
        {esDomingo ? (
          <span className='p-2 rounded-xl w-full text-center shadow-md bg-color-violeta text-slate-50'>
            * Los días domingos no se realizan reservas
          </span>
        ) : null}
        {horasDisponibles.length > 0 && (
          <>
            <HorasForm
              horasDisponibles={horasDisponibles}
              handleSetHora={handleSetHora}
              values={values}
            />
            {errors.hora && <small className='text-red-600'>* Este campo es requerido</small>}
          </>
        )}
        <TextAreaLabel
          disabled={true}
          value={values.observaciones}
          placeholder={'Observación'}
          onChange={handleChange}
          name={'observaciones'}
          labelText={'Observación'}
          error={errors.observaciones}
        />
        <ResumerReserva horasDisponibles={horasDisponibles} values={values} />
        <footer className='grid grid-flow-col pt-8 px-4 gap-4'>
          <BtnSecundario
            className='font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
            tipo={'button'}
            onClickFunction={animationClose}
            texto={'Volver'}
          />
          <BtnSecundario
            className={`${
              loading ? 'opacity-65' : ''
            } font-bold text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-transparent cursor-pointer`}
            tipo={'submit'}
            texto={'Enviar'}
            disabled={loading}
          />
        </footer>
      </form>
    </section>
  )
}
