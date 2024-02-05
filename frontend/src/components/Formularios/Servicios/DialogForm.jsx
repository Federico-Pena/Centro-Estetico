import { useState } from 'react'
import { Button } from '../../Botones/Button.jsx'
import { TextAreaLabel } from '../TextAreaLabel.jsx'
import { Delete } from '../../Icons/Icons.jsx'

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
    <dialog
      open
      className='fixed inset-0 h-screen w-full z-50 bg-gradient-to-b from-white to-color-verde-blanco grid p-4 '>
      <form
        className='animate-fadeIn grid gap-4 rounded-lg w-full max-w-lg m-auto p-4 bg-color-logo border border-black'
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
        <div className='grid gap-4 max-h-72 overflow-auto p-4'>
          {values.beneficiosLista.map((value, i) => (
            <ul
              key={i}
              className='grid gap-4 border border-slate-500 rounded-lg p-4 items-center grid-cols-[auto_1fr_auto]'>
              <li>{i + 1}</li>
              <li>{value}</li>
              <li
                className='[&>svg]:text-xl [&>svg]:cursor-pointer hover:[&>svg]:scale-110 hover:[&>svg]:text-color-violeta [&>svg]:transition'
                onClick={() => handleEliminarBeneficio(value)}>
                <Delete />
              </li>
            </ul>
          ))}
        </div>
        <div className='grid grid-cols-2'>
          <Button
            bgColor={true}
            tipo={'submit'}
            texto={'Agregar'}
            onClickFunction={handleDialogSubmit}
          />
          <Button tipo={'button'} texto={'Volver'} onClickFunction={closeDialog} />
        </div>
      </form>
    </dialog>
  )
}
