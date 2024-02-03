import { useServicio } from '../../Hooks/Api/Servicio/useServicio.jsx'
import { useTratamientos } from '../../Hooks/Api/Tratamiento/useTratamientos.jsx'
import { BtnSecundario } from '../Botones/BtnSecundario.jsx'

export const HeaderPageAdministracion = ({ cambiarActivo, activo }) => {
  const { obtenerTratamientos } = useTratamientos()
  const { obtenerServicios } = useServicio()

  return (
    <header
      className={`
        grid grid-cols-2 grid-rows-[50px_50px] max-w-xl mx-auto w-full md:grid-cols-4 md:max-w-3xl`}>
      <BtnSecundario
        tipo={'button'}
        disabled={activo.Backup}
        onClickFunction={cambiarActivo}
        className={`${
          activo.Backup ? 'bg-slate-300' : ''
        } border grid place-content-center cursor-pointer rounded hover:bg-color-violeta hover:text-white transition-colors`}
        texto={'Backup'}
      />

      <BtnSecundario
        tipo={'button'}
        disabled={activo.Servicios}
        onClickFunction={(e) => {
          cambiarActivo(e)
          obtenerServicios()
        }}
        className={`${
          activo.Servicios ? 'bg-slate-300' : ''
        } border grid place-content-center cursor-pointer rounded hover:bg-color-violeta hover:text-white transition-colors`}
        texto={'Servicios'}
      />

      <BtnSecundario
        tipo={'button'}
        disabled={activo.Tratamientos}
        onClickFunction={(e) => {
          cambiarActivo(e)
          obtenerTratamientos()
        }}
        className={`${
          activo.Tratamientos ? 'bg-slate-300' : ''
        } border grid place-content-center cursor-pointer rounded hover:bg-color-violeta hover:text-white transition-colors`}
        texto={'Tratamientos'}
      />

      <BtnSecundario
        tipo={'button'}
        disabled={activo.Pacientes}
        onClickFunction={(e) => {
          cambiarActivo(e)
        }}
        className={`${
          activo.Pacientes ? 'bg-slate-300' : ''
        } border grid place-content-center cursor-pointer rounded hover:bg-color-violeta hover:text-white transition-colors`}
        texto={'Pacientes'}
      />
    </header>
  )
}
