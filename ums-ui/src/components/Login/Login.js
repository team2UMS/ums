import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {handleLogin} from '../../service/auth';
import {useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
const Login=()=>
{
  const navigate=useNavigate();
  return (<>
  <Header/>
  <div className="title">
  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
        <div className='text-white'>
        <h1 className='mb-3'>Global Bank Welcomes you!</h1>
        </div>
        </div>
  </div>
  </div>
  <div className="form">
    
      <form onSubmit={(e)=>handleLogin(e,navigate)}>
      <div><h4 className='mb-3' style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>User Login</h4></div>
        <div className="input-container">
          <label>Customer Number </label>
          <input type="text" name="uno" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>
        <div className="button-container">
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
    <Footer/>
  </>);
}
export default Login;

