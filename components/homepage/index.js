import Image from "next/image"
import Link from "next/link"
import Category from "../elements/category"
import SectionLayout from "../layout/SectionLayout"
import CategorySlider from "./common/CategorySlider"
import Hero from "./common/Hero"
import Banner from "./common/Banner"
import FeaturedBanner from "./common/FeaturedBanner"
import CategoryLayout from "../layout/CategoryLayout"

const banners = [
    {
        image: "/images/banner/banner-4.png",
        title: "Watch",
        price: "Starting at Rs. 5000",
        url: "/categories/electronics-&-mobile",
    },
    {
        image: "/images/banner/banner-5.png",
        title: "Bags",
        price: "Starting at Rs. 5000",
        url: "/categories/luga-pasal",
    },
    {
        image: "/images/banner/banner-6.png",
        title: "Glasses",
        price: "Starting at Rs. 5000",
        url: "/categories/cosmetics",
    },
    {
        image: "/images/banner/banner-7.png",
        title: "Hats",
        price: "Starting at Rs. 5000",
        url: "/categories/luga-pasal",
    },
]

const features = [
    {
        image: "/images/banner/bike-car.jpg",
        title: "Gadi ko Parts",
        url: "https://gadikoparts.com",
    },
    {
        image: "/images/banner/nepal-handicraft.png",
        title: "Made In Nepal",

        url: "https://madeinnepal.com",
    },
    {
        image: "/images/banner/nepal-handicraft.png",
        title: "Genuine Products",
        url: "https://genuine.com",
    },
]

export default function HomePage({ categories, products, sliders }) {
    // console.log(sliders)
    return (
        <>
            <div className="pb-4 px-4">
                <div className="bg-white shadow-md">
                    <Hero sliders={sliders} />
                </div>
            </div>

            <SectionLayout title="Shop By Category" url="categories">
                <Category categories={categories} className="mt-5" />
            </SectionLayout>

            <CategoryLayout />

            <SectionLayout title="" url="">
                <Banner banners={banners} />
            </SectionLayout>

            <SectionLayout title="Kirana Pasal" url="categories/kirana-pasal">
                <CategorySlider categories={categories} categoryId="1" />
            </SectionLayout>

            <SectionLayout title="" url="">
                <FeaturedBanner banners={features} />
            </SectionLayout>

            <SectionLayout title="Office Items" url="categories/office-item">
                <CategorySlider categories={categories} categoryId="3" />
            </SectionLayout>

            {/* <SectionLayout title="Our Recommendation">
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div className="col-span-1" key={product.id}>
                            <div className="flex items-center bg-main-white rounded-md shadow-lg">
                                <Image
                                    loading="lazy"
                                    src={
                                        product.thumbnail
                                            ? product.thumbnail
                                            : "/images/products/earph.jpg"
                                    }
                                    alt={product.name}
                                    width={120}
                                    height={120}
                                    objectFit="contain"
                                />
                                <div className="flex flex-col px-5 font-medium">
                                    <Link
                                        href={`/product-details/[slug]`}
                                        as={`/product-details/${product.slug}`}
                                    >
                                        <a className="text-sm sm:text-base text-main-blue hover:text-main-red">
                                            {product.name}
                                        </a>
                                    </Link>
                                    <p className="text-sm">Rs. {product.salePrice}</p>

                                    <Link
                                        href={`/product-details/[slug]`}
                                        as={`/product-details/${product.slug}`}
                                    >
                                        <a className="text-main-red hover:text-main-blue cursor-pointer text-sm capitalize underline">
                                            Buy Now
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionLayout> */}
        </>
    )
}
