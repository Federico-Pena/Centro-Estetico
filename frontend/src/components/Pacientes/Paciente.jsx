import { useEffect, useRef } from 'react'
import { PacienteDetalles } from './PacienteDetalles.jsx'
import { PacienteContactoEmergencia } from './PacienteContactoEmergencia.jsx'
import { PacienteCostumbres } from './PacienteCostumbres.jsx'
import { PacienteAfecciones } from './PacienteAfecciones.jsx'
import { PacienteHeader } from './PacienteHeader.jsx'
import { usePacienteContext } from '../../Hooks/Context/usePacienteContext.jsx'

export const Paciente = ({ cerrarPaciente }) => {
  const { paciente } = usePacienteContext()
  const imprimirRef = useRef()
  const pacienteRef = useRef()
  useEffect(() => {
    pacienteRef.current &&
      pacienteRef.current.scrollIntoView({
        behavior: 'smooth'
      })
  }, [])

  return (
    <article
      className='grid max-w-xl m-auto w-full border border-slate-500 rounded-lg'
      ref={pacienteRef}>
      <PacienteHeader cerrarPaciente={cerrarPaciente} imprimirRef={imprimirRef} />
      {paciente.foto && (
        <img
          src={paciente.foto.secure_url}
          alt={`Foto del paciente ${paciente.nombre}`}
          className='self-center justify-self-center aspect-square w-40 h-40 object-cover object-center my-8 rounded-lg'
        />
      )}
      <div className='grid gap-4' ref={imprimirRef}>
        <section className='grid gap-4'>
          <PacienteDetalles paciente={paciente} />
        </section>
        <section className='grid gap-4'>
          <PacienteContactoEmergencia paciente={paciente} />
        </section>
        <section className='grid gap-4'>
          <PacienteCostumbres paciente={paciente} />
        </section>
        <section className='grid gap-4'>
          <PacienteAfecciones paciente={paciente} />
        </section>
      </div>
    </article>
  )
}
