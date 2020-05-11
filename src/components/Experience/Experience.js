import React from "react"
import Img from "../Img"
import useMediaQuery from "use-media-query-hook"

function Experience() {
  const isLarge = useMediaQuery("(min-width: 1280px)")
  return (
    <div className="relative">
      <div
        style={{ height: `calc(100vh - ${isLarge ? "96px" : "64px"})` }}
        className="flex items-center align-center py-4 px-6 lg:py-16 text-2xl text-white mx-auto max-w-5xl"
      >
        Non nisi est sit amet facilisis magna etiam. Interdum posuere lorem
        ipsum dolor sit. Donec pretium vulputate sapien nec sagittis aliquam
        malesuada bibendum arcu. Pretium fusce id velit ut tortor pretium.
        Sagittis id consectetur purus ut faucibus pulvinar elementum. Aliquam
        sem et tortor consequat id porta. Quis viverra nibh cras pulvinar mattis
        nunc sed.
      </div>
      <Img imgSrc="./images/olga-bg.jpg" />
    </div>
  )
}

export default Experience
