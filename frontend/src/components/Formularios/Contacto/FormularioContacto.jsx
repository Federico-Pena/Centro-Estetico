import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { LabelInput } from '../LabelInput.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'
import { Button } from '../../Botones/Button.jsx'
import { useToastContext } from '../../../Hooks/Context/useToastContext.jsx'
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
  const { setMensaje } = useToastContext()
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
      className='py-8 px-4  rounded-xl max-w-lg w-full grid gap-4 m-auto  bg-color-verde-blanco border border-gray-300 shadow-lg'
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
      <Button
        className={'w-full'}
        id={'Costumbres'}
        disabled={cargando}
        tipo={'submit'}
        bgColor={true}
        texto={cargando ? 'Enviando' : 'Enviar'}
      />
    </form>
  )
}
