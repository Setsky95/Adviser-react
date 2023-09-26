import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Pages/Home/Home"
import About from "./components/common/About"
import Navbar from "./components/Pages/Layout/navbar/Navbar"
import Question1 from "./components/Pages/Home/Question1"
import Category from "./components/Pages/Home/Category"
import Question3 from "./components/Pages/Home/Question3"
import CounterContextComponent from "./context/CounterContext"
function App() {


  return (
    <BrowserRouter>
      <CounterContextComponent>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/us" element={<About />} />
            <Route path="/Q1" element={<Question1 />} />
            <Route path="/category" element={<Category/>} />
            <Route path="/Q3" element={<Question3 />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </CounterContextComponent>
    </BrowserRouter>
  );
}

export default App
