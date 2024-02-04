import { BtnSecundario } from '../../Botones/BtnSecundario.jsx'
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
      <div className='grid gap-4 border-t border-slate-500 py-2'>
        <p>Beneficios agregados: {values.beneficiosLista?.length}</p>
        <BtnSecundario
          className={
            'border border-color-violeta bg-color-violeta text-white flex items-center justify-center gap-2  max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity [&>span>svg]:text-xl [&>span>svg]:hover:rotate-180 [&>span>svg]:transition'
          }
          tipo={'button'}
          texto={'Añadir beneficio'}
          onClickFunction={openDialog}
        />
      </div>
      {errors.beneficiosLista && <small className='text-red-500'>* {errors.beneficiosLista}</small>}

      <div className='grid grid-flow-col gap-4 border-t border-slate-500 pt-8'>
        <BtnSecundario
          className={
            'border border-color-violeta bg-color-violeta text-white flex items-center justify-center gap-2  max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity [&>span>svg]:text-xl [&>span>svg]:hover:rotate-180 [&>span>svg]:transition'
          }
          onClickFunction={handleVerServicio}
          tipo={'button'}
          texto={'Pre-visualizar'}
        />
        <BtnSecundario
          className={
            'border border-color-violeta bg-color-violeta text-white flex items-center justify-center gap-2  max-w-fit justify-self-center rounded-lg px-4 py-2  hover:opacity-70 transition-opacity [&>span>svg]:text-xl [&>span>svg]:hover:rotate-180 [&>span>svg]:transition'
          }
          tipo={'submit'}
          texto={'Enviar'}
        />
      </div>
    </section>
  )
}
