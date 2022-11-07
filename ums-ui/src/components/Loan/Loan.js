import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Loan = () => {
  return (<>
    <Header/>
    <div className="title">Loan</div>
    <div className="form">
        <form>
          <div className="input-container">
            <label>Customer ID </label>
            <label>001 </label>
          </div>

          <div className="input-container">
            <label>Select the branch</label>
            <input type="text" name="type" required /> 
          </div>

          <div className="input-container">
            <label>Enter Loan Amount </label>
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
  
  export default Loan;
