import { BtnSecundario } from '../Botones/BtnSecundario.jsx'
export const ConfirmationModal = ({ titulo, mensaje, onConfirm, onCancel }) => {
  return (
    <dialog className='fixed top-0 left-0 z-50 h-screen w-full bg-gradient-to-b from-slate-900 to-black flex justify-center items-center px-4'>
      <div className='animate-toastIn bg-color-logo py-8 px-4 rounded-lg grid gap-4 w-full max-w-md'>
        <h3 className='capitalize border-b border-slate-500 text-center text-2xl'>{titulo}</h3>
        <p className='text-center mb-4'>{mensaje}</p>
        <div className='flex justify-evenly'>
          <BtnSecundario
            texto={'Confirmar'}
            onClickFunction={onConfirm}
            className={
              'font-bold bg-color-violeta text-white border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-transparent'
            }
          />
          <BtnSecundario
            texto={'Cancelar'}
            onClickFunction={onCancel}
            className={
              'font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
            }
          />
        </div>
      </div>
    </dialog>
  )
}
