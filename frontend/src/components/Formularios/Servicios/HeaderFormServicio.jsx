import { Button } from '../../Botones/Button.jsx'

export const HeaderFormServicio = ({ setMasInfo, masInfo }) => {
  return (
    <header className='relative grid justify-between grid-flow-col w-1/2 mx-auto'>
      <Button
        bgColor={!masInfo}
        onClickFunction={() => {
          setMasInfo(false)
        }}
        texto={'1'}
        tipo={'button'}
      />
      <Button
        bgColor={masInfo}
        onClickFunction={() => {
          setMasInfo(true)
        }}
        texto={'2'}
        tipo={'button'}
      />
    </header>
  )
}
