export const CarruselImagen = ({ promos, handleReservar, currentIndex }) => {
  return (
    <div className='overflow-hidden flex rounded-lg border border-slate-500'>
      {promos.map((promocion) => (
        <figure
          key={promocion._id}
          className='transition-transform duration-500 relative flex-[0_0_100%]'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <img
            className='object-cover w-full h-full bg-slate-50 aspect-square max-h-[500px]'
            src={promocion.imagen?.secure_url || promocion.servicio.imagen?.secure_url}
            alt={promocion.nombre}
          />
          <button
            className='absolute w-full max-w-64 bottom-4 left-1/2 -translate-x-1/2 font-bold text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-transparent'
            onClick={() => handleReservar(promocion)}>
            Reservar
          </button>
        </figure>
      ))}
    </div>
  )
}
