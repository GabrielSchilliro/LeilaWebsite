import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import soyLei from '../../assets/soyLei.jpg'

const QuienSoy = () => {
  return (
    <div className="py-12 px-4 text-center container mx-auto">
      <SectionTitle>¿Quién Soy?</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <h2>Buenas, ¿cómo va? Mi nombre es Leila pero me dicen Lei y lo prefiero :).
          En mi cajonera mental guardo información sobre relaciones públicas, desarrollo de producto, experiencia al cliente, cultura de servicio, comunicación digital, como a su vez herramientas de desarrollo personal.
          Emprendo hace +10 años, tuve una marca propia de joyería de diseño durante 3 años y medio y hoy decido volcarme por completo a mi pasión. Acompañar a emprendedores a profesionalizar la comunicación y el proceso de experiencia al cliente de sus negocios.
        </h2>
        <img src={soyLei} className='' />
      </div>
    </div>
  )
}

export default QuienSoy