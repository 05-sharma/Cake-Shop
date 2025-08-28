import React from 'react'
import star from '../../../assets/star.png'

function Testimonial() {
  return (
    <div>
        <div className='bg-black w-full h-fit text-white py-20 px-10'>
                <h1 className='text-5xl font-thin w-full flex justify-center'>Food Lover's Say</h1>
                <div className='grid grid-cols-3 gap-10 mt-20'>
                  <div className='border-1 border-amber-300 px-10 py-10 flex-col'>
                    <div className='flex pb-3'>
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                    </div>
                    <p className='text-2xl font-thin pb-5'>"Consectetur adipiscing elit, sed do eiusmod
                      tempor dunt ulter labore et dolore magna."</p>
                    <p>Wilma Mumduya</p>
                  </div>
                  <div className='border-1 border-amber-300 px-10 py-10 flex-col'>
                    <div className='flex pb-3'>
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                    </div>
                    <p className='text-2xl font-thin pb-5'>"Consectetur adipiscing elit, sed do eiusmod
                      tempor dunt ulter labore et dolore magna."</p>
                    <p>Wilma Mumduya</p>
                  </div>
                  <div className='border-1 border-amber-300 px-10 py-10 flex-col'>
                    <div className='flex pb-3'>
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                      <img className='w-6' src={star} alt='photo' />
                    </div>
                    <p className='text-2xl font-thin pb-5'>"Consectetur adipiscing elit, sed do eiusmod
                      tempor dunt ulter labore et dolore magna."</p>
                    <p>Wilma Mumduya</p>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Testimonial