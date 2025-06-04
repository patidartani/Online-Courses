import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const navigate = useNavigate()

  const homeHandler = () => {
navigate("/")
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo" onClick={homeHandler}>
          <img src={Logo} alt="logo" />
        </div>

        <div className={`nav-right ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="login-btn">LOGIN</button>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
