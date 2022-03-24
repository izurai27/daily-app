import React from 'react'
import {Link} from 'react-router-dom'
import Gap from './gap'

const Register = () => {
  return (
    <div className='container'>

      <form className='container-sm'>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"  placeholder="Masukkan alamat email akan yang didaftarkan"/>
          {/* <div id="emailHelp" className="form-text">Masukkan alamat email akan yang didaftarkan</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword" placeholder="Ketikkan password yang akan digunakan"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Konfirmasi Password</label>
          <input type="password" className="form-control" id="confirmationInputPassword" placeholder="Ketik ulang password yang akan digunakan"/>
        </div>
        <button type="submit" className="btn btn-primary ">Register</button>
      </form>
      <Gap height="20px"/>
      <div>
        <Gap width="4px" height="1px"/>
        <Link to='/user/register' className='navbar-brand fs-6 ms-2 mt-3'>Ke Halaman Login</Link>
      </div>
    </div>
  )
}

export default Register