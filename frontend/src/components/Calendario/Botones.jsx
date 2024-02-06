import { Button } from '../Botones/Button.jsx'
import { LoaderChico } from '../Loader/LoaderChico.jsx'

export const Botones = ({ loading, semanaAnterior, semanaSiguiente }) => {
  return (
    <section className='grid grid-flow-col gap-4 border-t border-black p-4'>
      <Button
        className={'w-full'}
        onClickFunction={semanaAnterior}
        texto={'Anterior'}
        tipo={'button'}
      />
      {loading && <LoaderChico className={'self-center'} />}
      <Button
        className={'w-full'}
        onClickFunction={semanaSiguiente}
        texto={'Siguiente'}
        tipo={'button'}
      />
    </section>
  )
}
