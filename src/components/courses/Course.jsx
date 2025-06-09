import Header from "../../pages/top-banner/Header"
import "./Course.css"
import OurCourses from "./OurCourses"

const Course = () => {
  return (
    <>
      <Header title="Contact Us" breadcrumb="Contact Us" />
       <div className="mb-5">
           <OurCourses />
       </div>


    </>
  )
}

export default Course