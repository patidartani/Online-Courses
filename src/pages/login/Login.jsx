import React, { useState } from 'react';
import "./Login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Step 1: Import Link

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (
    <>
      <div className='Login-main'>
        <div className="login-page">
          <div className="login-left">
            <img
              src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740"
              alt="Login Visual"
            />
          </div>

          <div className="login-right">
            <h2>Welcome Back!</h2>
            <p>Please login to your account</p>

            <form className='login-form'>
              <input type="email" placeholder="Enter Your Email" required />
              <div className="password-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter Your Password"
                  required
                />
                <span className="password-toggle" onClick={togglePasswordVisibility}>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="form-options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/forgot-password">Forgot Password?</Link> {/* ✅ Replaced */}
              </div>

              <button type="submit">Login</button>
            </form>

            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign Up</Link> {/* ✅ Replaced */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
