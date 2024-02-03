import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'
import { Change } from '../../Icons/Icons.jsx'

export const HeaderFormServicio = ({ edicion, setMasInfo, masInfo }) => {
  return (
    <header className='grid gap-4'>
      <h3 className='uppercase text-center text-color-violeta font-bold font-betonga text-2xl tracking-widest border-b border-slate-500'>
        {edicion ? 'Editar servicio' : 'Agregar servicio'}
      </h3>
      <BtnSecundario
        className={
          'border border-color-violeta bg-color-violeta text-white flex items-center justify-center gap-2  max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity [&>span>svg]:text-xl [&>span>svg]:hover:rotate-180 [&>span>svg]:transition'
        }
        icono={<Change />}
        onClickFunction={() => {
          setMasInfo(!masInfo)
        }}
        texto={masInfo ? 'Parte 2/2' : 'Parte 1/2'}
        tipo={'button'}
      />
    </header>
  )
}
