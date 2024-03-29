import { useEffect } from 'react'
import { FormularioContacto } from '../Components/Formularios/Contacto/FormularioContacto.jsx'
const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className='animate-fadeIn grid place-content-center gap-8 py-8 px-4 bg-white'>
      <h1 className='text-3xl font-betonga font-bold text-center text-color-violeta'>
        Algo sobre nosotros
      </h1>
      <div className='max-w-lg m-auto overflow-hidden rounded-xl border border-gray-300 shadow-lg'>
        <img
          className='w-full object-cover object-left-top max-h-[500px]'
          src='https://res.cloudinary.com/fotoscloudinary/image/upload/v1695238636/Portfolio/Centro%20Est%C3%A9tico/Centro-Estetico_oqlsuw.webp'
          alt='Centro Estético'
        />
        <div className='p-8 gap-4 grid text-gray-700 text-[18px] text-pretty'>
          <p>
            Bienvenidos al Centro Estético, con un consultorio en la zona de Cordón, Montevideo.
          </p>
          <p>Nuestra dedicación a la excelencia en el cuidado estético se remonta al año 2019.</p>
          <p>
            En nuestro centro, contamos con un equipo altamente capacitado en una amplia gama de
            masajes, que incluyen descontracturantes, relajantes, prenatales, con piedras calientes,
            modeladores, post operatorios, entre otros.
          </p>
          <p>
            Además, en el año 2023, hemos incorporado la técnica de facilitación en barras de access
            para brindarles aún más opciones de bienestar.
          </p>
          <p>
            En Centro Estético, estamos comprometidos con la formación continua, siempre en busca de
            ofrecer lo mejor a nuestros clientes.
          </p>
          <p>
            Disfrutamos cada momento y crecemos constantemente, tanto en lo personal como en lo
            laboral, para brindarles un servicio de la más alta calidad.
          </p>
          <p>
            Esperamos tener el placer de atenderlos pronto, y agradecemos a nuestros clientes,
            amigos y familiares por su continuo apoyo y confianza en este hermoso viaje.
          </p>
          <p>
            En Centro Estético, nos esforzamos por ofrecer lo mejor. ¿Qué más podemos lograr juntos?
            ¿Cómo podemos mejorar aún más su experiencia?
          </p>
        </div>
      </div>
      <FormularioContacto />
    </main>
  )
}

export default Nosotros
