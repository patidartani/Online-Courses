import React from "react";
import "./OurCourses.css";

const coursesData = [
  {
    id: 1,
    title: "Development Theory Learn",
    instructor: "Smith John",
    lessons: 14,
    students: "50+ Students",
    price: "$50.00",
    rating: 4,
    tag: "DRAWING",
    img: "https://plus.unsplash.com/premium_photo-1681681082019-7adef86bd634?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2tzJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D",
    description: "Learn about development theory in this comprehensive course."
  },
  {
    id: 2,
    title: "Learn Photography",
    instructor: "Hasan Mahmud",
    lessons: 23,
    students: "94+ Students",
    price: "$65.00",
    rating: 4,
    tag: "ENGLISH",
    img: "https://plus.unsplash.com/premium_photo-1681681061635-a64755f982f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3MlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Master the art of photography and take stunning pictures."
  },
  {
    id: 3,
    title: "Advance WordPress",
    instructor: "Khalid Hasan",
    lessons: 40,
    students: "72+ Students",
    price: "$99.00",
    rating: 4,
    tag: "DESIGN",
    img: "https://images.unsplash.com/photo-1637068302763-a8284115e920?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3MlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Take your WordPress skills to the next level with advanced techniques."
  },
   {
    id: 1,
    title: "Development Theory Learn",
    instructor: "Smith John",
    lessons: 14,
    students: "50+ Students",
    price: "$50.00",
    rating: 4,
    tag: "DRAWING",
    img: "https://media.istockphoto.com/id/2216219048/photo/teenage-female-school-student-sitting-on-desk-in-her-classroom-with-book-and-smiling-to-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=q3pt4spH5Yqa0T4pbBYeuRqdzCNQNKQlbDqkfFvNRSY=",
    description: "Learn about development theory in this comprehensive course."
  },
  {
    id: 2,
    title: "Learn Photography",
    instructor: "Hasan Mahmud",
    lessons: 23,
    students: "94+ Students",
    price: "$65.00",
    rating: 4,
    tag: "ENGLISH",
    img: "https://images.unsplash.com/photo-1731983573683-9bedfb98324f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdXJzZXMlMjBzdHVkZW50cyUyMGJvb2tzfGVufDB8fDB8fHww",
    description: "Master the art of photography and take stunning pictures."
  },
  {
    id: 3,
    title: "Advance WordPress",
    instructor: "Khalid Hasan",
    lessons: 40,
    students: "72+ Students",
    price: "$99.00",
    rating: 5,
    tag: "DESIGN",
    img: "https://plus.unsplash.com/premium_photo-1681681082145-8e0765ddc770?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudHMlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Take your WordPress skills to the next level with advanced techniques."
  }
];

const OurCourses = () => {
  return (
    <div className="our-courses-container">
      <p className="courses-subtitle">OUR POPULAR COURSES</p> 
      <h2 className="courses-heading">Educational For Students<br/>Popular Courses.</h2>
      <div className="courses-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image" style={{ backgroundImage: `url(${course.img})` }}>
              <span className={`tag tag-${course.tag.toLowerCase()}`}>{course.tag}</span>
              <span className="price">{course.price}</span>
            </div>
            <div className="course-info">
              <div className="course-meta">
                <span className="instructor">👤 {course.instructor}</span>
                <span className="lessons">📁 {course.lessons} Lessons</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-footer">
                <div className="rating">⭐⭐⭐⭐☆ (04)</div>
                <div className="students">{course.students}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
