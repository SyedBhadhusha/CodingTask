import React from 'react'

const FeatureItem = ({ icon: Icon, desc, title }) => {
    return (
        <div className='flex flex-col items-center justify-center group'>
            <div className='w-16 h-16 rounded-full bg-primary-black group-hover:bg-primary-green flex items-center justify-center p-4 ring-offset-8 ring ring-transparent group-hover:ring-secondary-green mb-8'>
                <Icon color='white' className='text-2xl' />
            </div>
            <h4 className='text-lg my-1 group-hover:text-secondary-green'>{title}</h4>
            <p className='text-sm text-gray-400 text-center'>{desc}</p>
        </div>
    )
}

export default FeatureItem
