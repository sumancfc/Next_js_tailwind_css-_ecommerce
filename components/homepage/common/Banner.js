import Link from "next/link"
import Image from "next/image"

export default function Banner({ banners }) {
    return (
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {banners.map((banner, i) => (
                <div key={i} className="col-span-1 overflow-hidden">
                    <div className="relative overflow-hidden w-full h-48">
                        <Link href={`${banner.url}`}>
                            <a className="image-hover ">
                                <Image
                                    src={`${banner.image}`}
                                    //  width={345}
                                    //  height={166}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </a>
                        </Link>
                        <div className="absolute top-4 left-4">
                            <h3 className="m-0 font-semibold text-2xl text-main-red">
                                {banner.title}
                            </h3>
                            <p className="">{banner.price}</p>
                            <Link href={`${banner.url}`}>Buy Now</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
