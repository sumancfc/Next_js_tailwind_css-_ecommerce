import Image from "next/image"
import Link from "next/link"

export default function Logo({ image, width, height, layout, alt }) {
    return (
        <Link href="/">
            <a>
                <Image
                    loading="lazy"
                    src={image}
                    width={width}
                    height={height}
                    layout={layout}
                    alt={alt}
                    quality={100}
                />
            </a>
        </Link>
    )
}

Logo.defaultProps = {
    image: "/images/logo/Bhotahiti.png",
    width: "201",
    height: "48",
    layout: "fixed",
    alt: "Bhotahiti Logo",
}
