import HomePage from './home-pages/HomePage'
import HomeAbout from "../../components/about/HomeAbout"
import OurCourses from '../courses/OurCourses'
import OurTeam from '../team/OurTeam'
import Activities from './home-pages/Activities'
import Poster from './home-pages/Poster'
import Counter from "../counter/Counter"
import ApplyPoster from './home-pages/ApplyPoster'

const Home = () => {
  return (
    <>
      <HomePage />
      <HomeAbout />
      <Poster/>
      <OurCourses/>
      <Counter />
      <OurTeam />
      <Activities/>
      <ApplyPoster/>
    </>
  )
}

export default Home