import { BtnSecundario } from '../Botones/BtnSecundario.jsx'
import { LoaderChico } from '../Loader/LoaderChico.jsx'

export const Botones = ({ loading, semanaAnterior, semanaSiguiente }) => {
  return (
    <section className='flex justify-between border-t border-black p-2'>
      <BtnSecundario
        className={
          'font-bold  max-w-fit h-max text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md grid place-content-center py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50 md:mx-0'
        }
        onClickFunction={semanaAnterior}
        texto={'Anterior'}
        tipo={'button'}
      />
      {loading && <LoaderChico className={'self-center'} />}
      <BtnSecundario
        className={
          'col-start-3 col-end-4 font-bold  max-w-fit h-max text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md grid place-content-center py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50 md:mx-0'
        }
        onClickFunction={semanaSiguiente}
        texto={'Siguiente'}
        tipo={'button'}
      />
    </section>
  )
}
