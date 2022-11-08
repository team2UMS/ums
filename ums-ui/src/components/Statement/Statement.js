import Table from "../Table/Table";
import Header from "../Header/Header";
import { useState } from "react";
import { fetchStatement } from "../../service/fetch";
import { useGlobalState } from "../../service/GlobalState";
const Statement = () => {
  const {tableShow,setTableShow}=useState(0);
  const {data,setData}=useState({});
  const [globalState]=useGlobalState();
  const setTableData=(resp)=>setData(resp);
  const setToggle=(resp)=>setTableShow(resp);
  console.log(data);
    return (<>
      <Header/>
      <div className="title">Statement</div>
      <div className="form">
          <form onSubmit={(e)=>fetchStatement(e,setTableData,setToggle,globalState.customerId)}>
            <div className="input-container">
              <label>Customer ID </label>
              <label>{globalState.customerId}</label>
            </div>
  
            <div className="input-container">
              <label>Select the transaction type</label>
              <select name="type" id="dog-names">
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
              </select>
            </div>
  
            <div className="input-container">
              <label>Transaction Date From </label>
              <input type="date" name="sdate" required /> 
            </div>
            <div className="input-container">
              <label>Transaction Date To </label>
              <input type="date" name="edate" required /> 
            </div>
  
            <div className="button-container">
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
      {tableShow ? <Table transactions={data}/> : null }
    </>);
  };
  
  export default Statement;