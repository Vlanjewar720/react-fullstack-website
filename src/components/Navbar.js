import React from 'react'
import {NavLink} from "react-router-dom";
import '../App.css';   

const Navbar = () => {
  return (
    <div >
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/services"><li>Services</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
      </ul>
    </div>
  )
}

export default Navbar
