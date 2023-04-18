import useState from 'react';
// import styled from 'styled-components';
import './Login.css';
import logo from '../assets/logo_cronos.png';


//importações do material ui

import * as React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  return (
    <div className='central'>
      <div className="logo">
        <img src={logo} alt="logoCronos" className='logoCronos'/>
      </div>
      <form action="">
        
          <label htmlFor="email">Email
            <div className="containerInput">
              <EmailIcon className='iconInput' />
              <input type="email" name='email' id='email' placeholder='|  example@gmail.com' required/>
            </div>
          </label>
        
          <label htmlFor="password">Password
            <div className="containerInput">
            <LockIcon className='iconInput' />
              <input type="password" name="password" id="password" placeholder='|  *******' required/>
            </div>
          </label>
        
        <div className='ForgetPassword'>
          <a href="/forgetpassword">Forget Password?</a>
        </div>
        <div>
          <button className='buttonLogin'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;