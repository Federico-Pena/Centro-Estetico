import { useState } from 'react'
import { Button } from '../../Botones/Button.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'

export const DialogForm = ({ handleChange, values, closeDialog }) => {
  const [dialogInput, setDialogInput] = useState('')

  const handleDialogSubmit = (e) => {
    e.preventDefault()
    if (dialogInput.trim()) {
      handleChange({
        target: { name: 'beneficiosLista', value: [...values.beneficiosLista, dialogInput] }
      })
      setDialogInput('')
    }
  }
  const handleEliminarBeneficio = (value) => {
    const filtrados = values.beneficiosLista.filter((b) => b !== value)
    handleChange({ target: { name: 'beneficiosLista', value: filtrados } })
  }
  return (
    <dialog open className='fixed inset-0 h-screen w-full z-50 bg-whit grid p-4 '>
      <form
        className='animate-fadeIn grid gap-4 rounded-lg w-full max-w-lg m-auto p-4 bg-color-verde-blanco border border-gray-300 shadow-lg'
        title='Formulario beneficio'>
        <TextAreaLabel
          name={'beneficiosLista'}
          placeholder={'Beneficio'}
          onChange={(e) => setDialogInput(e.target.value)}
          value={dialogInput}
        />
        <strong className='text-center text-color-violeta font-betonga text-xl tracking-wider'>
          Beneficios: {values.beneficiosLista.length || 0}
        </strong>
        <div className='grid gap-4 max-h-72 overflow-auto'>
          {values.beneficiosLista.map((value, i) => (
            <ul
              key={i}
              className='grid gap-4 border border-slate-500 rounded-lg p-4 items-center grid-cols-[auto_1fr_auto]'>
              <li>{i + 1}</li>
              <li>{value}</li>
              <li>
                <Button texto={'Borrar'} onClickFunction={() => handleEliminarBeneficio(value)} />
              </li>
            </ul>
          ))}
        </div>
        <div className='grid grid-cols-2 py-4 gap-4'>
          <Button
            className={'w-full'}
            bgColor={true}
            tipo={'submit'}
            texto={'Agregar'}
            onClickFunction={handleDialogSubmit}
          />
          <Button
            className={'w-full'}
            tipo={'button'}
            texto={'Volver'}
            onClickFunction={closeDialog}
          />
        </div>
      </form>
    </dialog>
  )
}
