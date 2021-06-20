import Link from "next/link"
import Image from "next/image"
import { HeartIcon, StarIcon } from "@heroicons/react/outline"
import { BACKEND_URL } from "@/config/index"

export default function Product({ products }) {
    console.log(products)
    return (
        <>
            {products.map((product) => (
                <div className="col-span-1 shadow-xl" key={product.id}>
                    <div className="product-container">
                        <div className="product-image relative overflow-hidden transition duration-300 ease-in">
                            <Link
                                href={`/product-details/[id]`}
                                as={`/product-details/${product.id}`}
                            >
                                <a>
                                    <Image
                                        loading="lazy"
                                        src={
                                            product.media.length > 0
                                                ? `${BACKEND_URL}${product.media[0]}`
                                                : "/images/products/dummy.jpg"
                                        }
                                        width={300}
                                        height={300}
                                        layout="responsive"
                                        quality={90}
                                        objectFit="fill"
                                        alt={product.name}
                                    />
                                </a>
                            </Link>

                            <p className="absolute bg-main-red text-white text-sm font-normal uppercase top-5 left-2 px-3 py-1">
                                Sale
                            </p>
                            <Link href="/wishlist">
                                <a className="wishlist opacity-0 absolute p-2 rounded-full top-5 right-5 bg-main-text hover:bg-red-500 text-white text-sm transition duration-500 ease-in-out">
                                    <HeartIcon className="h-5" />
                                </a>
                            </Link>
                            <button className="quick-view opacity-0 absolute left-1/2 bottom-2 z-10 transform -translate-x-1/2 py-2 px-3 bg-main-text hover:bg-red-500 text-white font-light tracking-wider text-sm transition duration-500 ease-in-out rounded focus:outline-none">
                                Quick View
                            </button>
                        </div>
                        <div className="product-details py-2 px-3 text-left space-y-1.5">
                            <Link href="/shop">
                                <a className="m-0 block text-sm text-gray-700 overflow-hidden hover:text-main-red">
                                    {product.title}
                                </a>
                            </Link>
                            <div className="flex justify-start">
                                <StarIcon className="h-5 text-yellow-500" />
                                <StarIcon className="h-5 text-yellow-500" />
                                <StarIcon className="h-5 text-yellow-500" />
                                <StarIcon className="h-5 text-yellow-500" />
                                <StarIcon className="h-5 text-yellow-500" />
                            </div>
                            {/* <p className="text-black text-base relative">
                                Rs. {product.salePrice}{" "}
                                <span className="ml-2 text-gray-600 line-through">
                                    Rs. {product.price}
                                </span>
                            </p> */}
                            <p className="text-black text-base relative">Rs. 3500</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
