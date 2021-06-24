import Layout from "@/components/layout"
import { useState } from "react"
import Link from "next/link"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import styles from "../../styles/react-input.module.css"

export default function CheckoutPage() {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [showlogin, setShowlogin] = useState(false)
    const [showdiscount, setShowdiscount] = useState(false)

    return (
        <Layout pageTitle="Checkout Page">
            <div className="bg-white">
                <div className="container py-10 mx-10">
                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-2">
                            <div>
                                <div>
                                    <p className="text-sm">
                                        Returning Customer?
                                        <span
                                            onClick={() => setShowlogin(!showlogin)}
                                            className="p-2 ml-2 bg-main-red text-white cursor-pointer show-login"
                                        >
                                            Click here to login
                                        </span>
                                    </p>

                                    {showlogin && (
                                        <div className="mt-5 transition-all duration-300 ease-in-out">
                                            <form>
                                                <div>
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
                                                    />

                                                    <input
                                                        className="form-input mt-5"
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) =>
                                                            setPassword(e.target.value)
                                                        }
                                                        placeholder="Enter Your Password"
                                                        required
                                                    />

                                                    <Link href="/account/forgot-password">
                                                        <a className="mt-2 block text-right text-sm hover:text-main-red">
                                                            Forgot Password?
                                                        </a>
                                                    </Link>
                                                    <button className="mt-3 block py-3 px-4 bg-main-btn text-white rounded focus:outline-none hover:bg-main-blue">
                                                        {loading ? (
                                                            <p className="animate-spin">
                                                                <CogIcon className="h-5" />
                                                            </p>
                                                        ) : (
                                                            <p>Login</p>
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-5">
                                    Have a coupon code?
                                    <span
                                        onClick={() => setShowdiscount(!showdiscount)}
                                        className="p-2 ml-2 bg-main-btn text-white text-sm cursor-pointer"
                                    >
                                        Click here to enter your code
                                    </span>
                                    {showdiscount && (
                                        <div className="mt-5 transition-all duration-300 ease-in-out border border-dashed border-main-blue p-4">
                                            <p className="text-sm mb-2">
                                                If you have a coupon code, please apply it below.
                                            </p>
                                            <form>
                                                <div className="flex items-center">
                                                    <input
                                                        className="form-input"
                                                        type="text"
                                                        placeholder="Enter Coupon Code"
                                                        required
                                                    />

                                                    <button className="block h-12 ml-3 px-4 bg-main-btn text-white rounded focus:outline-none hover:bg-main-blue">
                                                        {loading ? (
                                                            <p className="animate-spin">
                                                                <CogIcon className="h-5" />
                                                            </p>
                                                        ) : (
                                                            <p>Apply</p>
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>
                                <h2 className="text-2xl font-semibold mt-5">Billing Address</h2>
                                <div>
                                    <form>
                                        <div>
                                            <input
                                                className="form-input mt-5"
                                                type="text"
                                                value="Suman Shrestha"
                                                //  onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter Your Name"
                                                required
                                            />

                                            <input
                                                className="form-input mt-5"
                                                type="text"
                                                value="+977-9860088834"
                                                //  onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter Your Phone"
                                                required
                                            />

                                            <input
                                                className="form-input mt-5"
                                                type="text"
                                                value="Kupandole, Lalitpur"
                                                //  onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter Your Address"
                                                required
                                            />

                                            {/* <Link href="/account/forgot-password">
                                    <a className="mt-2 block text-right hover:text-main-red">
                                        Forgot Password?
                                    </a>
                                </Link>
                                <button className="mt-3 block py-3 px-4 bg-main-btn text-white rounded focus:outline-none hover:bg-main-blue">
                                    {loading ? (
                                        <p className="animate-spin">
                                            <CogIcon className="h-5" />
                                        </p>
                                    ) : (
                                        <p>Login</p>
                                    )}
                                </button> */}
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-span-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
