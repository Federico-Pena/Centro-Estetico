export const PacienteListItemHeader = ({ foto, nombre }) => {
  return (
    <header className='grid justify-items-center gap-4 border-b border-black pb-4'>
      {foto && (
        <img src={foto.secure_url} alt={nombre} className='w-12 h-12 rounded-full object-cover' />
      )}
      <span className='uppercase text-center'>{nombre}</span>
    </header>
  )
}
