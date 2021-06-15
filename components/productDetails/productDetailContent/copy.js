import { useState } from "react"
import Link from "next/link"
import { connect } from "react-redux"
import { toast } from "react-toastify"
import { StarIcon } from "@heroicons/react/outline"
import { capitalizeFirstLetter, getDiscountPrice, getProductCartQuantity } from "@/common/utils"
import { addToCart } from "../../../redux/actions/cartActions"

function ProductDetailContent({ product, cartItems }) {
    const { name, price, shortDescription, discount, category, tag, variation, stock, minOrder } =
        product

    const [selectedProductColor, setSelectedProductColor] = useState(
        variation ? variation[0].color : ""
    )
    const [selectedProductSize, setSelectedProductSize] = useState(
        variation ? variation[0].size[0].name : ""
    )
    const [productStock, setProductStock] = useState(variation ? variation[0].size[0].stock : stock)
    const [quantityCount, setQuantityCount] = useState(1)
    // const productCartQty = getProductCartQuantity(
    //     cartItems,
    //     product,
    //     selectedProductColor,
    //     selectedProductSize
    // )

    console.log(getProductCartQuantity())

    const discountedPrice = getDiscountPrice(price, discount)

    const finalProductPrice = +price.toFixed(2)

    const finalDiscountPrice = +discountedPrice.toFixed(2)

    const addedToCart = () => {
        toast.success("Added To Cart")
        console.log(quantityCount)
    }

    return (
        <div className="col-span-1 ml-5">
            <div className="space-y-4">
                {/* Product Title */}
                <h1 className="text-2xl font-medium">{capitalizeFirstLetter(name)}</h1>
                {/* Product Rating */}
                <div className="flex justify-start">
                    <StarIcon className="h-5 text-yellow-500" />
                    <StarIcon className="h-5 text-yellow-500" />{" "}
                    <StarIcon className="h-5 text-yellow-500" />{" "}
                    <StarIcon className="h-5 text-yellow-500" />{" "}
                    <StarIcon className="h-5 text-yellow-500" />
                </div>

                {/* Product Price */}
                {discountedPrice !== 0 ? (
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
                )}

                {/* Product Short Description */}
                {shortDescription && <p className="text-base">{shortDescription}</p>}

                {/* Product Variation */}
                {variation ? (
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
                                                    setProductStock(single.size[0].stock)
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
                                // onClick={() =>
                                //     addToCart(
                                //         product,
                                //         toast,
                                //         quantityCount,
                                //         selectedProductColor,
                                //         selectedProductSize
                                //     )
                                // }
                                onClick={addedToCart}
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

                {/* Product Category */}
                {category ? (
                    <div className="flex">
                        <span className="text-base">Categories:</span>
                        <ul className="flex ml-2">
                            {category.map((single, i) => {
                                return (
                                    <li key={i}>
                                        <Link href={`/categories/${single}`}>
                                            <a className="mr-1">{single}</a>
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
                {tag ? (
                    <div className="flex">
                        <span>Tags :</span>
                        <ul className="flex ml-1 flex-wrap">
                            {tag.map((single, i) => {
                                return (
                                    <li key={i}>
                                        <Link href={`/categories/${single}`}>
                                            <a className="mr-1">{single}</a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item, toast, quantityCount, selectedProductColor, selectedProductSize) => {
            dispatch(
                addToCart(item, toast, quantityCount, selectedProductColor, selectedProductSize)
            )
        },
    }
}

export default connect(null, mapDispatchToProps)(ProductDetailContent)
