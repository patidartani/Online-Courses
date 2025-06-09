import "./Contact.css";
import Header from "../../pages/top-banner/Header";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Header title="Contact Us" breadcrumb="Contact Us" />
      <section className="contact-section">
        <div className="contact-container">
          {/* LEFT: Form */}
          <div className="contact-form">
            <p className="contact-subtitle">OUR CONTACT US</p>
            <h2 className="contact-title">Get Our Contact Now.</h2>
            <p className="contact-p">
              Promote your blog posts, case udie, and product ouncems with the
              the branded videoscustomers coming back for services Makes best
              effort.
            </p>

            <form className="contact-form">
              <div className="input-row">
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
  </div>
              <textarea placeholder="Message"></textarea>
              <button type="submit">SEND REQUEST</button>
            </form>
          </div>

          {/* RIGHT: Info */}
          <div className="contact-info">
            {/* CALL */}
            <div className="contact-info-box">
              <div className="contact-icon call">
                <FaPhoneAlt />
              </div>
              <div>
                <h3>Call</h3>
                <p>+880254615566</p>
                <p>+826542556455</p>
              </div>
            </div>

            {/* MAIL */}
            <div className="contact-info-box">
              <div className="contact-icon mail">
                <FaEnvelope />
              </div>
              <div>
                <h3>Mail</h3>
                <p>neta@eobi.com</p>
                <p>coraty@bara.com</p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="contact-info-box">
              <div className="contact-icon address">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Address</h3>
                <p>52, 25 rangpur,0123</p>
                <p>Ratrba baraj,20</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.744300614625!2d90.4042990144566!3d23.86823968950769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40340f24625%3A0xa8f83c6e7c9303!2sRangpur!5e0!3m2!1sen!2sin!4v1616147107741!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
