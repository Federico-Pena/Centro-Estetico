import { useContext } from 'react'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { Button } from '../../Botones/Button.jsx'
import { LabelInput } from '../LabelInput.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'
import { SelectServicio } from '../Paciente/SelectServicio.jsx'
import { FormularioAdminResumen } from './FormularioAdminResumen.jsx'
import { useFormReserva } from './useFormReserva.jsx'
import { HorasFormAdmin } from './HorasFormAdmin.jsx'
import { formularioReservaAdminSubmit } from './formularioReservaAdminSubmit.js'
import { initialForm, validationRules } from './initialFormyRules.js'
import { ReservasContext } from '../../../Context/Reservas/ReservasContext.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { RUTAS } from '../../../constantes.js'
import { ACTIONS_RESERVAS } from '../../../Context/Reservas/reducerReservas.js'
import { Dropdown } from '../../Dropdown/Dropdown.jsx'
import { LoaderContext } from '../../../Context/Loader/LoaderContext.jsx'

const FormularioReservaAdmin = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const reservaState = location.state?.reserva
  const { setMensaje } = useContext(ToastContext)
  const { reserva, dispatch } = useContext(ReservasContext)
  const { loading } = useContext(LoaderContext)
  const desdeCalendario =
    location.pathname === RUTAS.admin.agregarReserva &&
    location.state?.from === RUTAS.admin.calendario
  const edicion = location.pathname === RUTAS.admin.editarReserva
  const { handleChange, values, errors, validateForm, resetForm } = useForm(
    initialForm(reserva || reservaState, edicion, desdeCalendario),
    validationRules
  )
  const { horasDisponibles, reservasDelDia, agregarReserva, editarReserva, pacientesNombres } =
    useFormReserva(values.horaInicio)
  const esDomingo = new Date(values.horaInicio).getDay() === 6

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
  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validateForm() && !esDomingo
    if (isValid) {
      const datos = formularioReservaAdminSubmit(values)
      console.log(values)
      const res = edicion ? await editarReserva(datos, reserva._id) : await agregarReserva(datos)
      if (res) {
        cerrarForm()
      } else {
        setMensaje(`Ocurrió un error al guardar el paciente.`)
      }
    } else {
      console.log(errors)

      setMensaje(`Faltan campos requeridos.`)
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
    !loading && (
      <section className='grid px-4 py-8'>
        <h1 className='font-betonga font-bold text-color-violeta text-2xl tracking-wider text-center mb-4'>
          {edicion ? 'Editar' : 'Crear'} Reserva
        </h1>
        <form
          className='animate-toastIn bg-color-logo rounded-lg p-4 max-w-xl m-auto w-full grid gap-4 border border-black'
          onSubmit={handleSubmit}>
          {!edicion && (
            <Dropdown
              name={'Pacientes existentes'}
              onClickFunction={handleNombreDropdown}
              list={getNombresList(pacientesNombres)}
            />
          )}
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
          {esDomingo ? (
            <span className='p-2 rounded-xl w-full text-center shadow-md bg-color-violeta text-slate-50'>
              * Los días domingos no se realizan reservas
            </span>
          ) : null}
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
          <footer className='grid grid-flow-col gap-4'>
            <Button
              bgColor={true}
              className={`${loading ? 'opacity-65 cursor-not-allowed' : ''} w-full`}
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
  )
}
export default FormularioReservaAdmin
