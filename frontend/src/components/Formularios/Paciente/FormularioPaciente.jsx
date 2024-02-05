import { useContext, useState } from 'react'
import { formDataPaciente } from './formDataPaciente'
import { Button } from '../../Botones/Button.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { initialForm, validationRules } from './initialFormYRules.js'
import { DatosPersonales } from './DatosPersonales.jsx'
import { Costumbres } from './Costumbres.jsx'
import { Afecciones } from './Afecciones.jsx'
import { SelectServicio } from './SelectServicio.jsx'
import { HeaderForm } from './HeaderForm.jsx'
import { usePaciente } from '../../../Hooks/Api/Pacientes/usePaciente.jsx'
import { RUTAS } from '../../../constantes.js'
import { useLocation, useNavigate } from 'react-router-dom'
import { ACTIONS_PACIENTES } from '../../../Context/Pacientes/reducerPaciente.js'
import { usePacienteContext } from '../../../Hooks/Context/usePacienteContext.jsx'

const FormularioPaciente = () => {
  const location = useLocation()
  const pacienteState = location.state?.paciente
  const navigate = useNavigate()
  const edicion = location.pathname === RUTAS.admin.editarPaciente

  const { paciente: pac, dispatch } = usePacienteContext()
  const [paciente] = useState(initialForm(pac || pacienteState))
  const { handleChange, values, validateForm, errors, resetForm } = useForm(
    paciente,
    validationRules
  )
  const { agregarPaciente, editarPaciente } = usePaciente()
  const [seccion, setSeccion] = useState({
    Personales: true,
    Costumbres: false,
    Afecciones: false,
    Servicio: false
  })
  const cambiarActivo = (e) => {
    const opcion = e.target.id
    const nuevoActivo = { ...seccion }
    nuevoActivo[opcion] = !seccion[opcion]
    if (nuevoActivo[opcion]) {
      for (const key in nuevoActivo) {
        if (key !== opcion) {
          nuevoActivo[key] = false
        }
      }
    }
    setSeccion(nuevoActivo)
  }
  const cerrarForm = () => {
    resetForm()
    dispatch({ type: ACTIONS_PACIENTES.SET_PACIENTE, payload: null })
    navigate(-1)
  }

  const submitAgregar = async (e) => {
    e.preventDefault()
    const isValid = validateForm()
    if (isValid) {
      const nuevoUsuario = formDataPaciente(values)
      const res = edicion
        ? await editarPaciente(nuevoUsuario, pac._id)
        : await agregarPaciente(nuevoUsuario)
      if (res) {
        cerrarForm()
      }
    }
  }

  return (
    <section className='grid p-4'>
      <h1 className='font-betonga font-bold text-color-violeta text-2xl tracking-wider text-center mb-4'>
        {edicion ? 'Editar ' : 'Agregar '}Paciente
      </h1>
      <form
        className='animate-toastIn bg-color-logo rounded-lg p-4 max-w-2xl m-auto w-full grid gap-4 border border-black'
        onSubmit={submitAgregar}>
        <HeaderForm cambiarActivo={cambiarActivo} seccion={seccion} />
        {seccion.Personales && (
          <>
            <h3 className='font-betonga font-bold text-color-violeta text-xl tracking-wider'>
              Datos Personales
            </h3>
            <DatosPersonales
              edicion={edicion}
              errors={errors}
              handleChange={handleChange}
              values={values}
            />
          </>
        )}
        {seccion.Costumbres && (
          <>
            <h3 className='font-betonga font-bold text-color-violeta text-xl tracking-wider text-center'>
              Costumbres
            </h3>
            <Costumbres handleChange={handleChange} values={values} />
          </>
        )}

        {seccion.Afecciones && (
          <>
            <h3 className='font-betonga font-bold text-color-violeta text-xl tracking-wider'>
              Afecciones
            </h3>
            <Afecciones errors={errors} handleChange={handleChange} values={values} />
          </>
        )}
        {seccion.Servicio && (
          <>
            <h3 className='font-betonga font-bold text-color-violeta text-xl tracking-wider text-center'>
              Servicios
            </h3>
            <SelectServicio values={values} handleChange={handleChange} />
          </>
        )}
        <footer className='grid grid-flow-col gap-2 pt-4 '>
          <Button className={'w-full'} bgColor={true} tipo={'submit'} texto={'Guardar'} />
          <Button
            className={'w-full'}
            onClickFunction={cerrarForm}
            bgColor={false}
            texto={'Cerrar'}
          />
        </footer>
      </form>
    </section>
  )
}

export default FormularioPaciente
