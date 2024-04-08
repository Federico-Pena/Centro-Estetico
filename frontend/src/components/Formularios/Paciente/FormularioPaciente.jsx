import { useState } from 'react'
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
import TextErrorForm from '../TextErrorForm.jsx'

const FormularioPaciente = () => {
  const location = useLocation()
  const pacienteState = location.state?.paciente
  const navigate = useNavigate()
  const edicion = location.pathname === RUTAS.admin.editarPaciente

  const { paciente: pac, dispatch } = usePacienteContext()
  const [paciente] = useState(initialForm(pac || pacienteState))
  const { handleChange, values, errors, resetForm, onSubmitForm, changeInitialValues } = useForm(
    paciente,
    validationRules
  )
  const { agregarPaciente, editarPaciente, uploadPdf } = usePaciente()
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

  const submitAgregar = async (data) => {
    const nuevoUsuario = formDataPaciente(data)
    const res = edicion
      ? await editarPaciente(nuevoUsuario, pac._id)
      : await agregarPaciente(nuevoUsuario)
    if (res) {
      cerrarForm()
    }
  }
  const handleChangePdf = async (e) => {
    const file = e.target.files[0]
    const res = await uploadPdf(file)
    if (res) {
      const data = initialForm(res)
      changeInitialValues(data)
    }
  }
  return (
    <section className='grid grid-rows-[auto_auto_1fr] p-4 gap-y-4'>
      <h1 className='font-betonga font-bold text-color-violeta text-2xl tracking-wider text-center'>
        {edicion ? 'Editar ' : 'Agregar '}Paciente
      </h1>
      <div className='grid grid-flow-col items-center gap-4 m-auto w-full max-w-2xl '>
        <label htmlFor='PDF'>Importar PDF</label>
        <input
          id='PDF'
          name='pdf'
          className='cursor-pointer border border-b border-slate-500 rounded-lg p-2 text-xs'
          type='file'
          accept='application/pdf'
          onChange={handleChangePdf}
        />
      </div>
      <form
        className='animate-fadeIn rounded-lg p-4 max-w-2xl w-full m-auto grid grid-rows-[auto_1fr_auto] gap-4 self-start bg-color-verde-blanco border border-gray-300 shadow-lg'
        onSubmit={(e) => onSubmitForm(e, submitAgregar)}>
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
        <TextErrorForm errors={errors} />

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
