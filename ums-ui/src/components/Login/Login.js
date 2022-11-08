import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {handleLogin} from '../../service/auth';
import {useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBRow
}
from 'mdb-react-ui-kit';
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
      {/* <div><h4 className='mb-3' style={{
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
    </div> */}

    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">LOGIN</h2>
          <MDBInput wrapperClass='mb-4' label='Customer Number' size='lg' id='form1' type='text' name="uno" required/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form2' type='pass' required/>
          
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Login</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </form>
    </div>
    <Footer/>
    
  </>);
}
export default Login;

