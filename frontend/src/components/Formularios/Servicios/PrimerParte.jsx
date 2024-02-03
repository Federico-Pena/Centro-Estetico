import { LabelInput } from '../LabelInput.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'

export const PrimerParte = ({ servicio, values, handleChange, errors, masInfo, edicion }) => {
  return (
    <section className={`grid gap-4 border-t border-slate-500 py-2  ${masInfo ? 'hidden' : ''}`}>
      <div className={'grid gap-4 border-slate-500 py-2'}>
        <LabelInput
          className={`${servicio?.nombre ? 'capitalize' : ''}`}
          disabled={servicio?.nombre ? true : false}
          value={values.nombre}
          labelText={'Nombre:'}
          name={'nombre'}
          onChange={handleChange}
          placeholder={'Drenaje Linfático'}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className='grid gap-4 border-t border-slate-500 py-2'>
        <label htmlFor='imagen'>{edicion ? 'Cambiar imagen:' : 'Imagen:'}</label>
        <input
          name='imagen'
          id='imagen'
          className='cursor-pointer border border-slate-500 rounded-lg p-4'
          type='file'
          accept='image/*'
          onChange={handleChange}
        />
        {(values.imgPreview || servicio.imagen?.secure_url) && (
          <>
            <span>Imagen actual</span>
            <img
              className='justify-self-center aspect-square rounded-lg object-cover object-center'
              src={values.imgPreview || servicio.imagen?.secure_url}
              alt={`Imagen de servicio ${values.nombre || ''}`}
            />
          </>
        )}
        {errors.imagen && <small className='text-red-600'>* {errors.imagen}</small>}
      </div>
      <div className='grid gap-4 border-t border-slate-500 py-2'>
        <TextAreaLabel
          name={'descripcion'}
          labelText={'Descripción:'}
          value={values.descripcion}
          onChange={handleChange}
          error={errors.descripcion}
          placeholder={
            'El drenaje linfático es una técnica de masaje suave y ligero que se utiliza para estimular el sistema linfático del cuerpo. El sistema linfático es una red compleja de vasos y ganglios linfáticos que ayudan a eliminar los desechos y el exceso de líquido de los tejidos.'
          }
        />
      </div>
    </section>
  )
}
