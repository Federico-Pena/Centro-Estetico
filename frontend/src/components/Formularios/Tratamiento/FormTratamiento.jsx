import { useEffect, useState } from 'react'
import { formDataTratamiento } from './formDataTratamiento.js'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { Button } from '../../Botones/Button.jsx'
import { useTratamientos } from '../../../Hooks/Api/Tratamiento/useTratamientos.jsx'
import { FormTratamientoInputs } from './FormTratamientoInputs.jsx'
import { FormTratamientoImagen } from './FormTratamientoImagen.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown } from '../../Dropdown/Dropdown.jsx'
import { RUTAS } from '../../../constantes.js'
import { ACTIONS_TRATAMIENTOS } from '../../../context/Tratamiento/tratamientoReducer.js'
import { getServiciosNombresYTratamientos } from '../../../Hooks/Api/helpers/Servicios/getServiciosNombresYTratamientos.js'
import { initialFormData, validationRules } from './initialValuesAndRules.js'
import { useLoaderContext } from '../../../Hooks/Context/useLoaderContext.jsx'
import { useToastContext } from '../../../Hooks/Context/useToastContext.jsx'
import { useUserContext } from '../../../Hooks/Context/useUserContext.jsx'
import { useTratamientoContext } from '../../../Hooks/Context/useTratamientoContext.jsx'

export const FormTratamiento = () => {
  const location = useLocation()
  const stateTratamiento = location.state?.tratamiento
  const edicion = location.pathname === RUTAS.admin.editarTratamiento

  const { dispatch } = useTratamientoContext()
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()
  const { loading } = useLoaderContext()
  const { crearTratamiento, editarTratamiento } = useTratamientos()
  const [tratamiento] = useState(initialFormData(stateTratamiento))
  const [servicios, setServicios] = useState([])
  const { handleChange, values, validateForm, errors, resetForm } = useForm(
    tratamiento,
    validationRules
  )
  const navigate = useNavigate()
  useEffect(() => {
    if (!edicion) {
      const obtenerServicios = async () => {
        try {
          const datos = await getServiciosNombresYTratamientos(accessToken, setMensaje)
          if (datos.length) {
            setServicios(datos)
          }
        } catch (error) {
          setMensaje('Ocurrió un error')
          return false
        }
      }
      !edicion && obtenerServicios()
    }
  }, [accessToken, setMensaje, edicion])

  const cerrarForm = () => {
    dispatch({ type: ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_FILTRADO, payload: null })
    resetForm()
    navigate(-1)
  }
  const handleSubmitTratamiento = async (e) => {
    e.preventDefault()
    const isValid = validateForm()
    if (isValid) {
      const datos = formDataTratamiento(values)
      const res = edicion
        ? await editarTratamiento(datos, stateTratamiento._id)
        : await crearTratamiento(datos)
      if (res) {
        cerrarForm()
      }
    } else {
      setMensaje('Faltan campos requeridos')
    }
  }
  const handleNombreServicio = (e) => {
    const nuevoValor = e.target.textContent
    const nombreServicio = {
      target: {
        name: 'nombre',
        value: nuevoValor
      }
    }
    handleChange(nombreServicio)
  }
  const getServiciosNombres = (servicios) => {
    return servicios.map((servicio) => servicio.nombre)
  }
  return (
    <section className='grid gap-8 p-8'>
      <h1 className='text-2xl text-color-violeta font-betonga text-center font-bold'>
        {edicion ? 'Editar' : 'Crear'} Tratamiento
      </h1>

      <form
        className='animate-toastIn bg-color-logo rounded-lg grid p-4 gap-4 max-w-md w-full m-auto border border-black'
        onSubmit={handleSubmitTratamiento}>
        {servicios.length > 0 && (
          <Dropdown
            name={'Servicios Disponibles'}
            list={getServiciosNombres(servicios)}
            onClickFunction={handleNombreServicio}
          />
        )}
        <FormTratamientoInputs errors={errors} handleChange={handleChange} values={values} />
        <FormTratamientoImagen
          edicion={edicion}
          errors={errors}
          handleChange={handleChange}
          values={values}
        />
        <footer className='grid grid-flow-col gap-2'>
          <Button
            className={'w-full'}
            bgColor={true}
            disabled={loading}
            tipo={'submit'}
            texto={'Guardar'}
          />
          <Button
            onClickFunction={cerrarForm}
            texto={'Cerrar'}
            tipo={'button'}
            className={'w-full'}
          />
        </footer>
      </form>
    </section>
  )
}
