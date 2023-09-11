import React, { useMemo } from 'react'
import FeatureItem from './FeatureItem'
import { TbWorldSearch } from 'react-icons/tb'
import { FaLaptop, } from 'react-icons/fa'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsGearFill } from 'react-icons/bs'
const Features = () => {

    const features = useMemo(() => [
        {
            id: 1,
            icon: TbWorldSearch,
            title: 'Research',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus aliquid perspiciatis suscipit excepturi labore aspernatur earum placeat ex cupiditate accusamus ipsum quis.'
        },
        {
            id: 2,
            icon: FaLaptop,
            title: 'Fully Customizable',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus aliquid perspiciatis suscipit excepturi labore aspernatur earum placeat ex cupiditate accusamus ipsum quis.'
        },
        {
            id: 3,
            icon: BiMessageSquareDetail,
            title: 'Cordination',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus aliquid perspiciatis suscipit excepturi labore aspernatur earum placeat ex cupiditate accusamus ipsum quis.'
        },
        {
            id: 4,
            icon: BsGearFill,
            title: 'Test',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus aliquid perspiciatis suscipit excepturi labore aspernatur earum placeat ex cupiditate accusamus ipsum quis.'
        },
    ], [])
    return (
        <section className=' px-8 md:px-32 py-12 bg-transparent grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {features.map(f => (
                <FeatureItem key={f.id} {...f} />
            ))}
        </section>
    )
}

export default Features
