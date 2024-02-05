import { Button } from '../../Botones/Button.jsx'

export const HeaderForm = ({ cambiarActivo, seccion }) => {
  return (
    <article className='relative grid justify-between grid-flow-col border-b border-black pb-2'>
      <Button
        id={'Personales'}
        disabled={seccion.Personales}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'1'}
        bgColor={seccion.Personales}
      />
      <Button
        id={'Costumbres'}
        disabled={seccion.Costumbres}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'2'}
        bgColor={seccion.Costumbres}
      />
      <Button
        id={'Afecciones'}
        disabled={seccion.Afecciones}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'3'}
        bgColor={seccion.Afecciones}
      />
      <Button
        id={'Servicio'}
        disabled={seccion.Servicio}
        onClickFunction={cambiarActivo}
        tipo={'button'}
        texto={'4'}
        bgColor={seccion.Servicio}
      />
    </article>
  )
}
