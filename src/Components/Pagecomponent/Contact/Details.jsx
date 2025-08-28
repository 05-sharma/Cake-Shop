import React from 'react'
import map from '../../../assets/map.jpg'

function Details() {

  return (
    <div className='bg-black w-full h-fit pb-20'>
        <div className='text-white text-3xl font-thin px-10 pt-20'>
            <p>Get in Touch</p>
        </div>
        <div className='w-full h-fit grid grid-cols-2 px-10 pt-10'>
            <div className='w-200 h-fit'>
                <input className='text-white border-1 w-full h-50 px-3 ' type='text'  placeholder='Enter a message'/>
                <div className='grid grid-cols-2 gap-6 py-6'>
                    <input className='text-white border-1 w-full h-12 px-3 ' type='text'  placeholder='Enter your name'/>
                    <input className='text-white border-1 w-full h-12 px-3' type='text'  placeholder='Email'/>
                </div>
                <input className='text-white border-1 w-full h-12 px-3' type='mail'  placeholder='Enter Subject'/>
                <button className='text-black w-fit py-4 px-6 mt-10 bg-amber-300  hover:bg-amber-400'>SEND</button>
            </div>
            <div className='pl-60'>
                <img className='w-full h-86' src={map}/>
            </div>
        </div>  
    </div>
  )
}

export default Details