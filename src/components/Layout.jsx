import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../css/Layout.css'

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        <div className='adminpanel'>
          <Sidebar />
          {children}
        </div>
        
        
        
        </div>
  )
}

export default Layout