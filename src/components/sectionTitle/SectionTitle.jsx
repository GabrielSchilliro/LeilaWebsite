import React from 'react'

const SectionTitle = ({ children, id }) => {
    return (
        <h1 id={id && id}
            className='text-3xl font-bold mb-5 mx-auto'>
            {children}
        </h1>
    )
}

export default SectionTitle