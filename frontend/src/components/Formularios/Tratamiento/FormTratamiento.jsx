import { useContext, useEffect, useState } from 'react'
import { formDataTratamiento } from './formDataTratamiento.js'
import { UserContext } from '../../../Context/User/userContext.jsx'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import useForm from '../../../Hooks/Formulario/useForm.jsx'
import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'
import { useTratamientos } from '../../../Hooks/Api/Tratamiento/useTratamientos.jsx'
import { FormTratamientoInputs } from './FormTratamientoInputs.jsx'
import { FormTratamientoImagen } from './FormTratamientoImagen.jsx'
import { apiRoutes } from '../../../Api/routes.js'
import { fetcher } from '../../../Api/Helpers/fetcher.js'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown } from '../../Dropdown/Dropdown.jsx'
import { TratamientoContext } from '../../../context/Tratamiento/TratamientoContext.jsx'
import { RUTAS } from '../../../constantes.js'
import { ACTIONS_TRATAMIENTOS } from '../../../context/Tratamiento/tratamientoReducer.js'
import { LoaderContext } from '../../../Context/Loader/LoaderContext.jsx'

const validationRules = {
  servicio: {
    nombre: { required: true }
  },
  costoTotal: { required: true },
  sesiones: { required: true, minValue: 1 },
  tiempo: { required: true },
  descripcion: { required: true }
}
const initialFormData = {
  servicio: { nombre: '' },
  descripcion: '',
  tiempo: '',
  costoTotal: '',
  sesiones: '',
  enPromocion: false
}
export const FormTratamiento = () => {
  const location = useLocation()
  const edicion = location.pathname === RUTAS.admin.editarTratamiento
  const { tratamiento: trata, dispatch } = useContext(TratamientoContext)
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(ToastContext)
  const { loading } = useContext(LoaderContext)
  const { crearTratamiento, editarTratamiento } = useTratamientos()
  const [tratamiento] = useState(trata || initialFormData)
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
          const url = apiRoutes.servicios.getServiciosNombres
          const opciones = {
            method: 'GET',
            headers: {
              authorization: `Bearer ${accessToken}`
            }
          }
          const res = await fetcher(url, opciones)
          const { error, mensaje, datos, status } = res
          if (status === 200) {
            setMensaje(mensaje)
            setServicios(datos)
          } else {
            if (error) {
              setMensaje(error)
            }
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
    if (!isValid) {
      return
    }
    const datos = formDataTratamiento(values)
    const res = edicion
      ? await editarTratamiento(datos, tratamiento._id)
      : await crearTratamiento(datos)
    if (res) {
      cerrarForm()
    }
  }
  const handleNombreServicio = (e) => {
    const nuevoValor = e.target.textContent
    const nombreServicio = {
      target: {
        name: 'servicio.nombre',
        value: nuevoValor
      }
    }
    handleChange(nombreServicio)
  }
  return (
    <section className='grid grid-rows-[auto_1fr] gap-8 p-8'>
      <BtnSecundario
        onClickFunction={cerrarForm}
        className={
          'border border-color-violeta bg-color-violeta text-white flex items-center justify-center gap-2 max-w-fit rounded-lg px-4 py-2  hover:opacity-70 transition-opacity [&>span>svg]:text-xl [&>span>svg]:hover:rotate-180 [&>span>svg]:transition'
        }
        texto={'Cerrar'}
        tipo={'button'}
      />
      <form
        className='animate-toastIn border border-white bg-color-logo rounded-lg grid p-4 gap-4 max-w-md w-full m-auto'
        onSubmit={handleSubmitTratamiento}>
        <h3 className='text-xl text-color-violeta font-betonga text-center font-bold'>
          {edicion ? 'Editar' : 'Crear'} Cuponera
        </h3>
        {servicios.length > 0 && (
          <Dropdown name={'Servicios Disponibles'} className={'gap-4'}>
            {servicios.map((ser) => (
              <p
                className={
                  'text-center border capitalize px-4 py-2 cursor-pointer  hover:bg-slate-300 transition-colors'
                }
                onClick={handleNombreServicio}
                key={ser._id}>
                {ser.nombre}
              </p>
            ))}
          </Dropdown>
        )}
        <FormTratamientoInputs errors={errors} handleChange={handleChange} values={values} />
        <FormTratamientoImagen
          edicion={edicion}
          errors={errors}
          handleChange={handleChange}
          values={values}
        />
        <BtnSecundario
          className={`${
            loading ? 'opacity-50' : ''
          } border border-color-violeta bg-color-violeta text-white flex items-center justify-center gap-2  max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity [&>span>svg]:text-xl [&>span>svg]:hover:rotate-180 [&>span>svg]:transition`}
          disabled={loading}
          tipo={'submit'}
          texto={edicion ? 'Editar Cuponera' : 'Crear Cuponera'}
        />
      </form>
    </section>
  )
}
