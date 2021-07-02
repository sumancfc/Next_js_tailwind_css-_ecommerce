import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Layout from "@/components/layout"
import Login from "@/components/pages/login"

export default function CheckoutPage() {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [showlogin, setShowlogin] = useState(false)
    const [showdiscount, setShowdiscount] = useState(false)

    const router = useRouter()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            console.table({ phone, password })
            // router.push("/")
            setPhone("+977")
            setPassword("")
        } catch (err) {
            setLoading(false)
        }
    }

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
                                            <Login
                                                phone={phone}
                                                password={password}
                                                loading={loading}
                                                setPhone={setPhone}
                                                setPassword={setPassword}
                                                onSubmitHandler={onSubmitHandler}
                                            />
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

                                                    <button className="btn-bhotahiti h-12 ml-2 leading-0">
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
