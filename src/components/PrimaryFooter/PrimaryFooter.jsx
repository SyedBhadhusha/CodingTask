import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

const PrimaryFooter = () => {
    return (
        <section className='px-4 md:px-32 py-12 bg-primary-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <Content1 />
            <Content2 />
            <Content3 />
        </section>
    )
}

export default PrimaryFooter
