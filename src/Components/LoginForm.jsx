import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Components/SignupForm.css';
import Button from '../UI/Button';

export default function LoginForm({ goBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Local state for submitting
  const navigate = useNavigate();

  const SubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state
    try {
      const response = await fetch('https://project-management-backend-vp9y.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });

      const result = await response.json();
      setMessage(result.message);
      setIsSubmitting(false); // Reset submitting state

      if (response.status === 200) {
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('current_user', result.username);
        localStorage.setItem('role', result.role);
        localStorage.setItem('level', result.level);
        setSuccessMessage(result.message);

        // Redirect based on user role
        if (result.level === 'admin') {
          navigate('/admin');
        } else if (result.role === 'manager') {
          navigate('/manager');
        } else {
          navigate('/user');
        }
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setIsSubmitting(false); // Reset submitting state
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <h1>Login Form</h1>
      <form className="signup" onSubmit={SubmitForm}>
        <label>Enter your password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isSubmitting} // Disable input while submitting
        />

        <label>Enter your email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting} // Disable input while submitting
        />

        <Button className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      {message && <p>{message}</p>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}
