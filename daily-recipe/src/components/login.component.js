import React from 'react'
import {Link} from 'react-router-dom'
import Gap from './gap'

const Login = () => {
  return (
    <div className='container-sm'>

      <form className='container-sm'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">Masukkan alamat email yang didaftarkan</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
          <div id="passwordHelp" className="form-text">Lupa password?</div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <Gap height="20px"/>
      <div>
        <Gap width="13px" height="1px"/>
        <Link to='/user/register' className='navbar-brand fs-6'>Belum punya akun? Registrasi di sini</Link>
      </div>
      
    </div>
  )
}

export default Login