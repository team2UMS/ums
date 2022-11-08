import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useGlobalState } from '../../service/GlobalState';
import { handleLoan } from '../../service/transact';
const Loan = () => {
  const [globalState]=useGlobalState();
  return (<>
    <Header/>
    <div className="title">Loan</div>
    <div className="form">
        <form onSubmit={(e)=>handleLoan(e,globalState.customerId)}>
          <div className="input-container">
            <label>Customer ID </label>
            <label>{globalState.customerId} </label>
          </div>

          <div className="input-container">
            <label>Select the branch</label>
            <input type="text" name="branch" required /> 
          </div>

          <div className="input-container">
            <label>Enter Loan Amount </label>
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
  
  export default Loan;
