import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import "./BannerSlider.css";
import { IoIosColorPalette } from "react-icons/io";
import { GiPencilBrush } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { FaPencilRuler } from "react-icons/fa";

const baseSliderData = [
  {
    iconBg: "#ff9900",
    icon: <GiPencilBrush />,
    title: "Product Design",
    desc: "Bring your product ideas to life with our innovative design solutions.",
  },
  {
    iconBg: "#f75b78",
    icon: <FaBook />,
    title: "Exclusive Man",
    desc: "Get exclusive handyman services for your home in London.",
  },
  {
    iconBg: "#b6b22c",
    icon: <IoIosColorPalette />,
    title: "UI/UX Design",
    desc: "Transform your digital user experience with our design expertise.",
  },
  {
    iconBg: "#11bfae",
    icon: <FaPencilRuler />,
    title: "Graphic Design",
    desc: "Create stunning visuals and graphics for your brand or project.",
  },
  {
    iconBg: "#f75b78",
    icon: <SiSimpleanalytics />,
    title: "Digital Marketing",
    desc: "Grow your online presence with strategic digital marketing solutions.",
  },
];

// Repeat to get more slides
const sliderData = [...baseSliderData, ...baseSliderData];

const BannerSlider = () => {
  return (
    <div className="banner-slider-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider-card">
              <div
                className="icon-circle"
                style={{ backgroundColor: item.iconBg }}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
