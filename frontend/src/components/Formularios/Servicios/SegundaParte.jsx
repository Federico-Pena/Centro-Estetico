import { Button } from '../../Botones/Button.jsx'
import { LabelInput } from '../LabelInput.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'

export const SegundaParte = ({
  masInfo,
  values,
  handleChange,
  errors,
  openDialog,
  handleVerServicio
}) => {
  return (
    <section className={`${masInfo ? '' : 'hidden'}`}>
      <div className='grid gap-4 border-t border-slate-500 py-2'>
        <TextAreaLabel
          name={'descripcionSecundaria'}
          labelText={'Descripción Mas info:'}
          value={values.descripcionSecundaria}
          onChange={handleChange}
          error={errors.descripcionSecundaria}
          placeholder={
            'Durante una sesión de drenaje linfático, se aplican movimientos suaves y rítmicos sobre la piel, siguiendo el trayecto de los vasos linfáticos. Estos movimientos tienen como objetivo estimular el flujo de la linfa, un líquido transparente que transporta nutrientes y desechos a través del sistema linfático'
          }
        />
      </div>

      <div className='grid gap-4 border-t border-slate-500 py-2'>
        <LabelInput
          value={values.tituloBeneficios}
          labelText={'Titulo Beneficios:'}
          name={'tituloBeneficios'}
          onChange={handleChange}
          placeholder={'El drenaje linfático puede tener varios beneficios para el cuerpo'}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className='grid gap-4 border-t border-slate-500 py-4'>
        <Button
          className={'w-full'}
          tipo={'button'}
          texto={'Añadir beneficio'}
          onClickFunction={openDialog}
        />
        <p>Beneficios agregados: {values.beneficiosLista?.length}</p>
      </div>
      {errors.beneficiosLista && <small className='text-red-500'>* {errors.beneficiosLista}</small>}
      <Button
        className={'w-full my-2'}
        onClickFunction={handleVerServicio}
        tipo={'button'}
        texto={'Pre-visualizar'}
      />
    </section>
  )
}
