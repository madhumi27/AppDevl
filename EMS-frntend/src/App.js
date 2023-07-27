import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reports from './components/Reports';
import Navbar from './components/navbar';
import NotiAdm from './components/notiAdm';
import { Provider } from 'react-redux';
import store from './redux/store';
import Employees from './components/Employees';
import AboutUs from './components/AboutUs';
import Departments from './components/Departments';
import DepartmentPage from './components/Departmentpage';
import Attendance from './components/Attendance';
import RoleSelectionPage from './roleselectionpage';
import Emphome from './components/emphome';
import NotiEmp from './components/notiEmp';
import Profile from './components/profile';
import SignUp from './components/signup';
import EmpLeaveForm from './components/empLeaveForm';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployeeForm from './components/AddEmployeeForm';
import ViewProfile from './components/ViewProfile';
// import { Feedback } from '@mui/icons-material';
import Feedback from './components/Feedback';
function App() {
  
  return (
    <>
    <Provider store={store}>
    <Router>
     
      <Routes>
        
        <Route path='/home'  element={<Home/>} />
        <Route path='/'  element={<Login/>} />
        <Route path='/signup'  element={<SignUp/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/employees' element={<Employees/>} />
        <Route path='/departments' element={<Departments/>} />
        <Route path='/notiAdm' element={<NotiAdm/>} />
        <Route path='/notiEmp' element={<NotiEmp/>} />
        <Route path='/emphome/:userId' element={<Emphome/>} />
        <Route path='/emplev' element={<EmpLeaveForm/>} />
        <Route path='/employeeDetails' element={<EmployeeDetails/>} />
        <Route path='/profilee/:userId' element={<Profile/>} />
        <Route path='/addemp' element={<AddEmployeeForm/>} />
        <Route path='/support' element={<Feedback/>} />
        <Route path='/api/empalls/department/:deptName' element={<DepartmentPage/>} />
       
        <Route path="/profile/:empId" element={<ViewProfile/>} />

        <Route path="/attd" element={<Attendance/>} />

      </Routes>
    </Router>
    </Provider>
  </>
  
  );
}

export default App;
