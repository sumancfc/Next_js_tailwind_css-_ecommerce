import Link from "next/link"
import Image from "next/image"

export default function FeaturedBanner({ banners }) {
    return (
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {banners.map((banner, i) => (
                <div key={i} className="col-span-1">
                    <div className="relative overflow-hidden w-full h-60">
                        <Link href={`${banner.url}`}>
                            <a className="image-hover" target="_blank">
                                <Image src={`${banner.image}`} layout="fill" objectFit="cover" />
                            </a>
                        </Link>
                        <div className="absolute bottom-0 left-0 bg-main-blue text-white py-2 px-3 rounded-tr-2xl">
                            <Link href={`${banner.url}`}>
                                <a className="m-0 font-medium text-sm sm:text-base" target="_blank">
                                    {banner.title}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
