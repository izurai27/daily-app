import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='container'>

      <form className='container-sm'>
        
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Masukkan alamat email akan yang didaftarkan"/>
          {/* <div id="emailHelp" className="form-text">Masukkan alamat email akan yang didaftarkan</div> */}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ketikkan password yang akan digunakan"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Konfirmasi Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ketik ulang password yang akan digunakan"/>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      <Link to='/user/register' className='navbar-brand fs-6'>Ke Halaman Login</Link>
    </div>
  )
}

export default Register