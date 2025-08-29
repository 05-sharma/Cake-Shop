import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Navigation/Footer'
import Navbar from '../Navigation/Navbar'

function Layout() {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <Outlet />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout