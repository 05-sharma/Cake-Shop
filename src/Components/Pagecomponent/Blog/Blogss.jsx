import React from 'react'
import blog1 from '../../../assets/blog1.jpg'
import { Link } from 'react-router-dom'

function Blogss() {
  return (
    <div className='bg-black w-full h-fit px-20 py-10 flex-col '>
    <div className='w-280 grid grid-cols-2 border-1 border-white pr-50 my-10'>
        <img className='w-100 h-120 object-cover' src={blog1} alt='photo' />
        <div className='pb-10 w-full'>
            <p className='text-amber-300 text-2xl font-thin py-10 '>Tomato, black olive, feta & anchovy tart ulla mco laboris</p>
            <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor dunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                laboris nisi ut aliquip.</p><br/>
            <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor dunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                laboris nisi ut aliquip.</p>
            <Link to="/target-Blog"><button className='border-b-2 text-amber-300 pt-10'>LEARN MORE</button></Link>
        </div>
    </div>
    <div className='w-280 grid grid-cols-2 border-1 border-white pr-50 my-10'>
        <img className='w-100 h-120 object-cover' src={blog1} alt='photo' />
        <div className='pb-10 w-full'>
            <p className='text-amber-300 text-2xl font-thin py-10 '>Tomato, black olive, feta & anchovy tart ulla mco laboris</p>
            <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor dunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                laboris nisi ut aliquip.</p><br/>
            <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor dunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                laboris nisi ut aliquip.</p>
            <Link to="/target-Blog"><button className='border-b-2 text-amber-300 pt-10'>LEARN MORE</button></Link>
        </div>
    </div>
     <div className='w-280 grid grid-cols-2 border-1 border-white pr-50 my-10'>
        <img className='w-100 h-120 object-cover' src={blog1} alt='photo' />
        <div className='pb-10 w-full'>
            <p className='text-amber-300 text-2xl font-thin py-10 '>Tomato, black olive, feta & anchovy tart ulla mco laboris</p>
            <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor dunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                laboris nisi ut aliquip.</p><br/>
            <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor dunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                laboris nisi ut aliquip.</p>
            <Link to="/target-Blog"><button className='border-b-2 text-amber-300 pt-10'>LEARN MORE</button></Link>
        </div>
    </div>
    </div>
    
  )
}

export default Blogss