import React from 'react'
import recurso1 from '../../assets/recurso1.png'
import recurso2 from '../../assets/recurso2.png'

const Header = () => {
    return (
        <div className='container mx-auto mt-10 mb-5 sm:mb-10 py-12 px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='text-center sm:text-justify' >
                    <h1 className='text-xl mb-6'>
                        Creemos en conjunto, la estrategia de comunicación digital y experiencia al cliente de tu negocio.
                    </h1>
                    <h2 className='text-2xl mb-6'>
                        Parte de este proceso es entender tu día a día y cómo te sentís. Sos el eje de tu proyecto, y sos tu proyecto más importante. Para poder crecer, hay que ir hacia adentro, escucharnos y desde ahí, comunicar.
                        Te acompaño en el camino para que puedas transformar tu negocio y ganar libertad, organización y claridad sobre cómo y dónde comunicarte con tus clientes.
                    </h2>
                    <h2 className='text-xl'>
                        Te acompaño en el camino para que puedas transformar tu negocio y ganar libertad, organización y claridad sobre cómo y dónde comunicarte con tus clientes.
                    </h2>
                </div>
                <div className='grid grid-cols-2'>
                    <img src={recurso2} className='h-10 sm:h-20 w-auto mx-auto animate-pulse' alt='Imagen de Lei Schilliro' />
                    <div></div>
                    <div></div>
                    <img src={recurso1} className='h-12 sm:h-20 w-auto mx-auto animate-pulse' alt='Imagen de Lei Schilliro' />
                </div>
            </div>
        </div>
        
    )
}

export default Header