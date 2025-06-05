import HomePage from './home-pages/HomePage'
import HomeAbout from "../../components/about/HomeAbout"
import OurCourses from '../courses/OurCourses'
import OurTeam from '../team/OurTeam'
import Activities from './home-pages/Activities'
import Poster from './home-pages/Poster'

const Home = () => {
  return (
    <>
      <HomePage />
      <HomeAbout />
      <Poster/>
      <OurCourses/>
      <OurTeam />
      {/* <Activities/> */}
    </>
  )
}

export default Home