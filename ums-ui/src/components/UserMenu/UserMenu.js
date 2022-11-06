import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Loan from "../Loan/Loan";
import Statement from "../Statement/Statement";
import Transactions from "../Transactions/Transactions";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function UserMenu() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/loan" element={<Loan />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    <Footer/>
    </>
  );
}

export default UserMenu;
