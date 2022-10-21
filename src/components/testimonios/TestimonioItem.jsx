import React from 'react'

const TestimonioItem = ({ profileFoto, name, testimonio }) => {
    return (
        <div className='px-2'>
            <img src={profileFoto} className='mx-auto rounded-full w-24' alt='testimonios' />
            <h2 className="text-3xl py-2">
                {name}
            </h2>
            <p className='w-2/3 mx-auto py-2'>{testimonio}</p>
        </div>
    )
}

export default TestimonioItem