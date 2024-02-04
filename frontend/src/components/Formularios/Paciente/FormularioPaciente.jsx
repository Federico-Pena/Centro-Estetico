import { useContext, useState } from 'react'
import { formDataPaciente } from './formDataPaciente'
import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'
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
import { PacientesContext } from '../../../Context/Pacientes/PacientesContext.jsx'
import { ACTIONS_PACIENTES } from '../../../Context/Pacientes/reducerPaciente.js'

const FormularioPaciente = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const edicion = location.pathname === RUTAS.admin.editarPaciente
  const { paciente: pac, dispatch } = useContext(PacientesContext)

  const [paciente, setPaciente] = useState(initialForm(pac))
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
        ? await editarPaciente(nuevoUsuario, paciente._id)
        : await agregarPaciente(nuevoUsuario)
      if (res) {
        cerrarForm()
      }
    }
  }

  return (
    <section className='grid p-4'>
      <form
        className='animate-toastIn bg-color-logo rounded-lg p-4  max-w-2xl m-auto w-full grid gap-4 '
        onSubmit={submitAgregar}>
        <h2 className='font-betonga font-bold text-color-violeta text-2xl tracking-wider text-center mb-4'>
          {edicion ? 'Editar ' : 'Agregar '}Paciente
        </h2>
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
            <h3 className='font-betonga font-bold text-color-violeta text-xl tracking-wider'>
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
            <h3 className='font-betonga font-bold text-color-violeta text-xl tracking-wider'>
              Servicios
            </h3>
            <SelectServicio values={values} handleChange={handleChange} />
          </>
        )}
        <footer className='grid grid-cols-2 pt-4 border-t border-slate-500'>
          <BtnSecundario
            className={
              'border-color-violeta bg-color-violeta text-white flex items-center justify-center  max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity'
            }
            tipo={'submit'}
            texto={'Guardar'}
          />
          <BtnSecundario
            onClickFunction={cerrarForm}
            className={
              'border border-color-violeta bg-transparent  flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity '
            }
            tipo={'button'}
            texto={'Cerrar'}
          />
        </footer>
      </form>
    </section>
  )
}

export default FormularioPaciente
