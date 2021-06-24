import { useState } from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import Layout from "@/components/layout"
import { saveShippingAddress } from "redux/actions/cartActions"
import CheckoutSteps from "@/components/controls/CheckoutSteps"

export default function ShippingPage() {
    const cart = useSelector((state) => state.cartData)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()
    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        console.table({ address, city, postalCode, country })
        router.push("/account/payment")
    }

    return (
        <Layout pageTitle="Shipping">
            <div className=" w-full relative">
                <div className="container my-10 w-full max-w-max md:max-w-4xl">
                    <div className="p-4 sm:p-8 bg-white shadow-md">
                        <CheckoutSteps step1 step2 />
                        <h1 className="text-xl sm:text-3xl font-bold">Shipping Address</h1>
                        <div>
                            <form onSubmit={submitHandler}>
                                <div className="space-y-4">
                                    <input
                                        className="form-input mt-5"
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Enter Your Address"
                                        required
                                    />
                                    <input
                                        className="form-input mt-5"
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder="Enter Your City"
                                        required
                                    />
                                    <input
                                        className="form-input mt-5"
                                        type="text"
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        placeholder="Enter Postal Code"
                                        required
                                    />
                                    <input
                                        className="form-input mt-5"
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        placeholder="Enter Your Country"
                                        required
                                    />

                                    <button className="mt-3 block py-3 px-4 bg-main-btn text-white rounded focus:outline-none hover:bg-main-blue">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
