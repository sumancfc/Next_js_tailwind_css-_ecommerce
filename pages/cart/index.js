import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSelector, useDispatch } from "react-redux"
import { TrashIcon } from "@heroicons/react/outline"
import { BACKEND_URL } from "@/config/index"
import {
    addToCart,
    cartItemStock,
    decreaseQuantity,
    deleteAllFromCart,
    deleteFromCart,
} from "redux/actions/cartActions"
import { toast } from "react-toastify"
import Layout from "@/components/layout"

const CartPage = () => {
    const cartItems = useSelector((state) => state.cartData)
    const dispatch = useDispatch()

    const [quantityCount] = useState(1)

    const cartItemDec = (cartProduct) => {
        dispatch(decreaseQuantity(cartProduct))
        toast.success("Product Decrease From Cart")
    }

    const onAddProductToCart = (cartProduct, quantityCount) => {
        dispatch(addToCart(cartProduct, quantityCount))
        toast.success("Product Added In Cart")
    }

    const deleteCartItem = (cartProduct) => {
        dispatch(deleteFromCart(cartProduct))
        toast.success("Product Deleted From Cart")
    }

    const removeAllFromCart = () => {
        dispatch(deleteAllFromCart())
        toast.success("All Product Deleted From Cart")
    }

    return (
        <Layout pageTitle="Cart">
            {cartItems && cartItems.length >= 1 ? (
                <div className="bg-white">
                    <div className="container py-10">
                        <h1 className="font-medium">My Cart ({cartItems.length})</h1>

                        <div className="mt-3">
                            {/* <div className="w-full"> */}
                            <div className="w-full mx-auto">
                                {/* <div className="mt-2"> */}
                                {cartItems.map((cartItem, i) => {
                                    return (
                                        <div className="p-3 shadow rounded" key={i}>
                                            <div className="cart-class">
                                                <div className="hidden sm:block">
                                                    <Link
                                                        href={`/product-details/[id]`}
                                                        as={`/product-details/${cartItem.id}`}
                                                    >
                                                        <a>
                                                            <Image
                                                                src={
                                                                    cartItem.media.length > 0
                                                                        ? `${BACKEND_URL}${cartItem.media[0]}`
                                                                        : "/images/products/dummy.jpg"
                                                                }
                                                                alt={cartItem.title}
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
                                                        as={`/product-details/${cartItem.id}`}
                                                    >
                                                        <a>
                                                            <Image
                                                                src={
                                                                    cartItem.media.length > 0
                                                                        ? `${BACKEND_URL}${cartItem.media[0]}`
                                                                        : "/images/products/dummy.jpg"
                                                                }
                                                                alt={cartItem.title}
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
                                                        as={`/product-details/${cartItem.id}`}
                                                    >
                                                        {cartItem.title}
                                                    </Link>

                                                    <div className="sm:hidden block text-center space-y-2">
                                                        <p className="mt-1">Rs. 10000</p>

                                                        {/* <div className=""> */}
                                                        <div className="flex justify-center">
                                                            <div className="cart-plus-minus">
                                                                <button
                                                                    onClick={() =>
                                                                        cartItemDec(cartItem)
                                                                    }
                                                                    className="dec qtybutton"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    value={cartItem.quantity}
                                                                    readOnly
                                                                />
                                                                <button
                                                                    onClick={() =>
                                                                        onAddProductToCart(
                                                                            cartItem,
                                                                            quantityCount
                                                                        )
                                                                    }
                                                                    className="inc qtybutton"
                                                                    disabled={
                                                                        cartItem !== undefined &&
                                                                        cartItem.quantity &&
                                                                        cartItem.quantity >=
                                                                            cartItemStock(cartItem)
                                                                    }
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="focus:outline-none">
                                                            <TrashIcon
                                                                   className="h-5 hover:text-main-red"
                                                                onClick={() =>
                                                                    deleteCartItem(cartItem)
                                                                }
                                                            />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="w-1/2 hidden cart-details">
                                                    <p className="">Rs. 10000</p>

                                                    {/* <div className=""> */}
                                                    <div className="flex">
                                                        <div className="cart-plus-minus">
                                                            <button
                                                                onClick={() =>
                                                                    cartItemDec(cartItem)
                                                                }
                                                                className="dec qtybutton"
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                type="text"
                                                                value={cartItem.quantity}
                                                                readOnly
                                                            />
                                                            <button
                                                                onClick={() =>
                                                                    onAddProductToCart(
                                                                        cartItem,
                                                                        quantityCount
                                                                    )
                                                                }
                                                                className="inc qtybutton"
                                                                disabled={
                                                                    cartItem !== undefined &&
                                                                    cartItem.quantity &&
                                                                    cartItem.quantity >=
                                                                        cartItemStock(cartItem)
                                                                }
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* </div> */}
                                                    <p className="">Rs. 5000</p>

                                                    <button className="focus:outline-none">
                                                        <TrashIcon
                                                         className="h-5 hover:text-main-red"
                                                            onClick={() => deleteCartItem(cartItem)}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* </div> */}
                            </div>
                            {/* </div> */}
                        </div>

                        <div className="mt-5 flex justify-between text-center">
                        <Link  href="/shop">
                    <a className="p-3 bg-main-btn text-white text-xs sm:text-sm font-medium tracking-wide focus:outline-none mr-2">
                        Continue Shopping
                    </a>
                    </Link>
                            <button onClick={() => removeAllFromCart()} className="p-3 bg-main-btn text-white text-xs sm:text-sm font-medium tracking-wide focus:outline-non">Remove All</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white">
                    <div className="container max-w-sm py-10 text-center">
                        <img
                            loading="lazy"
                            src="/images/icons/cart.png"
                            alt="Cart Image"
                            className="w-1/2 object-cover mx-auto"
                        />
                        <h1 className="mt-4">No items found in Cart.</h1>
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

export default CartPage
