import ReactDOM from "react-dom/client";
import { Routes, Route,useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useEffect } from "react";
import {useGlobalState} from "../../service/GlobalState";
function UserMenu() {
  const [globalState]=useGlobalState();
  const navigate=useNavigate();
  useEffect(() => {
    if(globalState.customerId===undefined){
      alert("Session Expired");
      navigate("../", { replace: true });
    }
  }, []);
  
  return (
    <>
    <Header/>
    <Layout/>
    <Footer/>
    </>
  );
}

export default UserMenu;
