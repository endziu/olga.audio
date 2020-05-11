import React from "react"
import Img from "../Img"
import useMediaQuery from "use-media-query-hook"

function Gear() {
  const isLarge = useMediaQuery("(min-width: 1280px)")
  return (
    <div className="relative">
      <div
        style={{ height: `calc(100vh - ${isLarge ? "96px" : "64px"})` }}
        className="flex items-center align-center py-4 px-6 lg:py-16 text-2xl text-white mx-auto max-w-5xl"
      >
        Pharetra vel turpis nunc eget lorem. Ut diam quam nulla porttitor massa.
        Ultrices dui sapien eget mi. Non curabitur gravida arcu ac tortor
        dignissim. Scelerisque purus semper eget duis at tellus at. Amet dictum
        sit amet justo donec enim diam. Senectus et netus et malesuada fames ac
        turpis egestas.
      </div>
      <Img imgSrc="./images/gear.jpg" />
    </div>
  )
}

export default Gear
