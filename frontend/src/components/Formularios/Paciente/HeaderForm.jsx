import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'

export const HeaderForm = ({ cambiarActivo, seccion }) => {
  return (
    <article className='grid grid-cols-2 grid-rows-[50px_50px] max-w-xl mx-auto w-full md:grid-cols-4 md:max-w-3xl'>
      <BtnSecundario
        disabled={seccion.Personales}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'Personales'}
        className={`${
          seccion.Personales ? 'bg-slate-300 text-black' : 'bg-color-violeta'
        } border grid place-content-center cursor-pointer rounded text-white  hover:bg-transparent  transition-colors`}
      />
      <BtnSecundario
        disabled={seccion.Costumbres}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'Costumbres'}
        className={`${
          seccion.Costumbres ? 'bg-slate-300 text-black' : 'bg-color-violeta'
        } border grid place-content-center cursor-pointer rounded text-white hover:bg-transparent  transition-colors`}
      />
      <BtnSecundario
        disabled={seccion.Afecciones}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'Afecciones'}
        className={`${
          seccion.Afecciones ? 'bg-slate-300 text-black' : 'bg-color-violeta'
        } border grid place-content-center cursor-pointer rounded text-white hover:bg-transparent  transition-colors`}
      />
      <BtnSecundario
        disabled={seccion.Servicio}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'Servicio'}
        className={`${
          seccion.Servicio ? 'bg-slate-300 text-black' : 'bg-color-violeta'
        } border grid place-content-center cursor-pointer rounded text-white  hover:bg-transparent  transition-colors`}
      />
    </article>
  )
}
