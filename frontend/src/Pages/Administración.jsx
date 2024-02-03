import { useState } from 'react'
import { Loader } from '../Components/Loader/Loader.jsx'
import { ComponentBackup } from '../Components/Botones/ComponentBackup.jsx'
import { ServiciosList } from '../Components/ServiciosList/ServiciosList.jsx'
import { TratamientosList } from '../Components/TratamientosList/TratamientosList.jsx'
import { useTratamientos } from '../Hooks/Api/Tratamiento/useTratamientos.jsx'
import { PacientesList } from '../Components/Pacientes/PacientesList.jsx'
import { HeaderPageAdministracion } from '../Components/HeaderPageAdministracion/HeaderPageAdministracion.jsx'

const Administración = () => {
  const { loading } = useTratamientos()
  const [activo, setActivo] = useState({
    Backup: false,
    Tratamientos: false,
    Servicios: false,
    Pacientes: false
  })

  const cambiarActivo = (e) => {
    const opcion = e.target.textContent
    const nuevoActivo = { ...activo }
    nuevoActivo[opcion] = !activo[opcion]
    if (nuevoActivo[opcion]) {
      for (const key in nuevoActivo) {
        if (key !== opcion) {
          nuevoActivo[key] = false
        }
      }
    }
    setActivo(nuevoActivo)
  }

  return (
    <main className=' grid grid-rows-[auto_1fr] p-4 gap-4'>
      {loading && <Loader />}
      <HeaderPageAdministracion activo={activo} cambiarActivo={cambiarActivo} />
      <section className='grid gap-4 '>
        {activo.Backup && <ComponentBackup />}
        {activo.Servicios && <ServiciosList />}
        {activo.Tratamientos && <TratamientosList />}
        {activo.Pacientes && <PacientesList />}
      </section>
    </main>
  )
}
export default Administración
