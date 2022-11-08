import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {handleRegister} from '../../service/auth';
import {useNavigate } from 'react-router-dom';
import React from 'react';
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
const Register=()=>
{
  const navigate=useNavigate();
  return (<>
  <Header/>
  {/* <div className="title">Global Bank Branch Registeration</div> */}
  {/* <div className="form">
      <form onSubmit={(e)=>handleRegister(e,navigate)}>
        <div className="input-container">
          <label>Customer Number </label>
          <input type="text" name="uno" required />
        </div>
        <div className="input-container">
          <label>First Name </label>
          <input type="text" name="fname" required />
        </div>
        <div className="input-container">
          <label>Last Name </label>
          <input type="text" name="lname" required />
        </div>
        <div className="input-container">
          <label>City </label>
          <input type="text" name="city" required />
        </div>
        <div className="input-container">
          <label>Occupation </label>
          <input type="text" name="occ" required />
        </div>
        <div className="input-container">
          <label>Date of Birth </label>
          <input type="date" name="dob" required />
        </div>
        <div className="input-container">
          <label>Branch </label>
          <input type="text" name="branch" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>

        <div className="button-container">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div> */}
    {/* <MDBRow className='justify-content-center align-items-center m-5'></MDBRow> */}
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
    <div className='d-flex justify-content-center align-items-center h-100'><h2 className="text-uppercase mb-2"><div className='text-white'>Create an account</div></h2></div> 
    </div>
    <MDBContainer fluid className='d-flex align-items-left justify-content-center bg-image' >
      <MDBCard className='m-5' style={{maxWidth: '400px' }}>
        <MDBCardBody className='px-3'>
          {/* <h2 className="text-uppercase text-center mb-5">Create an account</h2> */}
          <MDBInput wrapperClass='mb-4' label='Customer Number' size='lg' style= {{textcolor:'black'}}id='form1' name='uno' required />
          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form2' name="fname" required/>
          <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form3' type='text' name="lname" required/>
          <MDBInput wrapperClass='mb-4' label='City' size='lg' id='form4' type='text' name="city" required/>
                  
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='m-5' style={{maxWidth: '400px'}}>
        <MDBCardBody className='px-3'>
          {/* <h2 className="text-uppercase text-center mb-5">Create an account</h2> */}
         <MDBInput wrapperClass='mb-4' label='Occupation' size='lg' id='form4' type='text' name="occ" required/>
          <MDBInput wrapperClass='mb-4' label='Date of Birth' size='lg' id='form4' type='text' name="dob" required/>
          <MDBInput wrapperClass='mb-4' label='Branch' size='lg' id='form4' type='text' name="branch" required/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' name="pass" required/>
          
          
        </MDBCardBody>
      </MDBCard>
      
    </MDBContainer>
    <div class="col-md-12 text-center">
    <MDBBtn className='mb-4 w-50 gradient-custom-4' ><h5>Register</h5></MDBBtn>
    </div>
  <Footer/>
  </>
  
  
  
  );
}
export default Register;

