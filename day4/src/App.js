

import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Reports from './components/pages/Reports';
import Products from './components/pages/Products';
import Navbar from './components/navbar';
import Employees from './components/pages/Employees';
import Departments from './components/pages/Departments';
function App() {
  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
        
        <Route path='/'  element={<Home/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/employees' element={<Employees/>} />
        <Route path='/departments' element={<Departments/>} />
      </Routes>
    </Router>
  </>
  
  );
}

export default App;
