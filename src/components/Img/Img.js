import React from 'react'
import useMediaQuery from 'use-media-query-hook'

function Img() {
  const isLarge = useMediaQuery('(min-width: 1280px)')

  return (
    <div className="p-1 sm:p-2 lg:p-3" style={{ height: `calc(100vh - ${isLarge ? '96px' : '64px'})` }}>
      <img className="w-full h-full object-cover object-center" src="/images/olga-bg.jpg" alt="Olga z mikrofonem" />
    </div>
  )
}

export default Img
