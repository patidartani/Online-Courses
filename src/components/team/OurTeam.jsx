import React from "react";
import "./OurTeam.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Principal",
    img: "https://img.freepik.com/premium-photo/portrait-teacher-blackboard-classroom_85574-12172.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
 
  {
    name: "Amit Verma",
    role: "Assistant Teacher",
    img: "https://img.freepik.com/free-photo/smiling-showing-one-male-teacher-wearing-glasses-holding-number-fans-sitting-table-with-school-tools-classroom_141793-114349.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Neha Mehta",
    role: "Counselor",
    img: "https://img.freepik.com/free-photo/pleased-showing-thumbs-up-young-female-teacher-sitting-table-with-school-tools-classroom_141793-114419.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
];

const OurTeam = () => {
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
