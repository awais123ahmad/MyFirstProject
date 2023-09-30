import React from 'react'
import '../css/Navbar.css'
import img from '../assets/tree.jpg'

const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="logo">
        <img src={img} alt="My Image" class="image"/>
            <h1 class="venue">Venue Booking</h1>
        </div>
        <div class="nav-buttons">
            <button class="nav-button">Login</button>
        </div>
    </nav>

  )
}

export default Navbar
