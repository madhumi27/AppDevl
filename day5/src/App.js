

import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reports from './components/Reports';
import Products from './components/Products';
import Navbar from './components/navbar';
import Employees from './components/Employees';
import Departments from './components/Departments';
function App() {
  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
        
        <Route path='/'  element={<Home/>} />
        <Route path='/Login'  element={<Login/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/employees' element={<Employees/>} />
        <Route path='/departments' element={<Departments/>} />
      </Routes>
    </Router>
  </>
  
  );
}

export default App;
