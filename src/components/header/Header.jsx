import React from 'react'
import recurso1 from '../../assets/recurso1.png'
import recurso2 from '../../assets/recurso2.png'

const Header = () => {
    return (
        <div className='container mx-auto mt-10 mb-5 sm:mb-10 py-12 px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='text-center sm:text-justify' >
                    <h1 className='text-3xl mb-6'>
                        Descifremos juntas como encender tu propia voz, para comunicar de manera clara el propósito de tu negocio.
                    </h1>
                    <h2 className='text-xl mb-6'>
                        Parte de este proceso es entender tu realidad, cómo te sentís gestionando tu negocio y cómo querés sentirte realmente. La clave es escucharte, para poder comunicar en un formato que resuene con vos misma, y a su vez, conecte con las emociones de tus clientes.
                        Te acompaño en el camino para que puedas transformar tu negocio, ganar libertad, organización y claridad a través de una estrategia de comunicación emocional y experiencia al cliente.
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