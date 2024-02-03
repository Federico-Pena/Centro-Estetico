import { useState } from 'react'
import { LoaderChico } from '../Loader/LoaderChico.jsx'
import { BtnSecundario } from '../Botones/BtnSecundario.jsx'

const Pagination = ({ loading, totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-auto px-3 py-1 rounded-full border hover:scale-105 transition-transform max-w-fit ${
            currentPage === i ? 'bg-color-violeta text-white' : 'bg-transparent text-gray-700'
          }`}>
          {i}
        </button>
      )
    }
    return pageNumbers
  }

  return (
    <section className='grid grid-rows-[auto_auto_1fr] py-4 gap-4'>
      <div className='flex justify-between items-center gap-4'>
        <BtnSecundario
          disabled={currentPage === 1}
          tipo={'button'}
          className={
            'font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
          }
          texto={'Anterior'}
          onClickFunction={() => handlePageChange(currentPage - 1)}
        />

        <p className='text-center'>{totalPages} páginas </p>
        <BtnSecundario
          disabled={currentPage === totalPages}
          tipo={'button'}
          className={
            'font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
          }
          texto={'Siguiente'}
          onClickFunction={() => handlePageChange(currentPage + 1)}
        />
      </div>
      <span className='grid grid-flow-col items-center gap-2 overflow-auto min-h-9'>
        {loading ? <LoaderChico className={'justify-self-center'} /> : renderPageNumbers()}
      </span>
    </section>
  )
}

export default Pagination
