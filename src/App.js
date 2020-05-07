import React from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Img from "./components/Img"
import About from "./components/About"
import Experience from "./components/Experience"
import Gear from "./components/Gear"
import Contact from "./components/Contact"

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
