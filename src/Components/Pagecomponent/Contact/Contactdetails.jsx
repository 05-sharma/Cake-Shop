import React from 'react'
import bg from '../../../assets/bg.jpg'

function Contactdetails() {
  return (
    <div className='w-full h-fit flex-row items-center justify-end gap-10'>
                  <div className='text-6xl font-light mt-35 ml-10 flex-colz-20 z-20 h-fit text-white absolute w-fit py-4 px-2'>
                              <p>Contact Us</p>
                    </div>
                    
                    <div className='relative'>
                            <div className='absolute z--1 h-full w-full opacity-44 bg-black top-0 left-0'>a</div>
                            <img className='w-full h-90 object-cover z-0 top-0 relative bg-white opacity-80' src={bg} alt='photo' />
                    
                    </div>
                </div>
  )
}

export default Contactdetails