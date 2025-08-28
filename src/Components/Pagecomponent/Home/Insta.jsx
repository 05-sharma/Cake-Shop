import React from 'react'
import bg from '../../../assets/bg.jpg'
import cake from '../../../assets/cake.jpg'
import review1 from '../../../assets/review1.jpg'
import review2 from '../../../assets/review2.jpg'

function Insta() {
  return (
    <div>
        <div className='bg-black text-white font-thin text-5xl flex-col justify-center '>
                <div className='w-full flex-col'>
                  <h1 className='w-full flex justify-center py-20'>Follow us on Instagram</h1>
                </div>
                <div className='w-full grid grid-cols-4 gap-0 items-center pl-7 pb-20 '>
                  <img className='w-70 h-47' src={cake} alt='photo' />
                  <img className='w-70 h-47' src={review1} alt='photo' />
                  <img className='w-70 h-47' src={review2} alt='photo' />
                  <img className='w-70 h-47 ' src={bg} alt='photo' />
                </div>
              </div>
    </div>
  )
}

export default Insta