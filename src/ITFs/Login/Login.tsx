import React, { useState } from 'react'
import './login.css'
import register from './img/register.svg'
import log from './img/log.svg'
import { M_SignInForm } from './SignInForm'
import { M_SignUpForm } from './SignUpForm'
import {connect} from 'react-redux' 
import Dashboard from '../Dashboard/Dashboard'
import { userLoggedIn } from '../Redux/ActionCreators'

function Login(props: any) {
  const [form, setForm] = useState('signin')
  function setSignupForm() {
    setForm('signup')
  }
  function setSigninForm() {
    setForm('signin')
  }
if(sessionStorage.getItem('jwtToken') !== undefined || sessionStorage.getItem('jwtToken') !== null ){
props.checkuserLogggedIn()
}

if(props.loginSuccess){
  return (<Dashboard/>)
}else
  return (
    <div className={form === 'signin' ? 'login-container' : 'login-container sign-up-mode'}>
      <div className="form-container">
        <div className="signin-signup">
          <M_SignInForm />
          <M_SignUpForm />
          
        </div>
      </div>
      <div className="panels-container">
        <div className="panel panel-left">
          <div className="content">
            <h3>New Here?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              voluptate blanditiis sit.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={setSignupForm}
            >
              Sign Up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>

        <div className="panel panel-right">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              voluptate blanditiis sit.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={setSigninForm}
            >
              Sign In
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state:any)=>{
  return ({
    loginSuccess:state.loginSuccess
  })
}
const mapdispatcherToProp=(dispatch:any)=>{
  return {
    checkuserLogggedIn :()=> dispatch((userLoggedIn()))
  }
}
export default React.memo(connect(mapStateToProps,mapdispatcherToProp)(Login))
