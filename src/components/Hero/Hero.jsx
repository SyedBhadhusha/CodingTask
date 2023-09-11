import React from 'react'
import Navbar from './Navbar'
import Carousal from './Carousal'

const Hero = () => {
    return (
        <section className='bg-primary-green h-screen px-8 md:px-32 py-8'>
            <Navbar />
            <Carousal />
        </section>
    )
}

export default Hero
