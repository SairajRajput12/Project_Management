import React, { useState } from 'react';
import Button from '../UI/Button';
import AdminSignup from './AdminSignup';
import LoginForm from './LoginForm';
import SingupForm from './SingupForm';
import '../Components/FormSelection.css'

function FormSelection({ className }) {
  const [activeComponent, changeState] = useState('login');
  let content = null;

  if (activeComponent === 'login') {
    content = <LoginForm className={className} />;
  } else if (activeComponent === 'adminSignup') {
    content = <AdminSignup className={className} />;
  } else if (activeComponent === 'userSignup') {
    content = <SingupForm className={className} />;
  }

  return (
    <>
      <h1 className="form-header">Welcome to our website</h1>
      <div className="form-select">
        <div className="button-container">
          <Button className={className} onSubmit={() => changeState('adminSignup')}>
            Admin Signup
          </Button>
          <Button className={className} onSubmit={() => changeState('userSignup')}>
            User Signup
          </Button>
          <Button className={className} onSubmit={() => changeState('login')}>
            Login
          </Button>
        </div>
        <div className="form-container">{content}</div>
      </div>
    </>
  );
}

export default FormSelection;