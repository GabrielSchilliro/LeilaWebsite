import React from 'react';
import { AiOutlineStar, AiOutlineRocket } from 'react-icons/ai';
/* import { GiGalaxy } from 'react-icons/gi'; */

const services = [
    {
        title: 'Consultorías',
        subtitle: 'Diseñadas para quienes sólo buscan evacuar dudas',
        icon: <AiOutlineStar className='w-full h-full' />,
        description: 'Espacios virtuales de 1hr de duración, pensados para aquellas personas que tienen dudas puntuales sobre la comunicación de su negocio. Mediante un encuentro virtual podrás realizar todas las preguntas que desees, las cuales responderé por  completo dentro del plazo de tiempo estipulado. El enfoque siempre es emocional, entendiendo que todo tiene un tiempo de decantación, mis respuestas serán acorde a la información que reciba previamente sobre tu negocio mediante un formulario que deberás responder antes del encuentro.',
    },
    {
        title: 'Mentorías',
        subtitle: 'Diseñadas para quienes toman acción profunda en su negocio',
        icon: <AiOutlineRocket className='w-full h-full' />,
        description: 'Te acompaño a lo largo de 1 mes para abordar los objetivos que desees y bajar una estrategia de comunicación emocional, y experiencia al cliente clara. Abordaremos 4 encuentros virtuales de 1hr cada uno (uno por semana durante 4 semanas) donde resolveremos dudas, realizaremos actividades, y crearemos un plan de acción. Mediante un enfoque introspectivo, emocional y energético, iremos a tu propio ritmo. Recibirás acompañamiento por whatsapp para dudas urgentes y trabajaremos sobre un archivo compartido durante todo el mes. Previo al inicio de este proceso, deberás responder un formulario que dará inicio a este camino, y sobre esa base, trabajaremos.',
    }/* ,
    {
        title: 'Cursos',
        icon: <GiGalaxy className='w-full h-full' />,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati rerum officia recusandae tempore ex praesentium repellendus veritatis, adipisci earum, culpa hic temporibus sunt dignissimos deleniti excepturi quam? Voluptatum, optio eum.',
    } */
];

export default services