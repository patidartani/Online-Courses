import { Routes, Route } from "react-router-dom"
import Navbar from "./pages/navbar/Navbar"
import Home from "./components/home/Home"
import Footer from "./pages/footer/Footer"
import About from "./components/about/About"


const App = () => {
  return (
    <>
    <Navbar />
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />



    </Routes>
    <Footer/>

    </>
  )
}

export default App