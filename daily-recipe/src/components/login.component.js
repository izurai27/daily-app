import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='container'>

      <form className='container-sm'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">Masukkan alamat email yang didaftarkan</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
          <div id="passwordHelp" className="form-text">Lupa password?</div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      <Link to='/user/register' className='navbar-brand'>Belum punya akun? Registrasi di sini</Link>
    </div>
  )
}

export default Login