import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {handleRegister} from '../../service/auth';
import {useNavigate } from 'react-router-dom';
const Register=()=>
{
  const navigate=useNavigate();
  return (<>
  <Header/>
  <div className="title">Global Bank Branch Registeration</div>
  <div className="form">
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

