import Link from "next/link"
import Layout from "@/components/layout"
import Logo from "@/components/elements/logo"
import {Title} from "@/components/elements/title/Title"

export default function FormOtp({ name, phone, code, handleChange, verifyCode }) {
    console.log("This is step 2")
    return (
        <Layout pageTitle="Register">
            <div className="container my-10 w-full max-w-max md:max-w-4xl">
                <div className="flex flex-col md:flex-row md:items-center p-8 bg-white shadow-md md:space-x-10">
                    <div className="order-2 md:order-1 flex-1 mt-5 md:mt-0">
                        <Title title="register" />
                        <div className="mt-5">
                            <form onSubmit={verifyCode}>
                                <div className="space-y-6">
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="name"
                                        value={name}
                                        readOnly
                                        required
                                    />

                                    <input
                                        className="form-input"
                                        type="number"
                                        name="phone"
                                        value={phone}
                                        readOnly
                                        required
                                    />

                                    <input
                                        className="form-input"
                                        type="number"
                                        name="code"
                                        value={code}
                                        onChange={handleChange("code")}
                                        placeholder="Enter OTP"
                                        required
                                    />
                                    <button className="btn-bhotahiti">Verify Otp</button>
                                </div>
                            </form>
                            {/* <div className="mt-4">
                                <p>
                                    Already have an account?
                                    <Link href="/account/login">
                                        <a className="ml-2 underline text-main-blue hover:text-main-red">
                                            Login
                                        </a>
                                    </Link>
                                </p>
                            </div> */}
                        </div>
                    </div>
                    <div className="md:order-2">
                        <Logo />
                        <span className="block bg-main-red p-2 text-white uppercase rounded">
                            online wholesale bazar
                        </span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
