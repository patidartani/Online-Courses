import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png"
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const navigate = useNavigate();
  const location = useLocation();


  const homeHandler = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo" onClick={homeHandler} style={{cursor: "pointer"}}>
          <img src={Logo} alt="logo" />
        </div>

        <div className={`nav-right ${isMobileMenuOpen ? "active" : ""}`}>
         <ul className="nav-links">
  <li className={location.pathname === "/" ? "active" : ""}>
    <Link to="/">Home</Link>
  </li>
  <li className={location.pathname === "/about" ? "active" : ""}>
    <Link to="/about">About Us</Link>
  </li>
  <li className={location.pathname === "/courses" ? "active" : ""}>
    <Link to="/courses">Courses</Link>
  </li>
  <li className={location.pathname === "/events" ? "active" : ""}>
    <Link to="/events">Events</Link>
  </li>
  <li className={location.pathname === "/our-team" ? "active" : ""}>
    <Link to="/our-team">Our Team</Link>
  </li>
  <li className={location.pathname === "/contact" ? "active" : ""}>
    <Link to="/contact">Contact</Link>
  </li>
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
