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
    const dispatch = useDispatch()
    const cartState = useSelector((state) => state.cartData)
    const wishlistState = useSelector((state) => state.wishlistData)

    const wishlistItem = wishlistState.filter((item) => item.id === product.id)[0]

    const [selectedProductColor, setSelectedProductColor] = useState(
        variation ? variation[0].color : ""
    )
    const [selectedProductSize, setSelectedProductSize] = useState(
        variation ? variation[0].size[0].name : ""
    )
    const [productStock, setProductStock] = useState(
        variation ? variation[0].size[0].quantity : quantity
    )
    const [quantityCount, setQuantityCount] = useState(1)
    const productCartQty = getProductCartQuantity(
        cartState,
        product,
        selectedProductColor,
        selectedProductSize
    )

    // const discountedPrice = getDiscountPrice(price, discount)

    // const finalProductPrice = +price.toFixed(2)

    // const finalDiscountPrice = +discountedPrice.toFixed(2)

    const onAddProductToCart = (product) => {
        dispatch(addToCart(product, quantityCount, selectedProductColor, selectedProductSize))
        toast.success("Product added to cart successfully")
    }

    const onAddProductToWishlist = (product) => {
        dispatch(addToWishlist(product))
        toast.success("Product added to wishlist successfully")
        console.log("added")
    }

    return (
        <div className="col-span-1 ml-5">
            <div className="space-y-4">
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

                {/* Product Price */}
                {/* {discountedPrice !== 0 ? (
                    <p className="text-black text-xl relative font-semibold">
                        Rs. {finalDiscountPrice}
                        <span className="ml-2 text-gray-600 line-through">
                            Rs. {finalProductPrice}
                        </span>
                    </p>
                ) : (
                    <p className="text-black text-xl relative font-semibold">
                        Rs. {finalProductPrice}
                    </p>
                )} */}
                <p className="text-black text-xl relative font-semibold">Rs. 5000</p>

                {/* Product Short Description */}
                {/* {shortDescription && <p className="text-base">{shortDescription}</p>} */}

                {/* Product Variation */}
                {/* {variation ? (
                    <div className="product-details-variation space-y-3">
                        <div className="flex items-center product-details-color">
                            <span>Color:</span>
                            <div className="ml-3 flex">
                                {variation.map((single, key) => {
                                    return (
                                        <label
                                            className="relative inline-block h-5 w-5 leading-5 mr-4 cursor-pointer transition-all duration-300 ease-linear rounded-3xl"
                                            key={key}
                                            style={{
                                                border: `1px solid ${single.color}`,
                                                backgroundColor: `${single.color}`,
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                value={single.color}
                                                name="product-color"
                                                className="absolute h-full cursor-pointer opacity-0"
                                                checked={
                                                    single.color === selectedProductColor
                                                        ? "checked"
                                                        : ""
                                                }
                                                onChange={() => {
                                                    setSelectedProductColor(single.color)
                                                    setSelectedProductSize(single.size[0].name)
                                                    setProductStock(single.size[0].quantity)
                                                    setQuantityCount(1)
                                                }}
                                            />
                                            <span className="relative inline-block w-6 h-6 m-0 text-sm font-medium checkmark"></span>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex items-center product-details-size">
                            <span>Size:</span>
                            <div className="ml-3 flex pro-details-size-content">
                                {variation &&
                                    variation.map((single) => {
                                        return single.color === selectedProductColor
                                            ? single.size.map((singleSize, key) => {
                                                  return (
                                                      <label
                                                          className="relative text-xs inline-block mr-1.5 uppercase text-black bg-gray-200 pro-details-size-content--single"
                                                          key={key}
                                                      >
                                                          <input
                                                              className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                                                              type="radio"
                                                              value={singleSize.name}
                                                              checked={
                                                                  singleSize.name ===
                                                                  selectedProductSize
                                                                      ? "checked"
                                                                      : ""
                                                              }
                                                              onChange={() => {
                                                                  setSelectedProductSize(
                                                                      singleSize.name
                                                                  )
                                                                  setProductStock(singleSize.stock)
                                                                  setQuantityCount(1)
                                                              }}
                                                          />
                                                          <span className="font-xs font-normal w-full mb-0 p-2 block size-name">
                                                              {singleSize.name}
                                                          </span>
                                                      </label>
                                                  )
                                              })
                                            : ""
                                    })}
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )} */}

                {/* Brand */}
                <div>
                    <Link href="/brands">
                        <a className="mr-1 text-main-blue">
                            Brand: <span className="text-black">{brand.title}</span>
                        </a>
                    </Link>
                </div>

                {isGenuine && (
                    <p className="flex">
                        Genuine:
                        <span className="ml-2">
                            <ThumbUpIcon className="h-5 text-main-blue" />
                        </span>
                    </p>
                )}

                {/* Add To Cart */}
                <div className="flex">
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
                </div>

                {/* Add to wishlist */}
                <div className="pro-details-wishlist">
                    <button
                        className={wishlistItem !== undefined ? "active" : "focus:outline-none"}
                        disabled={wishlistItem !== undefined}
                        title={wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist"}
                        onClick={() => onAddProductToWishlist(product)}
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
                                return (
                                    <li key={category.id}>
                                        <Link href={`/categories/${category.id}`}>
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
                                    <li key={tag.id}>
                                        <Link href={`/categories/${tag.id}`}>
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
