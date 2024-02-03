import { Checkbox } from '../Icons/Icons.jsx'

export const PacienteAfecciones = ({ paciente }) => {
  return (
    <>
      {' '}
      <h4 className=' border-t border-slate-500 tracking-wider pt-4 underline underline-offset-4 font-betonga font-bold text-xl text-color-violeta text-center'>
        Afecciones
      </h4>
      <ul className='grid [&>li]:p-4 [&>li]:grid [&>li]:grid-flow-col [&>li]:grid-cols-[1fr_2fr] [&>li]:justify-between  [&>li>span]:grid [&>li>span]:justify-end  [&>li>span]:items-center  [&>li>span>svg]:text-red-600'>
        <li>
          Alergia:
          <span> {paciente.alergia || <Checkbox />}</span>
        </li>
        <li>
          Problema Circulatorio:
          <span>{paciente.circulatorio || <Checkbox />}</span>
        </li>
        <li>
          Embarazo:
          <span>{paciente.embarazo || <Checkbox />}</span>
        </li>
        <li>
          Operaciones:
          <span>{paciente.operaciones || <Checkbox />}</span>
        </li>
        <li>
          Oncológicas:
          <span> {paciente.oncologicas || <Checkbox />}</span>
        </li>
        <li>
          Otras Enfermedades:
          <span> {paciente.enfermedades || <Checkbox />}</span>
        </li>
        <li>
          Medicamentos:
          <span> {paciente.medicamentos || <Checkbox />}</span>
        </li>
        <li>
          Implantes:
          <span>{paciente.implantes || <Checkbox />}</span>
        </li>
      </ul>
    </>
  )
}
