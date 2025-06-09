import { Routes, Route } from "react-router-dom"
import Navbar from "./pages/navbar/Navbar"
import Home from "./components/home/Home"
import Footer from "./pages/footer/Footer"
import About from "./components/about/About"
import Course from "./components/courses/Course"
import Team from "./components/team/Team"
import Events from "./components/events/Events"
import ScrollToTop from "./pages/ScrollToTop"
import Contact from "./pages/contact/Contact"
import SignUp from "./pages/signup/SignUp"
import Login from "./pages/login/login"


const App = () => {
  return (
    <>
    <ScrollToTop /> 
    <Navbar />

    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/courses" element={<Course/>} />
      <Route path="/our-team" element={<Team/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />





    </Routes>
    <Footer/>

    </>
  )
}

export default App