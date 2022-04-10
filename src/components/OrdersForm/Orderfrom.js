import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/Fire';

const Orderfrom = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const [Name, setName] = useState('')
    const [Address, setAddress] = useState('')
    const [payment, setPayment] = useState(" ")
    const [Number, setNumber] = useState('')
    const [error, setError] = useState("  ")



    const handelName = event => {
        setName(event.target.value)
        console.log(event.target.value);
    }

    const handelAddress = event => {
        setAddress(event.target.value)
        console.log(event.target.value);
    }

    const handelPay = event => {
        setPayment(event.target.value)
    }

    const handelNumber = event => {
        setNumber(event.target.value)
        console.log(event.target.value);
    }

    // if (error) {
    //   return (
    //     <div>
    //       <p>{error.message}</p>
    //     </div>
    //   );
    // }



    const signUp = event => {
        event.preventDefault()
        console.log('aaaaa');
        const shipping = { Name, Address, payment, Number }
        console.log(shipping);


    }

    return (
        <div>
            <p>aa</p>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1>Sign Up</h1>
                    <form onSubmit={signUp} >
                        <div className='input-field'>
                            <label htmlFor='email'>Name</label>
                            <div className='input-wrapper'>
                                <input onBlur={handelName} type='text' name='email' id='email' required />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='Name'>Address</label>
                            <div className='input-wrapper'>
                                <input onBlur={handelAddress} type='taxt' name='email' id='email' required />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='Name'>Phone Number</label>
                            <div className='input-wrapper'>
                                <input onBlur={handelNumber} type='text' name='email' id='email' required />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='Name'>Payment address</label>
                            <div className='input-wrapper'>
                                <input onBlur={handelPay} type='text' name='email' id='email' required />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='Email'>Email </label>
                            <div className='input-wrapper'>
                                <input value={user?.email} readOnly type='text' name='password' id='password' required />
                            </div>
                        </div>
                        <button type='submit' className='auth-form-submit'>
                            Confirm Orders
                        </button>
                    </form>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>OK</p>
                        <div className='line-right' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orderfrom;