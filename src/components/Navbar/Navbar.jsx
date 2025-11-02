import React from 'react'
import './Navbar.css'
import logosb from '../../assets/imgs/logobr.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logosb} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Program</li>
            <li>Blog</li>
            <li>Next Event</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar