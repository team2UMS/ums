import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useGlobalState} from "../../service/GlobalState";
import {fetchAccBalance,fetchLoanBalance} from "../../service/fetch";
import { useState,useEffect } from "react";
import {useNavigate } from 'react-router-dom';
function Balance() {
  const [globalState]=useGlobalState();
  const navigate=useNavigate();
  useEffect(() => {
    if(globalState.customerId===undefined){
      alert("Session Expired");
      navigate("../", { replace: true });
    }
  }, []);
  const [accBalance,setAccBalance]=useState();
  const [loanBalance,setLoanBalance]=useState();
  function fetchData() {
    try {
      fetchAccBalance(globalState.customerId).then(data=>{
        console.log(data);
        setAccBalance(data.message);
      });
      fetchLoanBalance(globalState.customerId).then(data=>{
        setLoanBalance(data.message);
      });
    } catch (err) {
        console.log(err);
    }
}
  useEffect( () => { 
    fetchData();
}, []);
    return (
      <>
      <Header/>
      <div style={{ textAlign :'center' }}>
      <div className='text-white'>
      <p>Customer Id:{globalState.customerId}</p>
      <p>{accBalance}</p>
      <p>{loanBalance}</p>
      </div></div><Footer/>
      </>
    );
  }
  
  export default Balance;
  