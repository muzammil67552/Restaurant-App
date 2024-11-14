/* eslint-disable react/prop-types */
import { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close'/>
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Login" ? null : <input type='text' placeholder='Enter username' required />}
                    <input type='email' placeholder='Enter your email' required />
                    <input type='password' placeholder='Enter password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create an account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                    {
                        currState === "Login" ?
                            <p>Create an account? Click here <span onClick={() => setCurrState("Sign Up")}>Sign Up</span></p> :
                            <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login</span></p>
                    }
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;
