import { useContext, useEffect, useState } from 'react'
import { apiRoutes } from '../../../Api/routes.js'
import { fetcher } from '../../../Api/Helpers/fetcher.js'
import { ToastContext } from '../../../Context/Toast/mensajeContext.jsx'
import { UserContext } from '../../../Context/User/userContext.jsx'
import { Dropdown } from '../../Dropdown/Dropdown.jsx'

export const SelectServicio = ({ handleChange, values, errors }) => {
  const { setMensaje } = useContext(ToastContext)
  const { accessToken } = useContext(UserContext)
  const [servicios, setServicios] = useState([])
  const [tratamientos, setTratamientos] = useState([])

  useEffect(() => {
    const obtenerServiciosYtratamientos = async () => {
      try {
        const url = apiRoutes.servicios.getServiciosNombresYTratamientos
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
  return (
    servicios.length > 0 && (
      <>
        {values.servicio && (
          <p className='text-center font-bold text-color-violeta capitalize'>{values.servicio}</p>
        )}
        {errors && errors.servicio && <small className='text-red-600'>* {errors.servicio}</small>}
        <Dropdown name={'Servicios'} className={'gap-4'}>
          <p
            className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'
            onClick={(e) => dropdownChangeServicio('servicio', e)}></p>
          {servicios.map((servicio) => (
            <p
              onClick={(e) => dropdownChangeServicio('servicio', e)}
              className='capitalize min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'
              key={servicio._id}>
              {servicio.nombre}
            </p>
          ))}
        </Dropdown>
        {values.servicio && (
          <>
            {values.tratamiento && (
              <p className='text-center font-bold text-color-violeta capitalize'>
                {values.tratamiento}
              </p>
            )}
            {errors && errors.tratamiento && (
              <small className='text-red-600'>* {errors.tratamiento}</small>
            )}
            <Dropdown name={'Tratamientos'} className={'gap-4'}>
              <p
                className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'
                onClick={(e) => dropdownChangeTratamiento('tratamiento', e)}></p>
              {tratamientos.map((trata) => (
                <p
                  onClick={(e) => dropdownChangeTratamiento('tratamiento', e)}
                  className='capitalize min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'
                  key={trata._id}>
                  {trata.descripcion}
                </p>
              ))}
            </Dropdown>
          </>
        )}
      </>
    )
  )
}
