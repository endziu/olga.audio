import React from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header/index.js"
import Img from "./components/Img/index.js"
import About from "./components/About/index.js"
import Experience from "./components/Experience/index.js"
import Gear from "./components/Gear/index.js"
import Contact from "./components/Contact/index.js"

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Img />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
