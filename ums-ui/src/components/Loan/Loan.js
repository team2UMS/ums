import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useGlobalState } from '../../service/GlobalState';
import { handleLoan } from '../../service/transact';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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
const Loan = () => {
  const [globalState]=useGlobalState();
  const navigate=useNavigate();
  useEffect(() => {
    if(globalState.customerId===undefined){
      alert("Session Expired");
      navigate("../", { replace: true });
    }
  }, []);
  return (<>
    <Header/>
    {/* <div className="title">Loan</div> */}
    <div className="form">
        <form onSubmit={(e)=>handleLoan(e,globalState.customerId)}>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">LOAN</h2>
          <div className="input-container">
            <label>Customer ID </label>
            <label>{globalState.customerId} </label>
          </div>

          <div className="input-container" style={{textAlign:'left'}}> 
          <select name="branch" id="dog-names">
                <option value="hyderabad">Hyderabad</option>
                <option value="mumbai">Mumbai</option>
                <option value="kolkata">Kolkata</option>
                <option value="bangalore">Bangalore</option>
                <option value="delhi">Delhi</option>
          </select>
          <label>Branch </label>
         </div>

          {/* <div className="input-container">
            <label>Enter Loan Amount </label>
            <input type="text" name="amount" required /> 
          </div> */}
          <MDBInput wrapperClass='mb-4' label='Loan Amount' size='lg' id='form2' type='text' name="amount" required/>

          {/* <div className="button-container">
            <input type="submit" value="Submit"/>
          </div> */}
                    <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
        </form>
      </div>
    <Footer/>
    </>);
  };
  
  export default Loan;
