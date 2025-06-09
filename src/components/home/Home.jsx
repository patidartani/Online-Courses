import HomePage from './home-pages/HomePage'
import HomeAbout from "../../components/about/HomeAbout"
import OurCourses from '../courses/OurCourses'
import OurTeam from '../team/OurTeam'
import Activities from './home-pages/Activities'
import Poster from './home-pages/Poster'
import Counter from "../counter/Counter"
import ApplyPoster from './home-pages/ApplyPoster'

const homeTeam = [
    {
    name: "Priya Sharma",
    role: "Principal",
    img: "https://img.freepik.com/premium-photo/portrait-teacher-blackboard-classroom_85574-12172.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Amit Verma",
    role: "Assistant Teacher",
    img: "https://img.freepik.com/free-photo/smiling-showing-one-male-teacher-wearing-glasses-holding-number-fans-sitting-table-with-school-tools-classroom_141793-114349.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
  {
    name: "Neha Mehta",
    role: "Counselor",
    img: "https://img.freepik.com/free-photo/pleased-showing-thumbs-up-young-female-teacher-sitting-table-with-school-tools-classroom_141793-114419.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740",
  },
];

const Home = () => {
  return (
    <>
      <HomePage />
      <HomeAbout />
      <Poster/>
      <OurCourses/>
      <Counter />
      <OurTeam teamMembers={homeTeam} />

      <Activities/>
      <ApplyPoster/>
    </>
  )
}

export default Home