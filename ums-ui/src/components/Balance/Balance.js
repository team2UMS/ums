import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useGlobalState} from "../../service/GlobalState";
import {fetchBalance} from "../../service/fetch";
function Balance() {
  const [globalState]=useGlobalState();
  const [acc,loan]=fetchBalance(globalState.customerId);
  console.log(globalState);
    return (
      <>
      <Header/>
      <p>Customer Id:{globalState.customerId}</p>
      <p>{acc}</p>
      <p>{loan}</p>
      <Footer/>
      </>
    );
  }
  
  export default Balance;
  