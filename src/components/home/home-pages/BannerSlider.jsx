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
    title: "Academic Excellence",
    desc: "We provide a strong academic foundation with a well-structured curriculum, experienced teachers, and a focus on concept-based learning to help every student succeed.",
  },
  {
    iconBg: "#f75b78",
    icon: <FaBook />,
    title: "Early Childhood & Primary Education",
    desc: "We offer a nurturing and engaging environment where young learners build strong foundations in literacy, numeracy, and social skills through play-based and interactive learning.",
  },
  {
    iconBg: "#b6b22c",
    icon: <IoIosColorPalette />,
    title: "Digital Learning",
    desc: "Empowering students with 21st-century skills through smart classrooms, computer labs, and interactive e-learning tools.",
  },
   {
    iconBg: "#ff9900",
    icon: <GiPencilBrush />,
    title: "Events & Competitions",
    desc: "We organize a variety of events and competitions to inspire talent, boost confidence, and encourage healthy participation among students.",
  },
  {
    iconBg: "#11bfae",
    icon: <FaPencilRuler />,
    title: "Co-Curricular Activities",
    desc: "We encourage all-round development through music, art, sports, dance, and various club activities that build creativity and confidence.",
  },
  {
    iconBg: "#f75b78",
    icon: <SiSimpleanalytics />,
    title: "Personality & Moral Development",
    desc: "We instill strong values, life skills, and leadership qualities to help students grow into responsible and confident individuals.",
  },
 
];


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
