import React from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header/index.js"
import Img from "./components/Img/index.js"
import About from "./components/About/index.js"

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Img />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/experience"
          element={
            <div className="py-8 p-4 text-2xl mx-auto max-w-5xl">
              Non nisi est sit amet facilisis magna etiam. Interdum posuere
              lorem ipsum dolor sit. Donec pretium vulputate sapien nec sagittis
              aliquam malesuada bibendum arcu. Pretium fusce id velit ut tortor
              pretium. Sagittis id consectetur purus ut faucibus pulvinar
              elementum. Aliquam sem et tortor consequat id porta. Quis viverra
              nibh cras pulvinar mattis nunc sed.
            </div>
          }
        />
        <Route
          path="/gear"
          element={
            <div className="py-8 p-4 text-2xl mx-auto max-w-5xl">
              Pharetra vel turpis nunc eget lorem. Ut diam quam nulla porttitor
              massa. Ultrices dui sapien eget mi. Non curabitur gravida arcu ac
              tortor dignissim. Scelerisque purus semper eget duis at tellus at.
              Amet dictum sit amet justo donec enim diam. Senectus et netus et
              malesuada fames ac turpis egestas.
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="py-8 p-4 text-2xl mx-auto max-w-5xl">
              Bibendum enim facilisis gravida neque convallis a cras semper.
              Amet risus nullam eget felis eget nunc lobortis. Eget nullam non
              nisi est sit amet facilisis magna. Amet cursus sit amet dictum sit
              amet justo. Ut diam quam nulla porttitor massa. Faucibus et
              molestie ac feugiat sed lectus. Morbi blandit cursus risus at
              ultrices mi tempus imperdiet nulla.{" "}
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
