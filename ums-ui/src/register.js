import './App.css';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from "react";
const { REACT_APP_API_URL } = process.env;
const Register=()=>
{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        var a = fetch(`${REACT_APP_API_URL}/api/register`,{
            method:'POST',
            mode:'cors',
            body: {}
        });
        // var resp= a.json();
        console.log(a);
    }
  return (<>
  <Header/>
  <div className="title">GB Brach Registeration</div>
  <div className="form">
      <form onSubmit={handleSubmit}>
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
          <input type="text" name="dob" required />
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
    </div>
  <Footer/>
  </>);
}
export default Register;

