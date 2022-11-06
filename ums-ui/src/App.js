import './App.css';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserMenu from './components/UserMenu/UserMenu';
function App() {
  return (<div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/userMenu' element={<UserMenu/>} />
      </Routes>
    </Router>
  </div>);
}

export default App;
