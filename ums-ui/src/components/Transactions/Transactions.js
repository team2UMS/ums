import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Transactions = () => {
  return (<>
    <Header/>
    <div className="title">Transactions</div>
    <div className="form">
        <form>
          <div className="input-container">
            <label>Customer ID </label>
            <label>001 </label>
          </div>

          <div className="input-container">
            <label>Select the transaction type</label>
            <input type="text" name="type" required /> 
          </div>

          <div className="input-container">
            <label>Enter Amount </label>
            <input type="text" name="type" required /> 
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
