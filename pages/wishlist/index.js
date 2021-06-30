import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import Image from "next/image"
import { HeartIcon, TrashIcon } from "@heroicons/react/outline"
import { toast } from "react-toastify"
import Layout from "@/components/layout"
import { deleteAllFromWishlist } from "redux/actions/wishlistActions"
import { PRODUCT_API_URL } from "@/config/index"

export default function WishlistPage() {
    const wishlistItems = useSelector((state) => state.wishlistData)
    const dispatch = useDispatch()

    const removeAllFromWishlist = () => {
        dispatch(deleteAllFromWishlist())
        toast.success("Remove All Product From Wishlist")
    }

    return (
        <Layout pageTitle="Wishlist">
            {wishlistItems && wishlistItems.length >= 1 ? (
                <div className="bg-white">
                    <div className="container py-10">
                        <h1 className="font-medium">
                            Your Wishlist Items ({wishlistItems.length})
                        </h1>

                        <div className="mt-3">
                            <div className="w-full mx-auto">
                                {wishlistItems.map((wishlistItem, i) => {
                                    return (
                                        <div className="p-3 shadow rounded" key={i}>
                                            <div className="cart-class">
                                                <div className="hidden sm:block">
                                                    <Link
                                                        href={`/product-details/[id]`}
                                                        as={`/product-details/${wishlistItem.id}`}
                                                    >
                                                        <a>
                                                            <Image
                                                                src={
                                                                    wishlistItem.media.length > 0
                                                                        ? `${PRODUCT_API_URL}${wishlistItem.media[0]}`
                                                                        : "/images/products/dummy.jpg"
                                                                }
                                                                alt={wishlistItem.title}
                                                                width={100}
                                                                height={100}
                                                                objectFit="cover"
                                                                // layout="responsive"
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>

                                                <div className="block sm:hidden">
                                                    <Link
                                                        href={`/product-details/[id]`}
                                                        as={`/product-details/${wishlistItem.id}`}
                                                    >
                                                        <a>
                                                            <Image
                                                                src={
                                                                    wishlistItem.media.length > 0
                                                                        ? `${PRODUCT_API_URL}${wishlistItem.media[0]}`
                                                                        : "/images/products/dummy.jpg"
                                                                }
                                                                alt={wishlistItem.title}
                                                                width={125}
                                                                height={125}
                                                                objectFit="cover"
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>

                                                <div className="cart-title text-center">
                                                    <Link
                                                        href={`/product-details/[id]`}
                                                        as={`/product-details/${wishlistItem.id}`}
                                                    >
                                                        {wishlistItem.title}
                                                    </Link>

                                                    <div className="sm:hidden block text-center space-y-2">
                                                        <p className="mt-1">Rs. 10000</p>

                                                        <Link
                                                            href={`/product-details/[id]`}
                                                            as={`/product-details/${wishlistItem.id}`}
                                                        >
                                                            <a className="block">Add To Cart</a>
                                                        </Link>

                                                        <button className="focus:outline-none">
                                                            <TrashIcon
                                                                className="h-5 hover:text-main-red"
                                                                onClick={() =>
                                                                    deletewishlistItem(wishlistItem)
                                                                }
                                                            />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="w-1/2 hidden cart-details">
                                                    <p className="">Rs. 10000</p>

                                                    <Link
                                                        href={`/product-details/[id]`}
                                                        as={`/product-details/${wishlistItem.id}`}
                                                    >
                                                        <a>Add To Cart</a>
                                                    </Link>

                                                    <button className="focus:outline-none">
                                                        <TrashIcon
                                                            className="h-5 hover:text-main-red"
                                                            onClick={() =>
                                                                deletewishlistItem(wishlistItem)
                                                            }
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="mt-5 flex justify-between text-center">
                            {/* <div className="mt-5 flex flex-col sm:flex-row justify-start sm:justify-between text-center space-y-2 sm:space-y-0"> */}
                            <Link href="/shop">
                                <a className="p-3 bg-main-btn text-white text-xs sm:text-sm font-medium tracking-wide focus:outline-none mr-2">
                                    Continue Shopping
                                </a>
                            </Link>
                            <button
                                onClick={() => removeAllFromWishlist()}
                                className="p-3 bg-main-btn text-white text-xs sm:text-sm font-medium tracking-wide focus:outline-none"
                            >
                                Clear Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white">
                    <div className="container max-w-sm py-10 text-center">
                        <HeartIcon className="h-24 mx-auto text-main-blue" />
                        <h1 className="mt-4">No items found in Wishlist.</h1>
                        <Link href="/shop">
                            <a className="mt-4 bg-main-blue py-3 block w-1/2 mx-auto text-white text-sm tracking-wide uppercase rounded-sm">
                                Shop Now
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </Layout>
    )
}
