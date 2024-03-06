import React from 'react'
import {Link} from 'react-router-dom'
import "../CSS/Center.css"

function Heater() {
  return (
    <div className='my-header'>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>
    </div>
  )
}

export default Heater