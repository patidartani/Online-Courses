import { Routes, Route } from "react-router-dom"
import Navbar from "./pages/navbar/Navbar"
import Home from "./components/home/Home"
import Footer from "./pages/footer/Footer"


const App = () => {
  return (
    <>
    <Navbar />
    <Routes >
      <Route path="/" element={<Home/>} />


    </Routes>
    <Footer/>

    </>
  )
}

export default App