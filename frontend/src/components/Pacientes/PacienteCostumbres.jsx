import { Checkbox } from '../Icons/Icons.jsx'

export const PacienteCostumbres = ({ paciente }) => {
  return (
    <>
      <h4 className=' border-t border-slate-500 tracking-wider pt-4 underline underline-offset-4 font-betonga font-bold text-xl text-color-violeta text-center'>
        Costumbres Diarias
      </h4>
      <ul className='grid [&>li]:p-4 [&>li]:grid [&>li]:grid-flow-col [&>li]:grid-cols-[1fr_2fr] [&>li]:justify-between  [&>li>span]:grid [&>li>span]:items-center [&>li>span]:justify-end [&>li>span]:text-end [&>li>span]:text-pretty  [&>li>span>svg]:text-red-600'>
        <li>
          Alimentación:
          <span> {paciente.alimentacion || <Checkbox />}</span>
        </li>
        <li>
          Descanso:
          <span> {paciente.descanso || <Checkbox />}</span>
        </li>
        <li>
          Hidratación:
          <span> {paciente.hidratacion || <Checkbox />}</span>
        </li>
        <li>
          Alcohol:
          <span> {paciente.alcohol || <Checkbox />}</span>
        </li>
        <li>
          Fuma:
          <span> {paciente.fuma || <Checkbox />}</span>
        </li>
      </ul>
    </>
  )
}
