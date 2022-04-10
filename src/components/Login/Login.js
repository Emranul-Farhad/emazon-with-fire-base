import React, { useState } from "react";
import "./AuthForm.css";
import GoogleLogo from "../../Assets/Image/google.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Fire";

const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const email = event => {
    setEmail(event.target.value)
  }

  const password = event => {
    setPassword(event.target.value)
  }

  const location = useLocation()
  let from = location.state?.from?.pathname || "/";


  if (user) {
    navigate(from, { replace: true })
  }

  const handelLogin = event => {
    event.preventDefault()
    signInWithEmailAndPassword(Email, Password)
  }

  return (
    <div className='auth-form-container '>
      {loading ? <p> loading... </p>
        : <div className='auth-form'>
          <h1>Login</h1>
          <form onSubmit={handelLogin} >
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <div className='input-wrapper'>
                <input onBlur={email} type='text' name='email' id='email' required />
              </div>
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <div className='input-wrapper'>
                <input onBlur={password} type='password' name='password' id='password' required />
              </div>
            </div>
            <button type='submit' className='auth-form-submit'>
              Login
            </button>
          </form>
          <p className='redirect'>
            New to Tech Geeks?{" "}
            <span onClick={() => navigate("/signup")}>Create New Account</span>
          </p>
          <div className='horizontal-divider'>
            <div className='line-left' />
            <p>or</p>
            <div className='line-right' />
          </div>
          <div className='input-wrapper'>
            <button className='google-auth'>
              <img src={GoogleLogo} alt='' />
              <p> Continue with Google </p>
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Login;
