import "./HomePage.css";
import arrowImg from "../../../assets/arrow.png";
import bookImg from "../../../assets/book.png";
import bannerBg from "../../../assets/homebanner.jpg";
import BannerSlider from "./BannerSlider";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
   const navigate = useNavigate()

  const courseHandler = () => {
navigate("/courses")
  }

  return (
    <div className="homepage">
      <div
        className="banner-section"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="banner-content">
          <p className="welcome-text">  JK School – Building Bright Futures with Quality Education</p>
          <h1 className="banner-title">
        Empowering    <span className="highlight">students</span><br />
        to    thrive in a <br /> changing world.

          </h1>
          <p className="banner-desc">
           At JK School, we nurture young minds through academic excellence, <br /> values-based learning, and holistic
          </p>
          <div className="banner-buttons">
            <button className="course-btn" onClick={courseHandler}>OUR COURSES</button>
            {/* <div className="play-icon">
              <div className="circle">&#9658;</div>
            </div> */}
          </div>
        </div>

        <img src={arrowImg} className="arrow-img" alt="Arrow" />
        <img src={bookImg} className="book-img" alt="Book" />
      </div>
       
       <div className="banner-slider-wrapper">
         <BannerSlider />
       </div>
    </div>
  );
};

export default HomePage;
