import React from 'react'
import call from '../../assets/call.png'
import location from '../../assets/location.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import { Link } from 'react-router-dom'

function Footer() {
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
    <div>
      <div className='bg-black text-white flex justify-between items-center gap-0 px-15 pt-10 pb-5 border-b-1 border-white'>
        <h1 className='text-4xl font-serif italic text-white '>Cake <span className='text-amber-300'>Shop</span></h1>
        <div className='flex gap-15 justify-center'>
          {
          nav.map((val, i) => {
            return (
              <Link to={val.path} key={i}>
                <div className='hover:text-amber-300'>
                  {val.name}
                </div>
              </Link>
            )
          })
        }
        </div>
      </div>
      <div className='bg-black w-full h-fit border-b-1 border-white'>
        <div className='w-full grid grid-cols-2 text-white'>
          <div className='flex-col px-6 py-15'>
            <p >Consectetur adipiscing elit, sed do eiusmod tempor dunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercita tion ullamco laboris nisi ut aliquip ex ea
              commodo consequat.</p>
            <div className='grid grid-cols-3 gap-10 pr-10 pt-15'  >
              <button className='bg-amber-300 text-black flex justify-center gap-5 items-center px-5 py-4'>
                <img className='w-5 h-5' src={instagram} alt='photo' />
                <p>Instagram</p>
              </button>
              <button className='bg-amber-300 text-black flex justify-center gap-5 items-center px-5 py-4 '>
                <img className='w-5 h-5' src={facebook} alt='photo' />
                <p>Facebook</p>
              </button>
              <button className='bg-amber-300 text-black flex justify-center gap-5 items-center px-5 py-4 '>
                <img className='w-5 h-5' src={linkedin} alt='photo' />
                <p>Linkedin</p>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-2 pt-20 pl-10 gap-10'>
            <div className='flex-col '>
              <img className='w-10 h-10' src={location} alt='photo' />
              <p className='text-2xl text-amber-300 font-thin py-5'>Location</p>
              <p>4736 Poe Lane, HOT SPRINGS, Montana-59845</p>
            </div>
            <div className='flex-col'>
              <img className='w-10 h-10' src={call} alt='photo' />
              <p className='text-2xl text-amber-300 font-thin py-5'>Contact</p>
              <button>913-473-7000</button>
              <p>contact@cakeshop.com</p>
            </div>
          </div>
        </div>

      </div>
      <div className='bg-black w-full h-20 text-white flex justify-center items-center'>
        <p>Copyright ©2025 All rights reserved | This template is made by Kavita Sharma </p>
      </div>
    </div>

  )
}

export default Footer