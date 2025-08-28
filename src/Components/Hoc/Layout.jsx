import React from 'react'
import Navbar from '../Navigation/Navbar'
import Footer from '../Navigation/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout