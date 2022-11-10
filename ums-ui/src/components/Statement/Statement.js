import Table from "../Table/Table";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { fetchStatement } from "../../service/fetch";
import { useGlobalState } from "../../service/GlobalState";
import { useNavigate } from "react-router-dom";
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
import { MDBRadio } from 'mdb-react-ui-kit';
const Statement = () => {
  const [tableShow,setTableShow]=useState(0);
  const [data,setData]=useState();
  const [globalState]=useGlobalState();
  const navigate=useNavigate();
  useEffect(() => {
    if(globalState.customerId===undefined){
      alert("Session Expired");
      navigate("../", { replace: true });
    }
  }, []);
  const handleSubmit=(e)=>{
    fetchStatement(e,globalState.customerId).then(data=>{
    console.log(data);
    if(data.status===400)
    alert(data.message);
    else if(data.status===200){
    setData(data);
    setTableShow(1);}
    else{alert("Internal Server Error");}
    });
    
  };
    return (<>
      <Header/>
       <div className="form">
          <form onSubmit={(e)=>handleSubmit(e)}>
          <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">TRANSACTIONS</h2>

            <div className="input-container">
              <label>Customer ID </label>
              <label>{globalState.customerId}</label>
            </div>
  
            <div className="input-container">
              <label>Select the transaction type</label>
              <select name="type" id="dog-names">
                <option value="deposit/withdraw">All</option>
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
              </select>
            </div> 
            {/*<div>
            <MDBRadio name='inlineRadio' id='inlineRadio1' value='deposit/withdraw' label='All' inline />
            <MDBRadio name='inlineRadio' id='inlineRadio2' value='deposit' label='Deposit' inline />
            <MDBRadio name='inlineRadio' id='inlineRadio2' value='withdraw' label='Withdraw' inline />
            <label>Branch </label>
            </div>*/}

            {/* <div className="input-container">
              <label>Transaction Date From </label>
              <input type="date" name="sdate" required /> 
            </div>
            <div className="input-container">
              <label>Transaction Date To </label>
              <input type="date" name="edate" required /> 
            </div> */}
  
            {/* <div className="button-container">
              <input type="submit" value="Submit"/>
            </div> */}

          <MDBInput wrapperClass='mb-4' label='Transaction Date From' size='lg' id='form2' type='date' name="sdate" required/>
          <MDBInput wrapperClass='mb-4' label='Transaction Date To' size='lg' id='form2' type='date' name="edate" required/>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Submit</MDBBtn>
          </MDBCardBody>
          </MDBCard>
          </MDBContainer>
         
          </form>
        </div>
        <div className='float-left'> {tableShow ? <Table transactions={data}/> : null }
    </div></>);
  };
  
  export default Statement;