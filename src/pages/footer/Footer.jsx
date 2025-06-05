import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-col logo-col">
          <h2 className="logo">Eduor</h2>
          <p>
            Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit aut
            fugit, sed quia magni this dolores eos qui ratione.
          </p>
          <div className="footer-socials">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaPinterestP />
            <FaGooglePlusG />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="#">Best Services</a>
            <a href="#">Events</a>
            <a href="#">About Our Company</a>
            <a href="#">Our Courses</a>
            <a href="#">Our Team</a>
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
          <a href="#">Privacy Policy</a> | <a href="#">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
