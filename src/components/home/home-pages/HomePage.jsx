import "./HomePage.css";
import arrowImg from "../../../assets/arrow.png";
import bookImg from "../../../assets/book.png";
import bannerBg from "../../../assets/homebanner.jpg";
import BannerSlider from "./BannerSlider";

const HomePage = () => {
  return (
    <div className="homepage">
      <div
        className="banner-section"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="banner-content">
          <p className="welcome-text">WELCOME TO EDUOR!</p>
          <h1 className="banner-title">
            We Are Best <span className="highlight">Online</span><br />
            Courses Education.
          </h1>
          <p className="banner-desc">
            Our agency can only be as strong as our people & because of team
            have <br /> designed game changing products.
          </p>
          <div className="banner-buttons">
            <button className="course-btn">OUR COURSES</button>
            <div className="play-icon">
              <div className="circle">&#9658;</div>
            </div>
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
