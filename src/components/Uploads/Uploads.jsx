import React from 'react'
import UploadItem from './UploadItem'
import { TbWorldSearch } from 'react-icons/tb'
import { FaLaptop, } from 'react-icons/fa'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsGearFill } from 'react-icons/bs'

const Uploads = () => {
    return (
        <section className='px-8 md:px-32 py-12 bg-transparent grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <UploadItem title={'Dexter Gilbert'} icon={TbWorldSearch} />
            <UploadItem title={'Marie Collier'} icon={FaLaptop} />
            <UploadItem title={'Stefan Morrison'} icon={BiMessageSquareDetail} sectretary />
            <UploadItem title={'Bill Smith'} icon={BsGearFill} />
        </section>
    )
}

export default Uploads
