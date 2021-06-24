import Link from "next/link"
import Image from "next/image"

const subcategories = [
    {
        title: "Beauty Product",
        images: [
            "/images/subcategory/1.jpg",
            "/images/subcategory/2.jpg",
            "/images/subcategory/3.jpg",
            "/images/subcategory/4.jpg",
        ],
        url: "/beauty-products",
    },
    {
        title: "Cake and Breads",
        images: [
            "/images/subcategory/1.jpg",
            "/images/subcategory/2.jpg",
            "/images/subcategory/3.jpg",
            "/images/subcategory/4.jpg",
        ],
        url: "/cake-&-breads",
    },
    {
        title: "Chocolates",
        images: [
            "/images/subcategory/1.jpg",
            "/images/subcategory/2.jpg",
            "/images/subcategory/3.jpg",
            "/images/subcategory/4.jpg",
        ],
        url: "/beauty-products",
    },
    {
        title: "Tarkali",
        images: [
            "/images/subcategory/1.jpg",
            "/images/subcategory/2.jpg",
            "/images/subcategory/3.jpg",
            "/images/subcategory/4.jpg",
        ],
        url: "/beauty-products",
    },
]

export default function CategoryLayout() {
    return (
        <div div className="pb-4 px-4">
            <div className="bg-white shadow-md">
                <div className="container pb-6">
                    <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* Category start */}
                        {subcategories.map((subcategory, i) => (
                            <div className="col-span-1" key={i}>
                                <h2 className="text-xl capitalize font-semibold mb-3">
                                    {subcategory.title}
                                </h2>
                                <div className="grid grid-cols-2 gap-3 h-72">
                                    {subcategory.images.map((img, i) => (
                                        <Link href="/" key={i}>
                                            <a className="w-full h-full overflow-hidden relative">
                                                <Image src={img} layout="fill" objectFit="cover" />

                                                <p className="absolute bottom-0 px-3 py-1 rounded-tr-2xl text-xs text-white bg-main-blue">
                                                    {subcategory.title}
                                                </p>
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                                <Link href={subcategory.url}>
                                    <a className="block mt-3 text-sm text-main-blue">See More</a>
                                </Link>
                            </div>
                        ))}
                        {/* category end */}
                    </div>
                </div>
            </div>
        </div>
    )
}
