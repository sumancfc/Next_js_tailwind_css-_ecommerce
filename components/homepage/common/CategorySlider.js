import Link from "next/link"
import Image from "next/image"
import Slider from "react-slick"

export default function CategorySlider({ categories, categoryId }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
    ],
  }
  return (
    <div className="mt-5">
      <Slider {...settings}>
        {categories
          .filter((category) => category.id === categoryId)
          .map((category) =>
            category.sub.map((category) => (
              <div className="" key={category.id}>
                <div className="text-center transition-all duration-300 ease-linear border border-gray-200">
                  <Link href={`/categories/[slug]`} as={`/categories/${category.slug}`}>
                    <a className=" w-full h-full group">
                      <Image
                        loading="lazy"
                        src={category.image}
                        alt={category.title}
                        width={120}
                        height={120}
                        quality={100}
                      />
                      <p className="mb-2 text-sm  hover:text-main-red">{category.title}</p>
                    </a>
                  </Link>
                </div>
              </div>
            ))
          )}
      </Slider>
    </div>
  )
}
