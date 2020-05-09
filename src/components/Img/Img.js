import React from "react"
import useMediaQuery from "use-media-query-hook"
import { useLocation } from "react-router-dom"

function Img({ imgSrc = "/images/contact.jpg" }) {
  const isLarge = useMediaQuery("(min-width: 1280px)")
  const { pathname } = useLocation()

  return (
    <div
      // prettier-ignore
      className={`${pathname !== "/" ? "absolute top-0 left-0" : "relative"} p-1 xl:p-3`}
      style={{
        zIndex: "-10",
        height: `calc(100vh - ${isLarge ? "96px" : "64px"})`,
      }}
    >
      {pathname !== "/" && (
        <div
          className="absolute top-1 left-1 right-1 bottom-1 opacity-75"
          style={{
            // prettier-ignore
            background:"linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,1) 100%)",
            width: `calc(100% - ${isLarge ? "24px" : "8px"})`,
            height: `calc(100% - ${isLarge ? "24px" : "8px"})`,
          }}
        />
      )}
      <img
        className="w-full h-full object-cover object-top"
        src={imgSrc}
        alt="Olga z mikrofonem"
      />
    </div>
  )
}

export default Img
