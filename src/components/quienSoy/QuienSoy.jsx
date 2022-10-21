import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import soyLei from '../../assets/soyLei.jpg'
import flechanegra from '../../assets/flechanegra.png'

const QuienSoy = () => {
  return (
    <div className='bg-gradient-to-r from-pink to-celeste'>
      <div className='container mx-auto py-12 px-4' id='quiensoy'>
        <div className='sm:text-center'>
          <SectionTitle>¿Quién soy?</SectionTitle>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div className='text-center sm:text-justify'>
            <h1 className='text-2xl mt-16 mb-6'>
              Buenas, ¿cómo va? Mi nombre es Leila pero me dicen Lei y lo prefiero :)
            </h1>
            <h2 className='text-xl mb-6'>
              En mi cajonera mental guardo información sobre relaciones públicas, desarrollo de producto, experiencia al cliente, cultura de servicio, comunicación digital, como a su vez herramientas de desarrollo personal.
              Emprendo hace +10 años, tuve una marca propia de joyería de diseño durante 3 años y medio y hoy decido volcarme por completo a mi pasión: acompañar a dueñas de negocio a profesionalizar su comunicación abriendo el juego a experimentar la conexión emocional, poniendo la mente en jaque, para desde ahí, expresarse ante sus clientes.
            </h2>
            <h2 className='text-3xl'>
              Te invito a que te permitas vivir la experiencia de encontrar tu voz para comunicar con propósito.
            </h2>
          </div>
          <div className='grid grid-cols-1'>
            <img src={flechanegra} className='mx-auto py-4 sm:-mt-20 delay-500 animate-bounce' alt='Flecha negra' />
            <img src={soyLei} className='h-96 w-auto mx-auto rounded-3xl' alt='Imagen de Lei Schilliro' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuienSoy