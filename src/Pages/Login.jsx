import React from 'react';
import Job from '../assets/Job_Icon.png';
import '../css/Login.css';

const Login = () => {
  return (
    <div className="body">

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', marginTop: '10%', gap: 20 }}>

        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', gap: 10, alignContent: 'center', marginTop: 'auto' }}>
          <a className="logo-link" href="#">
            <img src={Job} alt="Site Logo" width="34" style={{ borderRadius: 20 }} />
          </a>
          <p style={{ color: 'white', fontSize: '25px', letterSpacing: '0.5em' }}>Job App</p>
        </div>
        <div className="form-box">
          <h3 className="title">Sign In</h3>
          <form
            method="POST"
            action="#"
            acceptCharset="UTF-8"
            className="login-form"
            id="login-form"
            role="form"
          >
            <div className="form-group">
              <input id="input-1" name="email" className="input" type="text" required placeholder="Email" />
            </div>
            <div className="form-group">
              <input id="input-1" name="password" className="input" type="password" required placeholder="Password" />
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="remember" type="checkbox" name="remember" value="checked" />
                <label className='remember-me' for="remember">Remember me</label>
              </div>
            </div>
            <div className="form-group">
              <button className="btn" type="submit" >
                Login
              </button>
            </div>
            <div className="forgot-password">
              <a href="#" className='fp'>
                <i className="forget-password"></i> <p >Forgot your password?</p>
              </a>
            </div>
          </form>
        </div>

      </div>
    </div>

  );
};

export default Login;
