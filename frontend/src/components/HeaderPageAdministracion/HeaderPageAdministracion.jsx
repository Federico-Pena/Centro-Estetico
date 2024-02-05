import { useServicio } from '../../Hooks/Api/Servicio/useServicio.jsx'
import { useTratamientos } from '../../Hooks/Api/Tratamiento/useTratamientos.jsx'
import { Button } from '../Botones/Button.jsx'

export const HeaderPageAdministracion = ({ cambiarActivo, activo }) => {
  const { obtenerTratamientos } = useTratamientos()
  const { obtenerServicios } = useServicio()

  return (
    <header
      className={`
        grid grid-cols-2 grid-rows-[50px_50px] max-w-xl m-auto gap-2 w-full md:grid-cols-4 md:grid-rows-1 md:max-w-3xl`}>
      <Button
        className={'w-full'}
        tipo={'button'}
        disabled={activo.Backup}
        onClickFunction={cambiarActivo}
        bgColor={activo.Backup}
        texto={'Backup'}
      />
      <Button
        className={'w-full'}
        tipo={'button'}
        disabled={activo.Servicios}
        bgColor={activo.Servicios}
        onClickFunction={(e) => {
          cambiarActivo(e)
          obtenerServicios()
        }}
        texto={'Servicios'}
      />
      <Button
        className={'w-full'}
        tipo={'button'}
        disabled={activo.Tratamientos}
        bgColor={activo.Tratamientos}
        onClickFunction={(e) => {
          cambiarActivo(e)
          obtenerTratamientos()
        }}
        texto={'Tratamientos'}
      />
      <Button
        className={'w-full'}
        tipo={'button'}
        disabled={activo.Pacientes}
        bgColor={activo.Pacientes}
        onClickFunction={(e) => {
          cambiarActivo(e)
        }}
        texto={'Pacientes'}
      />
    </header>
  )
}
