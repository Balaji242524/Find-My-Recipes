import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <div className='nav-content'>
        <img src="/diet.png" alt="logo" width={50} />

      <h2>Find My Recipes</h2>
        </div>
      <Link  to={"/"}><img className="homelogo" src = 'src/images/home.png'/>

        </Link>
      </div>
      
    </nav>
  )
}

export default Navbar