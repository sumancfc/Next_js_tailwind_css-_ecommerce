import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import PhoneInput from "react-phone-input-2"
import { CogIcon } from "@heroicons/react/outline"
import Layout from "@/components/layout"
import Logo from "@/components/elements/logo"
import "react-phone-input-2/lib/style.css"
import styles from "../../styles/react-input.module.css"

export default function LoginPage() {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            console.table({ phone, password })
            router.push("/")
            setPhone("+977")
            setPassword("")
        } catch (err) {
            setLoading(false)
        }
    }

    return (
        <Layout pageTitle="Login">
            <div className="container my-10 w-full max-w-max md:max-w-4xl">
                <div className="flex flex-col md:flex-row md:items-center p-8 bg-white shadow-md md:space-x-10">
                    <div className="order-2 md:order-1 flex-1 mt-5 md:mt-0">
                        <h1 className="text-lg md:text-4xl font-bold">Login</h1>
                        <div className="mt-5">
                            <form onSubmit={onSubmitHandler}>
                                <div className="">
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
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Your Password"
                                        required
                                    />

                                    <Link href="/account/forgot-password">
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
                                    </button>
                                </div>
                            </form>
                            <div className="mt-4">
                                <p>
                                    Don't have an account?
                                    <Link href="/account/register">
                                        <a className="ml-2 underline text-main-blue hover:text-main-red">
                                            Register
                                        </a>
                                    </Link>
                                </p>
                            </div>
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
