import { LabelInput } from '../LabelInput.jsx'

export const DatosPersonales = ({ edicion, handleChange, errors, values }) => {
  return (
    <>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          className={`${values?.nombre ? 'capitalize' : ''}`}
          value={values.nombre}
          labelText={'Nombre:'}
          name={'nombre'}
          onChange={handleChange}
          placeholder={'Maria Perez'}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.fechaDeNac}
          labelText={'Nacimiento:'}
          name={'fechaDeNac'}
          onChange={handleChange}
          type={'date'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.cedula}
          labelText={'Cédula:'}
          name={'cedula'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.edad}
          labelText={'Edad:'}
          name={'edad'}
          onChange={handleChange}
          type={'number'}
          errors={errors}
          min={0}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.sociedad}
          labelText={'Emergencia / Sociedad:'}
          name={'sociedad'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.telefono}
          labelText={'Teléfono:'}
          name={'telefono'}
          onChange={handleChange}
          type={'tel'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.observaciones}
          labelText={'Observaciones:'}
          name={'observaciones'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <label>Contacto de Emergencia</label>
        <LabelInput
          value={values.nombreContacto2}
          labelText={'Nombre:'}
          name={'nombreContacto2'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
        <LabelInput
          value={values.telefonoContacto2}
          labelText={'Teléfono:'}
          name={'telefonoContacto2'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className='grid gap-4'>
        <label htmlFor='Foto'>{edicion ? 'Cambiar Foto:' : 'Foto:'}</label>
        <input
          name='foto'
          className='cursor-pointer border border-b border-slate-500 rounded-lg p-4'
          type='file'
          accept='image/*'
          onChange={handleChange}
        />
        {(values.foto || values.imgPreview) && (
          <>
            <span>Imagen actual:</span>
            <img
              className='justify-self-center aspect-square rounded-lg object-cover object-center w-28 h-28'
              src={values.imgPreview || values.foto?.secure_url}
              alt={`Imagen del paciente ${values.nombre || ''}`}
            />
          </>
        )}
      </div>
    </>
  )
}
