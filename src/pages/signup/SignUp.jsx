import './SignUp.css';
import { Link } from 'react-router-dom'; // ✅ Import Link

const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-left">
            <img
              src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740"
              alt="Sign Up"
            />
          </div>

          <div className="signup-right">
            <h2>Create an Account!</h2>
            <p>Please fill in your details to register</p>

            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Enter Your Email" required />
              <input type="password" placeholder="Enter Your Password" required />
              <input type="number" placeholder="Phone Number" required />

              <div className="checkbox-wrappers">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">I agree to the Terms & Conditions</label>
              </div>

              <button type="submit" className="signup-btn">Sign Up</button>
            </form>

            <p className="login-redirect">
              Already have an account? <Link to="/login">Login</Link> {/* ✅ Changed */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
