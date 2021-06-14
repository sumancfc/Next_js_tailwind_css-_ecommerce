import React from "react"
import { useState } from "react"

function ZoomImage({ src, alt }) {
  const [backgroundPos, setBackgroundPos] = useState("0% 0%")

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    setBackgroundPos(`${x}% ${y}%`)
  }

  return (
    <figure
      className="w-full bg-no-repeat cursor-zoom-in zoom-image"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: backgroundPos,
      }}
    >
      <img loading="lazy" src={src} alt={alt} />
    </figure>
  )
}

export default React.memo(ZoomImage)
