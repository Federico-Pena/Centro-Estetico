import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'

export const HeaderFormServicio = ({ setMasInfo, masInfo }) => {
  return (
    <header className='relative grid justify-between grid-flow-col w-1/2 mx-auto'>
      <div className='absolute -z-10 rounded h-1 w-full bg-color-violeta self-center'></div>
      <BtnSecundario
        className={`${
          masInfo ? 'bg-white text-color-violeta' : ''
        } border w-8 h-8 grid place-content-center border-color-violeta bg-color-violeta text-white rounded-full p-2 hover:text-color-violeta hover:bg-color-logo transition-colors`}
        onClickFunction={() => {
          setMasInfo(false)
        }}
        texto={'1'}
        tipo={'button'}
      />
      <BtnSecundario
        className={`${
          masInfo ? '' : 'bg-white text-color-violeta'
        } border w-8 h-8 grid place-content-center border-color-violeta bg-color-violeta text-white rounded-full p-2 hover:text-color-violeta hover:bg-color-logo transition-colors`}
        onClickFunction={() => {
          setMasInfo(true)
        }}
        texto={'2'}
        tipo={'button'}
      />
    </header>
  )
}
