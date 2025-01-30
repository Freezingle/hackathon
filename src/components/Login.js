import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./styles/login.css";
function Login() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
      setIsSignIn(!isSignIn);
    };
  
    return (
      <div>
        <h2>Login to our page </h2>
        <div className={`container ${isSignIn ? "" : "right-panel-active"}`} id="container">
          {/* Sign Up Form */}
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </a>
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
              <p class="mobile">Already have an id? <a onClick = {toggleForm}> Sign In </a></p>

            </form>
          </div>
  
          {/* Sign In Form */}
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </a>
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
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