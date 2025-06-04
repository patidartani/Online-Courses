import { Routes, Route } from "react-router-dom"
import Navbar from "./pages/navbar/Navbar"
import Home from "./components/home/Home"


const App = () => {
  return (
    <>
    <Navbar />
    <Routes >
      <Route path="/" element={<Home/>} />


    </Routes>

    </>
  )
}

export default App