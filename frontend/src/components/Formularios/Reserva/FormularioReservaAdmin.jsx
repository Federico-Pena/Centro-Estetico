import { useContext } from 'react'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'
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

const FormularioReservaAdmin = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from
  const edicion = location.pathname === RUTAS.admin.editarReserva
  const desdeCalendario =
    location.pathname === RUTAS.admin.agregarReserva && from === RUTAS.admin.calendario
  const { setMensaje } = useContext(ToastContext)
  const { reserva, dispatch } = useContext(ReservasContext)
  const { handleChange, values, errors, validateForm, resetForm } = useForm(
    initialForm(reserva, edicion, desdeCalendario),
    validationRules
  )
  const {
    horasDisponibles,
    reservasDelDia,
    loading,
    agregarReserva,
    editarReserva,
    pacientesNombres
  } = useFormReserva(values.horaInicio)
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
    console.log(isValid)

    if (isValid) {
      const datos = formularioReservaAdminSubmit(values)
      const res = edicion ? await editarReserva(datos, reserva._id) : await agregarReserva(datos)
      if (res) {
        cerrarForm()
      } else {
        setMensaje(`Ocurrió un error al guardar el paciente.`)
      }
    } else {
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
  return (
    <section className='bg-gradient-to-b from-slate-900 to-black fixed inset-0 z-50 grid grid-rows-[auto_1fr] gap-4 p-4 overflow-auto'>
      <BtnSecundario
        className={
          'border border-color-violeta bg-color-violeta text-white  flex items-center justify-center max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity'
        }
        tipo={'button'}
        onClickFunction={cerrarForm}
        texto={'Cerrar'}
      />
      <form
        className='animate-toastIn bg-color-logo rounded-lg p-4 max-w-xl m-auto w-full grid gap-4 '
        onSubmit={handleSubmit}>
        <h2 className='font-betonga font-bold text-color-violeta text-2xl tracking-wider text-center mb-4'>
          {edicion ? 'Editar' : 'Crear'} Reserva
        </h2>
        {!edicion && (
          <Dropdown name={'Pacientes'} className={'gap-4'}>
            <p
              className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'
              onClick={handleNombreDropdown}></p>
            {pacientesNombres.length > 0 &&
              pacientesNombres.map((pac) => (
                <p
                  key={pac._id}
                  className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer capitalize'
                  onClick={handleNombreDropdown}>
                  {pac.nombre}
                </p>
              ))}
          </Dropdown>
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
        <BtnSecundario
          className={`${
            loading ? 'opacity-65 cursor-not-allowed' : ''
          } font-bold text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-transparent cursor-pointer`}
          tipo={'submit'}
          texto={'Guardar'}
          disabled={loading}
        />
      </form>
    </section>
  )
}
export default FormularioReservaAdmin
