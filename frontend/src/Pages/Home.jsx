import { Link } from 'react-router-dom'
import testimonios from '../../testimonios.json'
import { Testimonio } from '../Components/Testimonio/Testimonio.jsx'
const Home = () => {
  return (
    <main className='animate-fadeIn grid gap-8 place-content-center'>
      <section className='grid items-center max-w-5xl min-h-[80vh] px-4 py-8 md:grid-flow-col landscape:grid-flow-col'>
        <figure className='flex justify-center'>
          <img
            className='max-h-[80vh] w-full aspect-square object-cover rounded-full'
            src='https://res.cloudinary.com/fotoscloudinary/image/upload/v1692718887/Masajes/heroImg_ut1ehd.webp'
            alt='imagen de sesión de masaje '
          />
        </figure>
        <div className='grid min-w-full gap-4 text-center col-start-1 w-10/12 md:text-left'>
          <h1 className='text-3xl text-pretty font-bold font-betonga tracking-tight text-color-violeta md:text-4xl'>
            ¡Descubre los beneficios de los masajes terapéuticos y modeladores!
          </h1>
          <p className=' md:text-xl text-gray-800'>
            Relájate y disfruta de un momento de tranquilidad
          </p>
          <Link
            className='font-bold mt-8 mx-auto max-w-fit h-max text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md grid place-content-center py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50'
            title='Ir a Servicios'
            to='/Servicios'>
            Reserva ahora
          </Link>
        </div>
      </section>
      <section className='grid max-w-5xl p-4 pb-8'>
        <h2 className='font-betonga my-8 mx-0 tracking-tight text-center text-3xl font-bold text-color-violeta'>
          Testimonios
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {testimonios.map((test, i) => (
            <Testimonio key={i} testimonio={test} />
          ))}
        </div>
      </section>
    </main>
  )
}
export default Home
