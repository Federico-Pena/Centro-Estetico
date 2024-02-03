import { LabelInput } from '../LabelInput.jsx'

export const Afecciones = ({ values, errors, handleChange }) => {
  return (
    <>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.alergia}
          labelText={'Alergia:'}
          name={'alergia'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.circulatorio}
          labelText={'Problemas Circulatorios:'}
          name={'circulatorio'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.embarazo}
          labelText={'Embarazo:'}
          name={'embarazo'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.operaciones}
          labelText={'Operaciones:'}
          name={'operaciones'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.oncologicas}
          labelText={'Enfermedades Oncológicas:'}
          name={'oncologicas'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.enfermedades}
          labelText={'Otras enfermedades:'}
          name={'enfermedades'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 border-b border-slate-500 py-2'}>
        <LabelInput
          value={values.medicamentos}
          labelText={'Medicamentos:'}
          name={'medicamentos'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className={'grid gap-4 py-2'}>
        <LabelInput
          value={values.implantes}
          labelText={'Implantes:'}
          name={'implantes'}
          onChange={handleChange}
          type={'text'}
          errors={errors}
        />
      </div>
    </>
  )
}
