import { useRef } from 'react'
import { formularioReservaSubmit } from './formularioReservaSubmit'
import { LabelInput } from '../LabelInput.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'
import { useFormReserva } from './useFormReserva.jsx'
import { HorasForm } from './HorasForm.jsx'
import { ResumerReserva } from './ResumerReserva.jsx'
import { Button } from '../../Botones/Button.jsx'
import { HOY_FECHA_STRING } from '../../../constantes.js'
import { useLoaderContext } from '../../../Hooks/Context/useLoaderContext.jsx'
import { useToastContext } from '../../../Hooks/Context/useToastContext.jsx'

const formRules = {
  nombre: { required: true },
  fecha: { required: true },
  hora: { required: true }
}
export const FormularioReserva = ({ observaciones, cerrarFormulario }) => {
  const { loading } = useLoaderContext()
  const { setMensaje } = useToastContext()
  const sectionFormRef = useRef()
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
    sectionFormRef.current.classList.add('animate-fadeOut')
  }
  const handleSetHora = (value) => {
    const hora = { target: { name: 'hora', value: value } }
    handleChange(hora)
  }
  return (
    <section
      id='sectionForm'
      ref={sectionFormRef}
      className='grid grid-rows-[50px_1fr] p-4 py-8'
      onAnimationEnd={(e) => {
        if (e.target.id === 'sectionForm' && e.animationName !== 'fadeIn') {
          cerrarFormulario()
        }
      }}>
      <h1 className='font-betonga text-color-violeta font-bold capitalize text-center underline underline-offset-4 text-2xl px-4'>
        Reserva
      </h1>
      <form
        onSubmit={handleSubmit}
        className='animate-fadeIn grid w-full max-w-md py-8 px-4 rounded-lg bg-color-logo gap-4 m-auto border border-black'>
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
          <Button
            className={'w-full'}
            tipo={'button'}
            onClickFunction={animationClose}
            texto={'Volver'}
          />
          <Button
            className={'w-full'}
            bgColor={true}
            tipo={'submit'}
            texto={'Enviar'}
            disabled={loading}
          />
        </footer>
      </form>
    </section>
  )
}
