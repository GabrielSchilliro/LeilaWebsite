import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import soyLei from '../../assets/soyLei.jpg'
import flecharosa from '../../assets/flechanegra.png'

const QuienSoy = () => {
  return (
    <div className='bg-gradient-to-r from-pink to-celeste'>
      <div className='container mx-auto py-12 px-4' id='quiensoy'>
        <SectionTitle>¿Quién soy?</SectionTitle>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div className='text-center sm:text-justify'>
            <h1 className='text-xl mt-16 mb-6'>
              Buenas, ¿cómo va? Mi nombre es Leila pero me dicen Lei y lo prefiero :)
            </h1>
            <h2 className='text-2xl mb-6'>
              En mi cajonera mental guardo información sobre relaciones públicas, desarrollo de producto, experiencia al cliente, cultura de servicio, comunicación digital, como a su vez herramientas de desarrollo personal.
            </h2>
            <h2 className='text-xl'>
              Emprendo hace +10 años, tuve una marca propia de joyería de diseño durante 3 años y medio y hoy decido volcarme por completo a mi pasión. Acompañar a emprendedores a profesionalizar la comunicación y el proceso de experiencia al cliente de sus negocios.
            </h2>
          </div>
          <div className='grid grid-cols-1'>
            <img src={flecharosa} className='mx-auto py-4 sm:-mt-20 delay-500 animate-bounce' alt='Flecha Rosa' />
            <img src={soyLei} className='h-96 w-auto mx-auto rounded-3xl' alt='Imagen de Lei Schilliro' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuienSoy