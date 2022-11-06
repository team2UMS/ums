import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {handleLogin} from '../../service/auth';
import {useNavigate } from 'react-router-dom';
const Login=()=>
{
  const navigate=useNavigate();
  return (<>
  <Header/>
  <div className="title">GB User Login</div>
  <div className="form">
      <form onSubmit={(e)=>handleLogin(e,navigate)}>
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

