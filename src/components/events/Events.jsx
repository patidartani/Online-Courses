import Header from "../../pages/top-banner/Header";
import "./Events.css";
const events = [
  {
    title: "Annual Day Celebration",
    type: "SCHOOL",
    typeColor: "#1976f2",
    img: "https://img.freepik.com/free-photo/young-kids-performing-play-theatre-stage-celebrate-world-theatre-day_23-2151163727.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
    desc: "Celebrate student achievements with performances, awards, and fun-filled activities.",
    organizer: "School Management",
  },
  {
    title: "Science Exhibition",
    type: "SCIENCE",
    typeColor: "#1976f2",
    img: "https://img.freepik.com/premium-photo/group-people-are-gathered-around-table-with-banner-that-says-national-day_913495-518.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
    desc: "Students display innovative science projects, models, and experiments.",
    organizer: "Science Department",
  },
  {
    title: "School Picnic",
    type: "PICNIC",
    typeColor: "#1976f2",
    img: "https://img.freepik.com/free-photo/top-view-kids-laying-cloth_23-2149668716.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
    desc: "A fun day outdoors with games, food, and bonding for all students and staff.",
    organizer: "Class Teachers",
  },
  {
    title: "Live Music Concert",
    type: "MUSIC",
    typeColor: "#ff6b00",
    img: "https://img.freepik.com/premium-photo/disability-scschool-students-with-special-needshool-activity_913495-4417.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
    desc: "Join us for an unforgettable night of live music with your favorite artists.",
    organizer: "Music Club",
  },
  {
    title: "Art & Craft Exhibition",
    type: "ART",
    typeColor: "#c2185b",
    img: "https://img.freepik.com/premium-photo/group-lesson-drawing-children-learn-draw-classroom_109285-5772.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
    desc: "Explore the creativity of students through paintings, crafts, and handmade artwork.",
    organizer: "Art Department",
  },
  {
    title: "Annual Sports Tournament",
    type: "SPORTS",
    typeColor: "#00bfa6",
    img: "https://img.freepik.com/premium-photo/boys-playing-american-football-field_1048944-28330688.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
    organizer: "Sports Committee",
  },
  {
  title: "International Yoga Day",
  type: "HEALTH",
  typeColor: "#8bc34a", // green
  img: "https://img.freepik.com/premium-photo/students-teacher-doing-yoga-pose_13339-240851.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  desc: "Promote physical and mental well-being with a morning of guided yoga sessions.",
  organizer: "Wellness Club",
},
{
  title: "Drama & Theater Night",
  type: "CULTURAL",
  typeColor: "#9c27b0", // purple
  img: "https://img.freepik.com/premium-photo/children-participating-classroom-theater-activity_236854-66808.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  desc: "Students perform stage plays and skits to showcase their acting talents.",
  organizer: "Drama Society",
},
{
  title: "Career Guidance Workshop",
  type: "EDUCATION",
  typeColor: "#3f51b5", // indigo
  img: "https://img.freepik.com/free-photo/high-angle-people-correcting-grammar-mistakes_23-2150171127.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  desc: "Expert talks and sessions to help students plan their future career paths.",
  organizer: "Counseling Department",
}

];


const Events = () => {
  return (
    <>
      <Header title="Upcoming Events" breadcrumb="Upcoming Events" />
      <div className="events-upcoming">
        <section className="events-section">
          <div className="events-header">
            <p className="events-subtitle">OUR UPCOMING EVENTS</p>
            <h2>
              Complete About Students
              <br />
              Advance Course.
            </h2>
          </div>
          <div className="events-container">
            {events.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-img">
                  <img src={event.img} alt={event.title} />
                  <span
                    className="event-tag"
                    style={{ backgroundColor: event.typeColor }}
                  >
                    {event.type}
                  </span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                  <p>
                    <strong>Organizer:</strong> {event.organizer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
