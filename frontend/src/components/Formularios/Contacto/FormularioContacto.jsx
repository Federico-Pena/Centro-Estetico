import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { LabelInput } from '../LabelInput.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'
const initialForm = {
  nombre: '',
  email: '',
  mensaje: ''
}
const validationRules = {
  nombre: {
    required: true
  },
  email: { required: true },
  mensaje: { required: true }
}
export const FormularioContacto = () => {
  const [cargando, setCargando] = useState(false)
  const { setMensaje } = useContext(ToastContext)
  const { handleChange, errors, values, validateForm } = useForm(initialForm, validationRules)
  const form = useRef()
  const emailService = import.meta.env.VITE_EMAIL_JS_SERVICE
  const emailTemplate = import.meta.env.VITE_EMAIL_JS_TEMPLATE
  const emailPublicID = import.meta.env.VITE_EMAIL_JS_PUBLIC_ID

  const submitContacto = async (e) => {
    e.preventDefault()
    const formulario = form.current
    if (validateForm()) {
      try {
        setCargando(true)
        await emailjs.sendForm(emailService, emailTemplate, formulario, emailPublicID)
        setMensaje('Mensaje enviado')
      } catch (error) {
        setMensaje('Ocurrió un error')
      }
      setCargando(false)
      formulario.reset()
    } else {
      setMensaje('Faltan campos requeridos')
    }
  }
  return (
    <form
      className='py-8 px-4 border border-slate-600 rounded max-w-md grid gap-4 m-auto bg-color-logo'
      ref={form}
      onSubmit={submitContacto}>
      <h2 className='font-betonga text-color-violeta text-2xl font-bold'>Contáctenos</h2>
      <h3 className='mb-8'>Con gusto contestaremos cualquier consulta</h3>
      <LabelInput
        labelText={'Nombre'}
        errors={errors}
        onChange={handleChange}
        type={'text'}
        placeholder={'Nombre'}
        value={values.nombre}
        name={'nombre'}
      />
      <LabelInput
        labelText={'Email'}
        errors={errors}
        onChange={handleChange}
        type={'email'}
        placeholder={'Email'}
        value={values.email}
        name={'email'}
      />
      <TextAreaLabel
        labelText={'Mensaje'}
        name={'mensaje'}
        placeholder={'Mensaje'}
        value={values.mensaje}
        error={errors.mensaje}
        onChange={handleChange}
      />
      <button
        className='font-bold mt-8 mx-auto max-w-fit h-max text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md grid place-content-center py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50'
        type='submit'>
        {cargando ? 'Enviando' : 'Enviar'}
      </button>
    </form>
  )
}
