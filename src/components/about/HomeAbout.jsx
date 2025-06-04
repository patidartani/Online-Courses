import React from 'react';
import './HomeAbout.css';

const HomeAbout = () => {
  return (
    <div className="homeabout">
      <div className="about-container">
        <div className="about-left">
          <img
            src="https://eduor.vercel.app/images/about_2_img_1.jpg"
            alt="Main"
            className="main-img"
          />
          <img
            src="https://eduor.vercel.app/images/about_2_img_2.jpg"
            alt="Small"
            className="small-img"
          />
          <img
            src="https://eduor.vercel.app/_next/static/media/about_2_shape.50dba551.png"
            alt="dots"
            className="dots-img"
          />
          <div className="experience-badge">
            <span>24+</span> YEARS OF EXPERIENCE
          </div>
        </div>

        <div className="about-right">
          <p className="section-subtitle">OUR ABOUT US</p>
          <h2 className="section-title">
            Complete About Students <br /> University Education.
          </h2>
          <p className="section-desc">
            Business tailored it design, management & support services business agency elit,
            sed do eiusmod tempor.
          </p>

          <ul className="about-features">
            <li>
              <span className="icon red">✔</span>
              <div>
                <h4>Successfully Trained</h4>
                <p>Business tailored it design, management support services.</p>
              </div>
            </li>
            <li>
              <span className="icon cyan">✔</span>
              <div>
                <h4>Education Growth</h4>
                <p>Business tailored it design, management support services.</p>
              </div>
            </li>
            <li>
              <span className="icon orange">✔</span>
              <div>
                <h4>Students Trained</h4>
                <p>Business tailored it design, management support services.</p>
              </div>
            </li>
            <li>
              <span className="icon purple">✔</span>
              <div>
                <h4>Successfully Trained</h4>
                <p>Business tailored it design, management support services.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
