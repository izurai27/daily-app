import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () =>{
  
    return (
      <nav className = 'navbar navbar-dark bg-dark navbar-expand-sm'>
        <Link to='/' className='navbar-brand'>daily Recipe</Link>
        <button class="navbar-toggler text-info" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className='collpase navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/list' className='nav-link'>List Belanja</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/menuBelanja' className='nav-link'>Menu Harian</Link>
            </li>
            

          </ul>
          <Link to='/login' className="btn btn-primary">Login</Link>
          {/* <button type="button" className="btn btn-primary"></button> */}
        </div>
      </nav>
    )
  
}

export default Navbar