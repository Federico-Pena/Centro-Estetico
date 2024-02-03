export const Loader = () => {
  return (
    <div className='fixed inset-0 z-50 grid place-content-center h-screen w-screen bg-gray-950'>
      <span
        className=' h-[200px] w-[200px] relative after:content-[""] after:absolute after:w-[40px] after:h-[40px] after:bg-color-violeta after:left-1/2 after:top-1/2 before:top-1/2 before:left-1/2  after:animate-loader
			'></span>
    </div>
  )
}
