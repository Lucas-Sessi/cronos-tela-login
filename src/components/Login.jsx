import useState from 'react';
// import styled from 'styled-components';
import './Login.css';
import logo from '../assets/logo_cronos.png';


//importações do material ui

import * as React from 'react';
import EmailIcon from '@mui/icons-material/Email';

const Login = () => {
  return (
    <div className='central'>
      <div className="logo">
        <img src={logo} alt="logoCronos" className='logoCronos'/>
      </div>
      <form action="">
        <div className="containerInput">
          <label htmlFor="email">Email
            <EmailIcon />
            <input type="email" name='email' id='email' placeholder='example@gmail.com' required/>
          </label>
        </div>
        <div className="containerInput">
          <label htmlFor="password">Password
            <input type="password" name="password" id="password" placeholder='*******' required/>
          </label>
        </div>
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