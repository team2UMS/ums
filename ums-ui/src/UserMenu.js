import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Loan from "./pages/Loan";
import Statement from "./pages/Statement";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";
import Footer from './Footer';
import Header from './Header';

function UserMenu() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="loan" element={<Loan />} />
          <Route path="statement" element={<Statement />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default UserMenu;
