import './App.css';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserMenu from './components/UserMenu/UserMenu';
import Loan from './components/Loan/Loan';
import Statement from './components/Statement/Statement';
import Transactions from './components/Transactions/Transactions';
import Balance from './components/Balance/Balance';
import Home from './components/Home/Home'
function App() {
  return (<div className='App'>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/userMenu' element={<UserMenu/>} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/statement" element={<Statement />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </Router>
  </div>);
}

export default App;
