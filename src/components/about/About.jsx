import Header from "../../pages/top-banner/Header";
import BannerSlider from "../home/home-pages/BannerSlider";
import HomeAbout from "./HomeAbout";
import "./About.css";
import OurCourses from "../courses/OurCourses";
import Activities from "../home/home-pages/Activities";
import FAQ from "../../pages/faq/FAQ";

const About = () => {
  return (
    <>
      <Header title="About Us" breadcrumb="About Us" />
      <HomeAbout />
      <div className="about-services">
        <div className="service-subtitle">OUR POPULER SERVICES</div>
        <h2 className="service-title">
          Complete About Students <br /> University Education.
        </h2>
        <BannerSlider />
      </div>
      <OurCourses />
      <FAQ/>
      <div className="with-bg">
        <Activities />
      </div>
    </>
  );
};

export default About;
