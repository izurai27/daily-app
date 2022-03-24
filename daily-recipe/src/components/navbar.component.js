import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () =>{
  const [show,setShow] = useState('true')
    return (
      <nav className = 'navbar navbar-dark bg-dark navbar-expand-sm px-3'>
        <Link to='/' className='navbar-brand'>daily Recipe</Link>
        <button className="navbar-toggler border border-info text-info" onClick={() => setShow(!show)} >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={show?'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
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
          <Link to='/user/login' className="btn btn-primary">Login</Link>
          
        </div>
      </nav>
    )
  
}

export default Navbar