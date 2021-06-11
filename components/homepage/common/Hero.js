import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"

export default function Hero({ sliders }) {
  // console.log(sliders)
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  }
  return (
    <div className="mt-3 p-0 overflow-hidden hero">
      <Slider {...settings}>
        {sliders.map((slider, i) => (
          <div key={i} className="relative max-w-full h-72 flex items-center  ">
            <Link href="/">
              <a className="">
                <Image
                  src={slider.image}
                  alt={slider.alt}
                  layout="fill"
                  quality={100}
                  objectFit="cover"
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}
