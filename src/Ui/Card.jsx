import React from 'react'
import cake from '../assets/cake.jpg'
import review1 from '../assets/review1.jpg'
import review2 from '../assets/review2.jpg'


function Card() {
  return (
    <div>
        <div className='bg-black w-full h-fit grid grid-cols-3 gap-5 px-10 pt-10 pb-20'>
                <div className='text-2xl font-thin'>
                  <img className='w-full h-63.5' src={review1} alt='photo' />
                  <p className='text-white pt-5'>Cashmere Tank + Bag</p>
                  <p className='text-amber-300'>$98.00</p>
                </div>
                <div className='text-2xl font-thin'>
                  <img className='w-full h-63.5' src={cake} alt='photo' />
                  <p className='text-white pt-5'>Sweet Surprise</p>
                  <p className='text-amber-300'>$98.00</p>
                </div>
                <div className='text-2xl font-thin'>
                  <img className='w-full h-63.5' src={review2} alt='photo' />
                  <p className='text-white pt-5'>Delightful Lemon</p>
                  <p className='text-amber-300'>$98.00</p>
                </div>
        
              </div>
    </div>
  )
}

export default Card