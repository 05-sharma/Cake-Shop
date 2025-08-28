import React from 'react'
import bg from '../../../assets/bg.jpg'


function Herosection() {
  return (
    <div className='w-full h-fit flex-row items-center justify-end gap-10'>
      <div className='text-6xl font-light mt-40 ml-10 flex-colz-20 z-20 h-fit text-white absolute border-1 w-fit py-4 px-2'>
                  <p>Healthy Made</p>
                  <p>Delicious Cake</p>
        </div>
        <div className='text-black w-fit py-4 px-6 ml-10 mt-90 bg-amber-300 z-20 absolute hover:bg-amber-400'>
                  <button>ORDER NOW</button>
        </div>
        <div className='relative'>
                <div className='absolute z--1 h-full w-full opacity-44 bg-black top-0 left-0'>a</div>
                <img className='w-full h-150 z-0 top-0 relative bg-white opacity-100' src={bg} alt='photo' />
        
        </div>
    </div>
  )
}

export default Herosection