import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'

export const HeaderForm = ({ cambiarActivo, seccion }) => {
  return (
    <article className='relative grid justify-between grid-flow-col'>
      <div className='absolute -z-10 h-1 w-full self-center bg-color-violeta rounded'></div>
      <BtnSecundario
        id={'Personales'}
        disabled={seccion.Personales}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'1'}
        className={`${
          seccion.Personales ? 'bg-slate-300 text-black' : 'bg-color-violeta'
        } border grid w-8 h-8 rounded-full place-content-center cursor-pointer text-white  hover:bg-color-logo hover:text-color-violeta hover:border-color-violeta transition-colors`}
      />
      <BtnSecundario
        id={'Costumbres'}
        disabled={seccion.Costumbres}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'2'}
        className={`${
          seccion.Costumbres ? 'bg-slate-300 text-black' : 'bg-color-violeta'
        } border grid w-8 h-8 rounded-full place-content-center cursor-pointer text-white hover:bg-color-logo hover:text-color-violeta hover:border-color-violeta transition-colors`}
      />
      <BtnSecundario
        id={'Afecciones'}
        disabled={seccion.Afecciones}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'3'}
        className={`${
          seccion.Afecciones ? 'bg-slate-300 text-black' : 'bg-color-violeta'
        } border grid w-8 h-8 rounded-full place-content-center cursor-pointer text-white hover:bg-color-logo hover:text-color-violeta hover:border-color-violeta transition-colors`}
      />
      <BtnSecundario
        id={'Servicio'}
        disabled={seccion.Servicio}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'4'}
        className={`${
          seccion.Servicio ? 'bg-slate-300 text-black' : 'bg-color-violeta'
        } border grid w-8 h-8 rounded-full place-content-center cursor-pointer text-white  hover:bg-color-logo hover:text-color-violeta hover:border-color-violeta transition-colors`}
      />
    </article>
  )
}
