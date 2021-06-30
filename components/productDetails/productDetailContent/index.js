import React, { useState } from "react"
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { HeartIcon, ThumbUpIcon } from "@heroicons/react/outline"
import { capitalizeFirstLetter, getDiscountPrice, getProductCartQuantity } from "@/common/utils"
import { addToCart } from "redux/actions/cartActions"
import { addToWishlist } from "redux/actions/wishlistActions"
import ProductRating from "@/components/elements/rating"

function ProductDetailContentCopy({ product }) {
    const {
        title,
        quantity,
        minOrder,
        brand,
        categories,
        tags,
        isGenuine,
        variation,
        isOrderSampleOpt,
    } = product
    // const dispatch = useDispatch()
    // const cartState = useSelector((state) => state.cartData)
    // const wishlistState = useSelector((state) => state.wishlistData)

    // const wishlistItem = wishlistState.filter((item) => item.id === product.id)[0]

    // const [selectedProductColor, setSelectedProductColor] = useState(
    //     variation ? variation[0].color : ""
    // )
    // const [selectedProductSize, setSelectedProductSize] = useState(
    //     variation ? variation[0].size[0].name : ""
    // )
    // const [productStock, setProductStock] = useState(
    //     variation ? variation[0].size[0].quantity : quantity
    // )
    // const [quantityCount, setQuantityCount] = useState(1)
    // const productCartQty = getProductCartQuantity(
    //     cartState,
    //     product,
    //     selectedProductColor,
    //     selectedProductSize
    // )

    // const discountedPrice = getDiscountPrice(price, discount)

    // const finalProductPrice = +price.toFixed(2)

    // const finalDiscountPrice = +discountedPrice.toFixed(2)

    // const onAddProductToCart = (product) => {
    //     dispatch(addToCart(product, quantityCount, selectedProductColor, selectedProductSize))
    //     toast.success("Product added to cart successfully")
    // }

    // const onAddProductToWishlist = (product) => {
    //     dispatch(addToWishlist(product))
    //     toast.success("Product added to wishlist successfully")
    //     console.log("added")
    // }

    // console.log(product)

    return (
        <div className="col-span-1 ml-5">
            <div className="space-y-2">
                {/* Product Title */}
                <h1 className="text-2xl font-medium">{capitalizeFirstLetter(title)}</h1>
                {/* Product Rating */}
                {/* {reviews && reviews > 0 ? (
                    <div className="">
                        <ProductRating value={reviews} text={`${reviewCount} ratings`} />
                    </div>
                ) : (
                    <p>No Review Yet</p>
                )} */}
                <p>No Review Yet</p>
                {/* Brand */}
                <div>
                    <Link href="/brands">
                        <a className="mr-1 text-main-blue">
                            Brand: <span className="text-black">{brand.title}</span>
                        </a>
                    </Link>
                </div>
                {/* Is Genuine and Local */}
                {isGenuine && (
                    <p className="flex">
                        Genuine:
                        <span className="ml-2">
                            <ThumbUpIcon className="h-5 text-main-blue" />
                        </span>
                    </p>
                )}
                {/* Product Variation */}
                {variation ? (
                    <div className="">
                        <div className="space-y-4">
                            {variation.levelName.map((single, i) => {
                                const level = variation.levelName.filter(
                                    (s) => s.id === single.id
                                )[0]

                                const checkId = level.values.map((cId) => cId.title)

                                // console.log("values id checked", checkId)
                                const title = level.title

                                return (
                                    <div className="flex flex-col" key={i}>
                                        <div className="flex items-center">
                                            <p>{level.title}:</p>
                                            {/* <p>{checkId}</p> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="">
                            {variation.combination.map((combine, i) => {
                                // console.log("this is combine", combine)
                                const comb = variation.combination.filter(
                                    (s) => s._id === combine._id
                                )[0]

                                // console.log("Combine", comb)
                                // const checkLevel = comb.conf.filter(
                                //     (chId) => chId._id === checkId
                                // )[0]

                                const values = Object.values(combine.conf)
                                const keys = Object.keys(combine.conf)

                                // console.log(values)
                                // const value = Object.values(values)
                                // console.log(value)
                                const price = combine.price.filter((pri) => pri.price.NRS)
                                console.log("this is price", price.NRS)

                                return (
                                    <div>
                                        {/* {keys} */}
                                        {values.map((value) => {
                                            // console.log(value.title)
                                            return <div>{value.title}</div>
                                        })}
                                        {combine.price.map((pri, i) => {
                                            return <div>{pri.price.NRS}</div>
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {variation ? (
                    <div className="space-y-4">
                        <div className="space-y-4">
                            {variation.levelName.map((single, i) => {
                                return (
                                    <div className="flex flex-col" key={i}>
                                        <div className="flex items-center">
                                            <p>{single.title}:</p>
                                            <div className="ml-3 ">
                                                {single.values.map((l1, key) => {
                                                    return (
                                                        <label
                                                            className="relative text-xs inline-block mr-1.5 uppercase text-black bg-gray-200 pro-details-size-content--single"
                                                            key={key}
                                                        >
                                                            <input
                                                                className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                                                                type="radio"
                                                                value={l1.title}
                                                                // checked={
                                                                //     singleSize.name ===
                                                                //     selectedProductSize
                                                                //         ? "checked"
                                                                //         : ""
                                                                // }
                                                                // onChange={() => {
                                                                //     setSelectedProductSize(
                                                                //         singleSize.name
                                                                //     )
                                                                //     setProductStock(
                                                                //         singleSize.stock
                                                                //     )
                                                                //     setQuantityCount(1)
                                                                // }}
                                                            />
                                                            <span className="font-xs font-normal w-full mb-0 p-2 block size-name">
                                                                {l1.title}
                                                            </span>
                                                        </label>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {/* minimum order qunantity */}
                <p>
                    Minimun qunantity Order: <span>{minOrder}</span>
                </p>
                {/* Add To Cart */}
                <p>Here is add to cart</p>
                {/* <div className="flex">
                    <div className="cart-plus-minus">
                        <button
                            onClick={() =>
                                setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                            }
                            className="dec qtybutton"
                        >
                            -
                        </button>
                        <input
                            className="cart-plus-minus-box"
                            type="text"
                            value={quantityCount}
                            readOnly
                        />
                        <button
                            onClick={() =>
                                setQuantityCount(
                                    quantityCount < productStock - productCartQty
                                        ? quantityCount + 1
                                        : quantityCount
                                )
                            }
                            className="inc qtybutton"
                        >
                            +
                        </button>
                    </div>
                    <div className="pro-details-cart btn-hover">
                        {productStock && productStock > 0 ? (
                            <button
                                className="btn-bhotahiti focus:outline-none"
                                onClick={() => onAddProductToCart(product)}
                                disabled={
                                    productCartQty >= productStock || quantityCount <= minOrder
                                }
                            >
                                Add To Cart
                            </button>
                        ) : (
                            <button disabled>Out of Stock</button>
                        )}
                    </div>
                </div> */}
                {/* Add to wishlist */}
                <div className="pro-details-wishlist">
                    <button
                    // className={wishlistItem !== undefined ? "active" : "focus:outline-none"}
                    // disabled={wishlistItem !== undefined}
                    // title={wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist"}
                    // onClick={() => onAddProductToWishlist(product)}
                    >
                        Add To Wishlist
                    </button>
                </div>
                {/* Product Category */}
                {categories ? (
                    <div className="flex">
                        <span className="text-base">Categories:</span>
                        <ul className="flex ml-2">
                            {categories.map((category) => {
                                // console.log(category)
                                return (
                                    <li key={category._id}>
                                        <Link href={`/categories/${category._id}`}>
                                            <a className="mr-1">{category.title}</a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ) : (
                    ""
                )}
                {/* Product Tag */}
                {tags ? (
                    <div className="flex">
                        <span>Tags :</span>
                        <ul className="flex ml-1 flex-wrap">
                            {tags.map((tag) => {
                                return (
                                    <li key={tag._id}>
                                        <Link href={`/categories/${tag._id}`}>
                                            <a className="mr-1">{tag.title}</a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ) : (
                    ""
                )}
                <div>
                    {isOrderSampleOpt && (
                        <p>
                            Order Your Sample:{" "}
                            <a href="/" className="underline text-main-red">
                                Order Sample
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProductDetailContentCopy)
