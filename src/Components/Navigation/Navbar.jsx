import React from 'react'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import { Link } from 'react-router-dom'




function Navbar() {
  const nav = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "CAKES",
      path: "/CAKES",
    },
    {
      name: "ABOUT",
      path: "/ABOUT",
    },
    {
      name: "BLOGS",
      path: "/BLOG",
    },
    {
      name: "CONTACT",
      path: "/CONTACT",
    },
  ]
  return (
    <div className='w-full h-fit  bg-black px-10'>
      <div className='text-4xl font-serif italic items-center flex justify-between pt-5'>
        <div className='flex gap-3 justify-center items-center'>
          <img className='w-5 bg-white rounded-3xl' src={facebook} alt='photo' />
          <img className='w-5 bg-white rounded-3xl' src={instagram} alt='photo' />
          <img className='w-5 bg-white rounded-3xl' src={linkedin} alt='photo' />
        </div>
        <h1 className='text-white'>Cake <span className='text-amber-300'>Shop</span></h1>
        <button className='text-sm border-1 border-white text-white py-1 pl-1 pr-1 bg-transparent hover:bg-transparent hover:text-amber-300 border-1 border-amber-300 '>Call Us: +10 783 657 4378</button>
      </div>
      <div className='nav z-60 flex bg-transparent w-full text-white h-fit gap-15 justify-center py-5'>
        {
          nav.map((val, i) => {
            return (
              <Link to={val.path} key={i}>
                <div className='hover:text-amber-300 '>
                  {val.name}
                </div>
              </Link>
            )
          })
        }
      </div>
    </div >
  )
}

export default Navbar;