import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../../assets/JK School.png"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col logo-col">
          <div className="logo">
  <img src={logo} alt="JK School Logo" />
             
          </div>
          <p>
            Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit aut
            fugit, sed quia magni this dolores eos qui ratione.
          </p>
          <div className="footer-socials">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaPinterestP />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <div className="footer-links">
  <Link to="/about">About Our Company</Link>
  <Link to="/courses">Our Courses</Link>
  <Link to="/events">Our Upcoming Events</Link>
  <Link to="/our-team">Our Team</Link>
  <Link to="/contact">Contact Us</Link>
</div>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3>Our Contacts</h3>
           <div className="footer-links">
                     <a href="">Address: 27 Division St, Berakuti, NY 121102, USA</a>
          <a href="">Phone: +8 1440 456 782</a>
          <a href="">Email: example@mail.com</a>
           </div>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h3>News Letter</h3>
          <p>
            Our approach to it is unique around know work an we know Get hands
            on the you like
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Your Email" />
            <button>SEND</button>
          </div>
        </div>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright ©Eduor all rights reserved.</p>
        <div>
        <Link href="#">Terms & Conditions </Link>   | <Link href="#">Privacy Policy</Link> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
