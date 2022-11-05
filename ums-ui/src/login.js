import './App.css';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from "react";
const { REACT_APP_API_URL } = process.env;
const Login=()=>
{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        var a = fetch(`${REACT_APP_API_URL}/api/login`,{
            method:'POST',
            mode:'cors',
            body: {contactNumber:e.target.uno.value,password:e.target.pass.value}
        });
        // var resp= a.json();
        console.log(a);
    }
  return (<>
  <Header/>
  <div className="title">GB User Login</div>
  <div className="form">
      <form onSubmit={handleSubmit}>
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

