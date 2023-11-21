import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Login.css';

const Login = ({handleClose}) => {
  return (
    <div className="login-modal">
      <h2>Login</h2>
      <CloseIcon  className='closeIcon' onClick={handleClose}/>
      <div className="input-group">
        <input type="text" id="username" placeholder="Username" />
      </div>
      <div className="input-group">
        <input type="password" id="password" placeholder="Password" />
      </div>
      <button className="login-button">Login</button>
    </div>
  );
}

export default Login;
