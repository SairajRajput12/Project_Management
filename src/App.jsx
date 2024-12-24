import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NormalComponent from './Components/NormalComponent';
import LoginForm from './Components/LoginForm';
import AdminSignup from './Components/AdminSignup';
import SignupForm from './Components/SingupForm';
import AdminDashBoard from './Components/Admin/AdminDashBoard';
import UserDashBoard from './Components/User/UserDashBoard';
import ManagerDashBoard from './Components/Manager/ManagerDashBoard';

const router = createBrowserRouter([
  { path: '/', element: <NormalComponent /> },
  { path: '/login', element: <LoginForm /> },
  { path: '/admin', element: <AdminDashBoard /> },
  { path: '/user', element: <UserDashBoard /> },
  { path: '/manager', element: <ManagerDashBoard /> },
  { path: '/signup', element: <SignupForm /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
