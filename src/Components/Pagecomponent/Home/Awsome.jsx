import React from 'react'
import cake from '../../../assets/cake.jpg'

function Awsome() {
  return (
    <div>
      <div className='bg-black h-fit flex-col justify-center w-full'>
              <p className='text-white pt-30 flex text-5xl w-full font-thin justify-center items-center'>This is Schilers. Awesome Food <br />Theme. Purchase it and eat<br /> Burgers.</p>
              <div className='w-full mt-10 pl-30 pb-20 pt-10 grid grid-cols-2 gap-20'>
                <div className='text-white font-thin ' >
                  <h3 className='text-amber-300  text-3xl'>This is Schilers. Awesome Food<br /> Theme.
                    Purchase it and eat Burgers</h3><br />
                  <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor dunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    dolor in reprehen derit in voluptate velit esse cillum.<br /><br />
      
                    Consectetur adipiscing elit, sed do eiusmod tempor dunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercita tion ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute dolor in reprehen derit
                    in voluptate velit esse cillum.</p>
                </div>
                <div className='w-100 h-60'>
                  <img src={cake} alt='photo' />
                </div>
              </div>
            </div>
    </div>
  )
}

export default Awsome