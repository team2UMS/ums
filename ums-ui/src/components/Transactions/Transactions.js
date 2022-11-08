import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {useGlobalState} from "../../service/GlobalState";
import { handleTransaction } from '../../service/transact';
const Transactions = () => {
  const [globalState,setGlobalState]=useGlobalState();
  return (<>
    <Header/>
    <div className="title">Transactions</div>
    <div className="form">
        <form onSubmit={(e)=>handleTransaction(e,globalState.customerId)}>
          <div className="input-container">
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
          </div>
        </form>
      </div>
    <Footer/>
    </>);
  };
  
  export default Transactions;
