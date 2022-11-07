import Table from "../Table/Table";
import Header from "../Header/Header";
import { useState } from "react";
import { fetchStatement } from "../../service/fetch";
const data=[];

const Statement = () => {
  const {tableShow,setTableShow}=useState(0);
  console.log(data);
    return (<>
      <Header/>
      <div className="title">Statement</div>
      <div className="form">
          <form onSubmit={(e)=>fetchStatement(e,tableShow,setTableShow,data)}>
            <div className="input-container">
              <label>Customer ID </label>
              <input type="text" name="cid" value="1" />
            </div>
  
            <div className="input-container">
              <label>Select the transaction type</label>
              <input type="text" name="type" required /> 
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