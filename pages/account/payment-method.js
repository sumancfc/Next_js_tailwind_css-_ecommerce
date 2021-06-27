import { useState } from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import Layout from "@/components/layout"
import { savePaymentMethod } from "redux/actions/cartActions"
import CheckoutSteps from "@/components/controls/CheckoutSteps"

export default function PaymentMethodPage() {
    const cart = useSelector((state) => state.cartData)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const router = useRouter()

    const [paymentMethod, setPaymentMethod] = useState("COD")

    if (!shippingAddress) {
        router.push("/account/shipping")
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        console.log(paymentMethod)
        // router.push("/account/place-order")
    }

    return (
        <Layout pageTitle="Shipping">
            <div className=" w-full relative">
                <div className="container my-10 w-full max-w-max md:max-w-4xl">
                    <div className="p-4 sm:p-8 bg-white shadow-md">
                        <CheckoutSteps step1 step2 step3 />
                        <h1 className="text-xl sm:text-3xl font-bold">Payment Method</h1>
                        <div className="mt-5">
                            <form onSubmit={submitHandler}>
                                <div className="space-y-4 flex flex-col">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            id="COD"
                                            name="paymentMethod"
                                            value="COD"
                                            checked={paymentMethod === "COD"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <span className="ml-4">Cash On Delivery</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            id="VisaCard"
                                            name="paymentMethod"
                                            value="VisaCard"
                                            checked={paymentMethod === "VisaCard"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <span className="ml-4">Visa Card</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            id="Esewa"
                                            name="paymentMethod"
                                            value="Esewa"
                                            checked={paymentMethod === "Esewa"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <span className="ml-4">Esewa</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            id="Ime"
                                            name="paymentMethod"
                                            value="Ime"
                                            checked={paymentMethod === "Ime"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <span className="ml-4">IME</span>
                                    </label>
                                </div>
                                <button className="mt-3 block py-3 px-4 bg-main-btn text-white rounded focus:outline-none hover:bg-main-blue">
                                    Continue Payment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
