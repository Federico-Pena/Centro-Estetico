import { useState } from 'react'
import { ComponentBackup } from '../Components/Botones/ComponentBackup.jsx'
import { ServiciosList } from '../Components/ServiciosList/ServiciosList.jsx'
import { TratamientosList } from '../Components/TratamientosList/TratamientosList.jsx'
import { HeaderPageAdministracion } from '../Components/HeaderPageAdministracion/HeaderPageAdministracion.jsx'
import { PacientesList } from '../Components/Pacientes/PacientesList.jsx'

const Administración = () => {
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
    <main className='relative grid-rows-[100px_1fr] items-start grid p-4 gap-4'>
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
