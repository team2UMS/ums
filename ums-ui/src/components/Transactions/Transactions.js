import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {useGlobalState} from "../../service/GlobalState";
import { handleTransaction } from '../../service/transact';
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
const Transactions = () => {
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
    
    <div className="form">
        <form onSubmit={(e)=>handleTransaction(e,globalState.customerId)}>
          {/* <div className="input-container">
            <label>Customer ID </label>
            <label>{globalState.customerId} </label>
          </div>

          <div className="input-container">
            <label>Select the transaction type</label>
            <select name="type" id="dog-names">
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
              </select>
          </div>

          <div className="input-container">
            <label>Enter Amount </label>
            <input type="text" name="amount" required /> 
          </div>

          <div className="button-container">
            <input type="submit" value="Submit"/>
          </div> */}
          <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">TRANSACTIONS</h2>
          <div className="input-container">
            <label>Customer ID </label>
            <label>{globalState.customerId} </label>
          </div>
          <label>Select the transaction type</label>
          <p></p><select name="type" id="dog-names">
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
            </select><p></p>
          <MDBInput wrapperClass='mb-4' label='Enter Amount' size='lg' id='form2' type='text' name="amount" required/>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
       </form>
      </div> 
    <Footer/>
    </>);
  };
  
  export default Transactions;
