import React from 'react'
import ContentHeader from './ContentHeader'

const Content2 = () => {
    return (
        <div className='flex flex-col gap-2'>
            <ContentHeader title={'Get in Touch'} />
            <div className='flex gap-4 items-start justify-start text-gray-400 text-sm'>
                <p className='w-12'>Address:</p>
                <address className='flex-auto'>
                    <p>66 South street</p>
                    <p>Window six Wonderland</p>
                </address>
            </div>
            <div className='flex gap-4 items-start justify-start text-gray-400 text-sm'>
                <p className='w-12'>Phone:</p>
                <address className='flex-auto'>
                    <p>+123 345 678 -office </p>
                    <p>+123 345 678 -fax </p>
                </address>
            </div>
            <div className='flex gap-4 items-start justify-start text-gray-400 text-sm'>
                <p className='w-12'>Email:</p>
                <address className='flex-auto'>
                    <p>lorem@gmail.com</p>
                </address>
            </div>

        </div>
    )
}

export default Content2
