import React from "react"
import Img from "../Img"
import useMediaQuery from "use-media-query-hook"

function Contact() {
  const isLarge = useMediaQuery("(min-width: 1280px)")
  return (
    <div className="relative">
      <div
        style={{ height: `calc(100vh - ${isLarge ? "96px" : "64px"})` }}
        className="flex items-center align-center py-4 px-6 lg:py-16 text-2xl text-white mx-auto max-w-5xl"
      >
        Bibendum enim facilisis gravida neque convallis a cras semper. Amet
        risus nullam eget felis eget nunc lobortis. Eget nullam non nisi est sit
        amet facilisis magna. Amet cursus sit amet dictum sit amet justo. Ut
        diam quam nulla porttitor massa. Faucibus et molestie ac feugiat sed
        lectus. Morbi blandit cursus risus at ultrices mi tempus imperdiet
        nulla.
      </div>
      <Img imgSrc="./images/contact.jpg" />
    </div>
  )
}

export default Contact
