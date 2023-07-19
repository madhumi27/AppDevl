import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reports from './components/Reports';
import Navbar from './components/navbar';
import Employees from './components/Employees';
import AboutUs from './components/AboutUs';
import Departments from './components/Departments';
import DepartmentPage from './components/Departmentpage';
import Attendance from './components/Attendance';
import RoleSelectionPage from './roleselectionpage';
import Emphome from './components/emphome';
import Profile from './components/profile';
import SignUp from './components/signup';
import EmpLeaveForm from './components/empLeaveForm';
import EmployeeDetails from './components/EmployeeDetails';
function App() {
  
  return (
    <>
    <Router>
     
      <Routes>
        
        <Route path='/home'  element={<Home/>} />
        <Route path='/'  element={<Login/>} />
        <Route path='/signup'  element={<SignUp/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/employees' element={<Employees/>} />
        <Route path='/departments' element={<Departments/>} />
        <Route path='/emphome' element={<Emphome/>} />
        <Route path='/emplev' element={<EmpLeaveForm/>} />
        <Route path='/employeeDetails' element={<EmployeeDetails/>} />
        <Route path='/profile' element={<Profile/>} />
       
        <Route path="/departments/:id" element={<DepartmentPage/>} />
        <Route path="/attd" element={<Attendance/>} />

      </Routes>
    </Router>
  </>
  
  );
}

export default App;
