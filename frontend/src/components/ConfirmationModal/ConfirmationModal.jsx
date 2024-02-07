import { Button } from '../Botones/Button.jsx'
export const ConfirmationModal = ({ titulo, mensaje, onConfirm, onCancel }) => {
  return (
    <dialog className='fixed top-0 left-0 z-50 h-screen w-full bg-gradient-to-b from-slate-900 to-black flex justify-center items-center px-4'>
      <div className='animate-fadeIn bg-color-logo py-8 px-4 rounded-lg grid gap-4 w-full max-w-md'>
        <h3 className='capitalize border-b border-slate-500 text-center text-2xl'>{titulo}</h3>
        <p className='text-center mb-4'>{mensaje}</p>
        <div className='flex justify-evenly'>
          <Button texto={'Confirmar'} bgColor={true} onClickFunction={onConfirm} />
          <Button texto={'Cancelar'} onClickFunction={onCancel} />
        </div>
      </div>
    </dialog>
  )
}
