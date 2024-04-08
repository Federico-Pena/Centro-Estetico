import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { Button } from '../../Botones/Button.jsx'
import { LabelInput } from '../LabelInput.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'
import { SelectServicio } from '../Paciente/SelectServicio.jsx'
import { FormularioAdminResumen } from './FormularioAdminResumen.jsx'
import { HorasFormAdmin } from './HorasFormAdmin.jsx'
import { formularioReservaAdminSubmit } from './formularioReservaAdminSubmit.js'
import { initialForm, validationRules } from './initialFormYRules.js'
import { useLocation, useNavigate } from 'react-router-dom'
import { RUTAS } from '../../../constantes.js'
import { ACTIONS_RESERVAS } from '../../../Context/Reservas/reducerReservas.js'
import { Dropdown } from '../../Dropdown/Dropdown.jsx'
import { useLoaderContext } from '../../../Hooks/Context/useLoaderContext.jsx'
import { useToastContext } from '../../../Hooks/Context/useToastContext.jsx'
import { useReservasContext } from '../../../Hooks/Context/useReservasContext.jsx'
import TextErrorForm from '../TextErrorForm.jsx'
import { useFormReservaAdmin } from './useFormReservaAdmin.jsx'
import { usePacienteContext } from '../../../Hooks/Context/usePacienteContext.jsx'
import { usePaciente } from '../../../Hooks/Api/Pacientes/usePaciente.jsx'

const FormularioReservaAdmin = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const reservaState = location.state?.reserva
  const { setMensaje } = useToastContext()
  const { reserva, dispatch } = useReservasContext()
  const { loading } = useLoaderContext()
  const desdeCalendario =
    location.pathname === RUTAS.admin.agregarReserva &&
    location.state?.from === RUTAS.admin.calendario
  const edicion = reservaState.estado
  const { handleChange, values, errors, onSubmitForm, resetForm } = useForm(
    initialForm(reserva || reservaState, edicion, desdeCalendario),
    validationRules
  )
  const { pacientesNombres } = usePacienteContext()
  usePaciente()

  const { horasDisponibles, reservasDelDia, agregarReserva, editarReserva } = useFormReservaAdmin(
    values.horaInicio
  )

  const handleSetFecha = (e) => {
    const horaValue = {
      target: {
        name: 'hora',
        value: ''
      }
    }
    handleChange(horaValue)
    handleChange(e)
  }
  const handleSubmit = async (values) => {
    const datos = formularioReservaAdminSubmit(values)
    const res = edicion ? await editarReserva(datos, reservaState._id) : await agregarReserva(datos)
    if (res) {
      cerrarForm()
    } else {
      setMensaje(`Ocurrió un guardar la reserva.`)
    }
  }
  const cerrarForm = () => {
    resetForm()
    dispatch({ type: ACTIONS_RESERVAS.SET_RESERVA, payload: null })
    navigate(-1)
  }
  const handleNombreDropdown = (e) => {
    const nombre = e.target.textContent
    const nombreValue = {
      target: {
        name: 'nombre',
        value: nombre
      }
    }
    handleChange(nombreValue)
  }
  const getNombresList = (listPaciente) => {
    return listPaciente.map((paciente) => paciente.nombre)
  }
  return (
    <section className='grid px-4 py-8'>
      <h1 className='font-betonga font-bold text-color-violeta text-2xl tracking-wider text-center mb-4'>
        {edicion ? 'Editar' : 'Crear'} Reserva
      </h1>
      <form
        className='animate-fadeIn rounded-lg p-4 max-w-xl m-auto w-full grid gap-4 bg-color-verde-blanco border border-gray-300 shadow-lg'
        onSubmit={(e) => onSubmitForm(e, handleSubmit)}>
        <p>Nombres de pacientes</p>
        <Dropdown
          name={'Pacientes existentes'}
          onClickFunction={handleNombreDropdown}
          list={getNombresList(pacientesNombres)}
        />
        <LabelInput
          placeholder={'Nombre'}
          value={values.nombre}
          labelText={'Nombre'}
          name={'nombre'}
          type={'text'}
          errors={errors}
          onChange={handleChange}
        />
        <LabelInput
          className={'w-full'}
          value={values.horaInicio.split('T')[0]}
          labelText={'Fecha'}
          name={'horaInicio'}
          type={'date'}
          errors={errors}
          onChange={handleSetFecha}
        />

        {horasDisponibles.length > 0 && values.horaInicio && (
          <>
            <HorasFormAdmin
              horasDisponibles={horasDisponibles}
              values={values}
              setMensaje={setMensaje}
              handleChange={handleChange}
              reservasDelDia={reservasDelDia}
              errors={errors}
            />
          </>
        )}
        <label>Servicio y Tratamiento</label>
        <SelectServicio values={values} handleChange={handleChange} errors={errors} />
        <TextAreaLabel
          value={values.observaciones}
          onChange={handleChange}
          name={'observaciones'}
          labelText={
            values.nombre === 'admin' ? 'Compromisos separados por comas' : 'Observaciones'
          }
        />
        <FormularioAdminResumen values={values} />
        <TextErrorForm errors={errors} />
        <footer className='grid grid-flow-col gap-4'>
          <Button
            bgColor={true}
            className={`w-full`}
            tipo={'submit'}
            texto={'Guardar'}
            disabled={loading}
          />
          <Button
            className={'w-full'}
            tipo={'button'}
            onClickFunction={cerrarForm}
            texto={'Cerrar'}
          />
        </footer>
      </form>
    </section>
  )
}
export default FormularioReservaAdmin
