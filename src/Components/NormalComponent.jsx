import React from 'react'; 
import './home.css'; 
import Button from '../UI/Button';
import DialogWithUseRef from './Dialog';


export default function NormalComponent() {
  return (
    <div className='homepage'>
      <img  src='homepage.jpg' alt='alternative' />
      <div className='right-description'>
        <h1>Project Management</h1>
        <p>Making the projects organized and easier is our mission!</p>
        <DialogWithUseRef />
      </div>
    </div>
  );
}
