import React, { useMemo } from 'react'

const UploadItem = ({ title, icon: Icon, sectretary }) => {
  const fallbackImage = useMemo(() => 'https://img.freepik.com/premium-vector/grid-transparency-effect-seamless-pattern-png-photoshop_194360-315.jpg', [])

  return (
    <div className='flex flex-col items-center justify-center '>
      <div className=' w-24 h-24 rounded-full relative'>
        {sectretary ? <div className='w-full h-full rounded-full bg-secondary-green flex items-center justify-center text-white text-xs font-semibold'>Sectretary</div> : <img alt='' src={fallbackImage} className='w-full h-full object-cover rounded-full' />}
        <div className='absolute bottom-0 flex items-center shadow-md justify-center z-10 right-0 w-8 h-8 rounded-full bg-secondary-green text-white'>
          <Icon color='white' className='text-md' />
        </div>
      </div>
      <h4 className='text-md my-1 group-hover:text-secondary-green'>{title}</h4>
      <p className='text-sm text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates corrupti eos saepe cum nisi.</p>
    </div>
  )
}

export default UploadItem
