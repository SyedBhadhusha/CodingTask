import React, { useMemo } from 'react'
import { BsPlayFill } from 'react-icons/bs'
const StartToday = () => {
    const fallbackImage = useMemo(() => 'https://img.freepik.com/premium-vector/grid-transparency-effect-seamless-pattern-png-photoshop_194360-315.jpg', [])

    return (
        <section className='px-8 md:px-32 py-12  bg-primary-black flex flex-col md:flex-row gap-8'>
            <div className='flex-1 h-38 relative'>
                <img alt='' src={fallbackImage} className='w-full h-full object-cover ' />
                <div className='h-12 w-12 flex justify-center items-center bg-white rounded-full absolute inset-0 m-auto shadow-md'>

                    <BsPlayFill className='text-[2rem] text-gray-400 hover:text:black' />
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-2 text-white'>
                <h2 className='font-bold text-[30px]'>What Are You Waiting For?</h2>
                <h2 className='font-bold text-[30px]'>Start It Today?</h2>
                <p className='text-xs text-gray-300 my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eveniet at ipsam harum, magnam saepe. Soluta deleniti possimus beatae unde.</p>
                <button className='w-fit p-2 uppercase bg-secondary-green rounded-md'>fintoutmore</button>
            </div>
        </section>
    )
}

export default StartToday
