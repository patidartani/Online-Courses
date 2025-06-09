// OurTeam.jsx
import React from "react";
import "./OurTeam.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const OurTeam = ({ teamMembers }) => {
  return (
    <div className="our-team-section">
      <div className="out-team-content">
        <div className="section-header">
          <p className="sub-title">MEET OUR TEAM</p>
          <h2>
            Become A Instruction <br />
            Instructor Teacher.
          </h2>
        </div>

        <div className="team-slider">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-img-container">
                <img src={member.img} alt={member.name} className="team-img" />
                <div className="social-icons">
                  <FaFacebookF />
                  <FaLinkedinIn />
                  <FaTwitter />
                  <FaPinterestP />
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
