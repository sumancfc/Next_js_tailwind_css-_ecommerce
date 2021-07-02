import { useState } from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import Layout from "@/components/layout"
import { saveShippingAddress } from "redux/actions/cartActions"
import CheckoutSteps from "@/components/controls/CheckoutSteps"
import { Title } from "@/components/elements/title/Title"
import Address from "@/components/pages/address"

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
        router.push("/account/payment-method")
    }

    return (
        <Layout pageTitle="Shipping">
            <div className=" w-full relative">
                <div className="container my-10 w-full max-w-max md:max-w-4xl">
                    <div className="p-4 sm:p-8 bg-white shadow-md">
                        <CheckoutSteps step1 step2 />
                        <Title title="Shipping" />
                        <div>
                            <Address
                                address={address}
                                setAddress={setAddress}
                                city={city}
                                setCity={setCity}
                                postalCode={postalCode}
                                setPostalCode={setPostalCode}
                                country={country}
                                setCountry={setCountry}
                                submitHandler={submitHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
