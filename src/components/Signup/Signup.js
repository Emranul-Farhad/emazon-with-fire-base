import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/Fire";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conpass, setConpass] = useState('')
  const [error, setError] = useState("  ")
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


  const handelmail = event => {
    setEmail(event.target.value)
    console.log(event.target.value);
  }
  const handelpass = event => {
    setPassword(event.target.value)
    console.log(event.target.value);

  }
  const handelconpass = event => {
    setConpass(event.target.value)
    console.log(event.target.value);

  }

  // if (error) {
  //   return (
  //     <div>
  //       <p>{error.message}</p>
  //     </div>
  //   );
  // }

  if (user) {
    navigate('/shop')
  }

  const signUp = event => {
    event.preventDefault()
    console.log('aaaaa');

    if (password !== conpass) {
      setError("password don't matched ")
    }
    else {
      setError("  ")
    }
    createUserWithEmailAndPassword(email, password)


  }



  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign Up</h1>
        <form onSubmit={signUp} >
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input onBlur={handelmail} type='email' name='email' id='email' required />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input onBlur={handelpass} type='password' name='password' id='password' required />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input
                onBlur={handelconpass}
                type='password'
                name='confirmPassword'
                id='confirm-password'
                required
              />
            </div>
            <p> {error} </p>
          </div>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
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
    </div>
  );
};

export default Signup;
