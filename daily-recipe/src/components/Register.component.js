import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Gap from './gap'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXuplE1cMNCGreE2Dt8-ObAXvsApq1luM",
  authDomain: "daily-recipe-feaef.firebaseapp.com",
  projectId: "daily-recipe-feaef",
  storageBucket: "daily-recipe-feaef.appspot.com",
  messagingSenderId: "703638561083",
  appId: "1:703638561083:web:f85b73fc309b1736af171e",
  measurementId: "G-5YQRB6D16L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
// onAuthStateChanged(auth, user => {
//   // Check for user status
//   console.log(user)
// });

const Register = () => {
  const [email,setEmail] = useState('')
  const [passwrd,setPasswrd] = useState('')
  const [konfirmPasswrd, setkonfirmPasswrd] = useState('')
  
  const handleInputEmail = (e) => {
    setEmail (e.target.value);
    
  }
  
  const handlepasswrd = (e) => {
    setPasswrd(e.target.value)
  }
  
  const handleKonfirmpasswrd = (e) => {
    setkonfirmPasswrd(e.target.value)
  }
  
  const handleRegisterBtn = () => {
    console.log(email, passwrd ,konfirmPasswrd )

    createUserWithEmailAndPassword(auth, email, passwrd)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user: '+userCredential.user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('err ='+errorCode,errorMessage)
      });
  }

 

  return (
    <div className='container'>

      <form className='container-sm'>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={handleInputEmail} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"  placeholder="Masukkan alamat email akan yang didaftarkan" name="emailReg"/>
          {/* <div id="emailHelp" className="form-text">Masukkan alamat email akan yang didaftarkan</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input  onChange={handlepasswrd} type="password" className="form-control" id="exampleInputPassword" placeholder="Ketikkan password yang akan digunakan" name="PasswordReg"/>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmationInputPassword" className="form-label">Konfirmasi Password</label>
          <input  onChange={handleKonfirmpasswrd} type="password" className="form-control" id="confirmationInputPassword" placeholder="Ketik ulang password yang akan digunakan" name="konfirmPasswordReg"/>
        </div>
        <button onClick={handleRegisterBtn} type="submit" className="btn btn-primary ">Register</button>
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