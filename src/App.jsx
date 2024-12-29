import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import NormalComponent from './Components/NormalComponent';
import LoginForm from './Components/LoginForm';
import AdminSignup from './Components/AdminSignup';
import SignupForm from './Components/SingupForm';
import AdminDashBoard from './Components/Admin/AdminDashBoard';
import UserDashBoard from './Components/User/UserDashBoard';
import ManagerDashBoard from './Components/Manager/ManagerDashBoard';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <HashRouter>
        <Routes>
            <Route path='/' element={<NormalComponent />} /> 
            <Route path='/login' element={<LoginForm />} /> 
            <Route path='/admin' element={<AdminDashBoard />} />
            <Route path='/user' element={<UserDashBoard />} /> 
            <Route path='/manager' element={<ManagerDashBoard />}  />
            <Route path='/signup' element={<SignupForm />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
