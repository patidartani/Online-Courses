import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Activities.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBuildingColumns,
  faBook,
  faBookOpen,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
const activities = [
  {
    title: "Sports Training",
    icon: <FontAwesomeIcon icon={faBuildingColumns} />,
    color: "#ff4d4f", 
  },
  {
    title: "School Directly",
    icon: <FontAwesomeIcon icon={faBookOpen} />,
    color: "#1890ff", 
  },
  {
    title: "Digital Marketing",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
    color: "#52c41a", 
  },
  {
    title: "Parenting Bill",
    icon: <FontAwesomeIcon icon={faBook} />,
    color: "#722ed1", 
  },
  {
    title: "Engineering",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    color: "#fa8c16", 
  },
   {
    title: "School Directly",
    icon: <FontAwesomeIcon icon={faBookOpen} />,
    color: "#1890ff", 
  },
  {
    title: "Digital Marketing",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
    color: "#52c41a", 
  },
];


const Activities = () => {
  return (
    <div className="activities-wrapper">
      <p className="activities-subtitle">OUR BEST ACTIVITIES</p>
      <h2 className="activities-title">
        We School Be Happy With <br /> Our Activities.
      </h2>

     <Swiper
  slidesPerView={1}
  spaceBetween={30}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  modules={[Pagination, Autoplay]} 
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  }}
  className="activities-slider"
>

        {activities.map((act, index) => (
          <SwiperSlide key={index}>
            <div className="activities-card" style={{ borderColor: act.color }}>
              <div
                className="activities-icon"
                style={{ backgroundColor: act.color }}
              >
                {act.icon}
              </div>
              <h4>{act.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Activities;
