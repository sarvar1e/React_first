import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class='navbar'>
    <div class="nav-left">
      <Link to = "/">
      <img src="assets/logo.png" alt="logo" />
      </Link>
    </div>
    <div class="nav-right">
      <Link to="/">
      <div>Home</div>
      </Link>
      <Link to="/about">
      <div>About</div>
      </Link>
      <Link to="/KnowYourRisks">
      <div>Know Your Risks</div>
      </Link>
      <Link to = "/forwork">
      <div>For work</div>
      </Link>
      <Link to = "/journal">
      <div>Journal</div>
      </Link>
      <Link to = "/shop">
      <div>Shop</div>
      </Link>

    </div>
  </div>
  )
}

export default Navbar