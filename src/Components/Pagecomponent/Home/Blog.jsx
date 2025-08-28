import React from 'react'
import blog1 from '../../../assets/blog1.jpg'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div>
              <div className='bg-black w-full h-fit '>
                <div className='w-full flex justify-between px-20 pt-30 pb-15'>
                  <h1 className='text-5xl text-white font-thin'>Our Blogs</h1>
                  <Link to="/target-Blog"><button className='bg-amber-300  hover:bg-amber-400 py-5 px-6 '>More Blog</button></Link>
                </div>
                <div className='w-full h-fit grid grid-cols-2 gap-5 px-10 pb-20'>
                  <div className='w-full grid grid-cols-2 border-1 border-white '>
                    <img className='w-70 h-full object-cover ' src={blog1} alt='photo' />
                    <div className='py-10 pr-10'>
                      <p className='text-amber-300 text-2xl font-thin py-10 '>Tomato, black olive, feta & anchovy tart ulla mco laboris</p>
                      <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor dunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                        laboris nisi ut aliquip.</p>
                      <Link to="/target-Blog"><button className='border-b-2 text-amber-300 pt-10'>LEARN MORE</button></Link>
                    </div>
                  </div>
                  <div className='w-full grid grid-cols-2 border-1 border-white'>
                    <img className='w-70 h-full object-cover' src={blog1} alt='photo' />
                    <div className='py-10 pr-10'>
                      <p className='text-amber-300 text-2xl font-thin py-10 '>Tomato, black olive, feta & anchovy tart ulla mco laboris</p>
                      <p className='text-white font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor dunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                        laboris nisi ut aliquip.</p>
                      <Link to="/target-Blog"><button className='border-b-2 text-amber-300 pt-10'>LEARN MORE</button></Link>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Blog