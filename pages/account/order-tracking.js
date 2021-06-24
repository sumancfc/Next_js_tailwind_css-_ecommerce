import { useState } from "react"
import Layout from "@/components/layout"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import styles from "../../styles/react-input.module.css"

export default function OrderTrackingPage() {
    const [orderId, setOrderId] = useState("")
    const [phone, setPhone] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        console.table({ orderId, phone })
    }

    return (
        <Layout pageTitle="Order Tracking">
            <div className=" w-full relative">
                <div className="container my-10 w-full max-w-max md:max-w-4xl">
                    <div className="p-4 sm:p-8 bg-white shadow-md">
                        <h1 className="text-xl sm:text-3xl font-bold text-center">
                            Order Tracking
                        </h1>
                        <p className="mt-3 text-main-text text-center">
                            To track your order please enter your Order ID in the box below and
                            press the "Track" button. This was given to you on your receipt and in
                            the confirmation email you should have received.
                        </p>
                        <div className="mt-5">
                            <form onSubmit={submitHandler}>
                                <div className="space-y-4">
                                    <div>
                                        <label className="font-semibold">Order Id</label>
                                        <input
                                            className="form-input mt-2"
                                            type="text"
                                            value={orderId}
                                            onChange={(e) => setOrderId(e.target.value)}
                                            placeholder="Found in your order confirmation email"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="font-semibold">Phone Number</label>
                                        <PhoneInput
                                            country={"np"}
                                            onlyCountries={["de", "np", "us", "au"]}
                                            value={phone}
                                            onChange={(phone) => setPhone(phone)}
                                            masks={{ np: "(...) ..-..-..." }}
                                            inputClass={styles.form_input}
                                            placeholder="+977-9860088834"
                                            containerClass={styles.form_container}
                                            buttonClass={styles.flag_dropdown}
                                            style={{ marginTop: "8px" }}
                                        />
                                    </div>

                                    <button className="mt-3 block py-3 px-4 bg-main-btn text-white rounded focus:outline-none hover:bg-main-blue">
                                        Track Your Order
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
