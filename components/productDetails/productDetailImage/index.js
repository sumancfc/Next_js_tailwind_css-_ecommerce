import ZoomImage from "@/components/elements/zoomImage"
import { BACKEND_URL } from "@/config/index"
import React, { useState } from "react"
import Slider from "react-slick"

function ProductDetailImage({ product }) {
    const smallSlider = {
        arrows: false,
    }

    const bigSlider = {
        arrows: false,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 4,
                    vertical: false,
                },
            },
        ],
    }

    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()

    // console.log(product.media)

    return (
        <div className="col-span-1">
            <div className="product-detail-image grid grid-cols-5 gap-6">
                <div className="small-image hidden sm:block overflow-hidden col-span-1">
                    <Slider asNavFor={nav1} ref={(c) => setNav2(c)} {...bigSlider}>
                        {product &&
                            product.media.map((img, i) => {
                                // console.log(`${BACKEND_URL}${product.media}`)
                                return (
                                    <div key={i} className="slider-item">
                                        {/* <img loading="lazy" src={img} alt={product.name} /> */}
                                        <img
                                            loading="lazy"
                                            src={`${BACKEND_URL}${img}`}
                                            alt={product.title}
                                        />
                                    </div>
                                )
                            })}
                    </Slider>
                </div>

                <div className="big-image col-span-5 sm:col-span-4">
                    <Slider asNavFor={nav2} ref={(c) => setNav1(c)} {...smallSlider}>
                        {product &&
                            product.media.map((img, i) => (
                                <div key={i} className="slider-item w-full h-full">
                                    {/* <ZoomImage src={img} alt={product.name} /> */}
                                    <ZoomImage src={`${BACKEND_URL}${img}`} alt={product.title} />
                                </div>
                            ))}
                    </Slider>
                </div>

                <div className="mobile-image col-span-5 sm:hidden ">
                    <Slider asNavFor={nav1} ref={(c) => setNav2(c)} {...bigSlider}>
                        {product &&
                            product.media.map((img, i) => (
                                <div key={i} className="slider-item">
                                    {/* <img loading="lazy" src={img} alt={product.name} /> */}
                                    <img
                                        loading="lazy"
                                        src={`${BACKEND_URL}${img}`}
                                        alt={product.title}
                                    />
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProductDetailImage)
