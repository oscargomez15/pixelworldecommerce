import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import '../navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/"> GAMES </Link>
        <Link to="/cart" className='cartBtn'> CART </Link>
      </div>
    </div>
  )
}

export default Navbar;