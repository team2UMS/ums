import './App.css';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from "react";
const Login=()=>
{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        var a = fetch(`${API_URL}/api/login`,{
            method:'POST',
            body: {contactNumber:e.target.uname,password:e.target.pass}
        });
        var resp= a.json();
    }
  return (<>
  <Header/>
  <div className="title">GB User Login</div>
  <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>
        <div className="button-container">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  <Footer/>
  </>);
}
export default Login;

