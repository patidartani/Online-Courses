import Header from "../../pages/top-banner/Header"
import OurCourses from "./OurCourses"

const Course = () => {
  return (
    <>
      <Header title="Our Courses" breadcrumb="Courses" />
       <div className="mb-5">
           <OurCourses />
       </div>


    </>
  )
}

export default Course