import React from "react"
import Img from "../Img"
import useMediaQuery from "use-media-query-hook"

function About() {
  const isLarge = useMediaQuery("(min-width: 1280px)")
  return (
    <div className="relative">
      <Img imgSrc="./images/about.jpg" />
      <div
        style={{ height: `calc(100vh - ${isLarge ? "96px" : "64px"})` }}
        className="flex items-center align-center py-4 px-6 lg:py-16 text-2xl text-white mx-auto max-w-5xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  )
}

export default About
