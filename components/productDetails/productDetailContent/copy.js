import React, { useEffect, useState } from "react"
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

    const [conf, setConf] = useState({})

    console.log("This is variation combibation", variation)

    useEffect(() => {
        let comb = {} //will change

        const { combination } = variation
        combination.map((product) => {
            const keys = Object.keys(product.conf) // ["COLOR", "RAM", "ROM"]
            keys.forEach((key) => {
                if (!comb[key]) comb[key] = []

                comb[key].push({ ...product.conf[key], isAvailable: true })
            })
        })
        setConf(comb)
        console.log({ comb })
    }, [variation])

    /*
    another function to handle check available combination
    */

    const handleCombinationhange = (key, value) => {
        let comb = {}
        const { combination } = variation
        combination.map((product) => {
            if (product.conf[key].title === value) {
                Object.keys(product.conf).map((k) => {
                    if (!comb[k]) comb[k] = []
                    comb[k].push({ ...product.conf[k], isAvailable: true })
                })
            } else {
                Object.keys(product.conf).map((k) => {
                    if (!comb[k]) comb[k] = []
                    comb[k].push({ ...product.conf[k], isAvailable: false })
                })
            }
        })

        console.log("new", { comb })

        setConf(comb)
    }

    const confKeys = Object.keys(conf)

    return (
        <div className="col-span-1 ml-5">
            <div className="space-y-2">
                {/* Product Title */}
                <h1 className="text-2xl font-medium">{capitalizeFirstLetter(title)}</h1>
                {/* Product Rating */}

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
                <ul>
                    {confKeys && confKeys.length
                        ? confKeys.map((key) => {
                              return (
                                  <li>
                                      <label>{key}</label>{" "}
                                      {conf[key].map((c) => (
                                          <button
                                              disabled={c.isAvailable ? "none" : "disabled"}
                                              onClick={() => handleCombinationhange(key, c.title)}
                                          >
                                              {c.title}
                                          </button>
                                      ))}{" "}
                                  </li>
                              )
                          })
                        : null}
                </ul>
                {variation ? (
                    <div className="flex">
                        <div className="space-y-4">
                            {variation.levelName.map((single, i) => {
                                const level = variation.levelName.filter(
                                    (s) => s.id === single.id
                                )[0]

                                const checkId = level.values.map((cId) => cId.id)

                                // console.log("values id checked", checkId)
                                const id = level.id
                                const title = level.title
                                // console.log("this is id", id)
                                return (
                                    <div className="flex flex-col" key={i}>
                                        <div className="flex items-center">
                                            <p>{level.title}:</p>
                                            {/* <p>{checkId}</p> */}

                                            <div className="flex">
                                                {variation.combination.map((combine, i) => {
                                                    // console.log("this is combine", combine)
                                                    const comb = variation.combination.filter(
                                                        (s) => s._id === combine._id
                                                    )[0]

                                                    const values = Object.values(combine.conf)
                                                    const keys = Object.keys(combine.conf)

                                                    // const list = keys.map((key) => key.id)
                                                    // const key = keys.filter(
                                                    //     (item, index) =>
                                                    //         keys.indexOf(item) === index
                                                    // )

                                                    // console.log("This is keys", key)
                                                    // const value = Object.values(values)
                                                    // console.log(value)

                                                    return (
                                                        <div>
                                                            {values.map((val, i) => {
                                                                const key = keys.filter(
                                                                    (item, index) =>
                                                                        keys.indexOf(item) === index
                                                                )
                                                                const value = val.title

                                                                // const value = values.filter(
                                                                //     (item, index) =>
                                                                //         keys.indexOf(item) === index
                                                                // )[0]
                                                                // console.log("This is key", key)
                                                                // value.findIndex(Color)
                                                                return (
                                                                    <div className="" key={i}>
                                                                        {id === key && (
                                                                            <div>{value}</div>
                                                                        )}
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* <div className="flex">
                            {variation.combination.map((combine, i) => {
                                console.log("this is combine", combine)
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
                                        {keys}
                                        {values.map((value, i) => {
                                            console.log(value)
                                            // value.findIndex(Color)
                                            return (
                                                <div className="" key={i}>
                                                    {value.title}
                                                </div>
                                            )
                                        })}
                                        {combine.map((com, i) => {
                                            return <div key={i}>{com.title}</div>
                                        })} 
                                         {combine.price.map((pri, i) => {
                                            return <div>{pri.price.NRS}</div>
                                        })}
                                    </div>
                                )
                            })}
                        </div> */}
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
