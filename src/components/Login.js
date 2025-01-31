import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import {auth} from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./styles/login.css";
function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const toggleForm = () => {
      setIsSignIn(!isSignIn);
    };

    const handleSignUp = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/home');
      } catch (error) {
        alert(error.message);
      }
      setLoading(false);
    };

    const handleSignIn = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/home');
        
      } catch (error) {
        alert(error.message);
      }
      setLoading(false);
    };

    return (
      <div>
        <h2>Login to our page </h2>
        <div className={`container ${isSignIn ? "" : "right-panel-active"}`} id="container">
          {/* Sign Up Form */}
          <div className="form-container sign-up-container">
            <form onSubmit={handleSignUp}>
              <h1>Create Account</h1>
              
              <span>Use your email for registration</span>
              <input type="text" placeholder="Name" value  =  {name} onChange= {(e)=>{setName(e.target.value)}} />
              <input type="email" placeholder="Email" value={email} onChange = {(e)=>{setEmail(e.target.value)}} />
              <input type="password" placeholder="Password" value={password} onChange = {(e)=>{setPassword(e.target.value)}} />
              <button>Sign Up</button>
              <p class="mobile">Already have an id? <a onClick = {toggleForm}> Sign In </a></p>

            </form>
          </div>
  
          {/* Sign In Form */}
          <div className="form-container sign-in-container">
            <form onSubmit = {handleSignIn}>
              <h1>Sign in</h1>
              
              <span>Use your account</span>
              <input type="email" placeholder="Email" value = {email}  onChange= {(e)=>{setEmail(e.target.value)}} />
              <input type="password" placeholder="Password" value = {password} onChange = {(e)=>{setPassword(e.target.value)}} />
             
                <button>Sign In</button>
                <p class= "mobile">Donot have an Id? <a onClick={toggleForm}>Sign Up</a></p>
            </form>
          </div>
  
          {/* Overlay Container */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" onClick={toggleForm}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={toggleForm}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Login;