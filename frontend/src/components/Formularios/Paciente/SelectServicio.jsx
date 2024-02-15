import { useEffect, useState } from 'react'
import { Dropdown } from '../../Dropdown/Dropdown.jsx'
import { getServiciosNombresYTratamientos } from '../../../Hooks/Api/helpers/Servicios/getServiciosNombresYTratamientos.js'
import { useUserContext } from '../../../Hooks/Context/useUserContext.jsx'
import { useToastContext } from '../../../Hooks/Context/useToastContext.jsx'

export const SelectServicio = ({ handleChange, values, errors }) => {
  const { setMensaje } = useToastContext()
  const { accessToken } = useUserContext()
  const [servicios, setServicios] = useState([])
  const [tratamientos, setTratamientos] = useState([])

  useEffect(() => {
    const obtenerServiciosYtratamientos = async () => {
      try {
        const datos = await getServiciosNombresYTratamientos(accessToken, setMensaje)
        if (datos) {
          setServicios(datos)
        }
      } catch (error) {
        setMensaje('Ocurrió un error')
        return false
      }
    }
    obtenerServiciosYtratamientos()
  }, [accessToken, setMensaje])

  useEffect(() => {
    if (values.servicio) {
      const servicioFiltrado = servicios.find((s) => s.nombre === values.servicio)
      if (servicioFiltrado) {
        setTratamientos(servicioFiltrado.tratamientos)
      }
    }
  }, [servicios, values.servicio])

  const dropdownChangeTratamiento = (name, event) => {
    const value = event.target.textContent
    const valor = {
      target: {
        name,
        value
      }
    }
    handleChange(valor)
  }
  const dropdownChangeServicio = (name, event) => {
    const value = event.target.textContent
    const valor = {
      target: {
        name,
        value
      }
    }
    const valorTratamiento = {
      target: {
        name: 'tratamiento',
        value: ''
      }
    }
    handleChange(valor)
    handleChange(valorTratamiento)
  }
  const serviciosNombres = (servicios) => {
    return servicios.map((servicio) => servicio.nombre)
  }
  const tratamientosDescripcion = (tratamientos) => {
    return tratamientos.map(
      (tratamiento) =>
        `${tratamiento.descripcion} - ${tratamiento.sesiones} ${
          tratamiento.sesiones > 1 ? 'Sesiones' : 'Sesión'
        }`
    )
  }
  return (
    servicios.length > 0 && (
      <>
        {errors && errors.servicio && <small className='text-red-600'>* {errors.servicio}</small>}
        <Dropdown
          defaultValue={values.servicio}
          name={'Servicios'}
          list={serviciosNombres(servicios)}
          onClickFunction={(e) => dropdownChangeServicio('servicio', e)}
        />

        {values.servicio && tratamientos.length > 0 && (
          <>
            {errors && errors.tratamiento && (
              <small className='text-red-600'>* {errors.tratamiento}</small>
            )}
            <Dropdown
              defaultValue={values.tratamiento}
              name={'Tratamientos'}
              list={tratamientosDescripcion(tratamientos)}
              onClickFunction={(e) => dropdownChangeTratamiento('tratamiento', e)}
            />
          </>
        )}
      </>
    )
  )
}
