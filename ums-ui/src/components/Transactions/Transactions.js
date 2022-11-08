import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {useGlobalState} from "../../service/GlobalState";
import { handleTransaction } from '../../service/transact';
const Transactions = () => {
  const [globalState]=useGlobalState();
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
            <input type="text" name="type" required /> 
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
