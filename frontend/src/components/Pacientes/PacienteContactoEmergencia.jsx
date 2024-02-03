import { Checkbox } from '../Icons/Icons.jsx'

export const PacienteContactoEmergencia = ({ paciente }) => {
  return (
    <>
      <h4 className=' border-t border-slate-500 tracking-wider py-4 underline underline-offset-4 font-betonga font-bold text-xl text-color-violeta text-center'>
        Contacto de Emergencia
      </h4>
      <ul className='grid  [&>li]:p-4 [&>li]:grid [&>li]:grid-flow-col [&>li]:grid-cols-[1fr_2fr] [&>li]:justify-between [&>li>span]:grid [&>li>span]:justify-end  [&>li>span]:items-center  [&>li>span>svg]:text-red-600'>
        <li>
          Nombre:
          <span> {paciente.contactoEmergencia.nombreContacto2 || <Checkbox />}</span>
        </li>
        <li>
          Teléfono:
          <span> {paciente.contactoEmergencia.telefonoContacto2 || <Checkbox />}</span>
        </li>
      </ul>
    </>
  )
}
