import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component'
import Home from './components/home.component';
import ListBelanja from './components/ListBelanja.component';
import MenuBelanja from './components/menuBelanja.component';
import Login from './components/login.component';

function App() {
  return (
    <Router>
      <div className='justify-content-between'>
        <Navbar />
        <br/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/list' element={<ListBelanja/>}/>
          <Route path='/menuBelanja' element={<MenuBelanja/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        

      </div>
    </Router>
    
  );
}

export default App;
