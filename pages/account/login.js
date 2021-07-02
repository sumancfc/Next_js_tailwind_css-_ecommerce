import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Layout from "@/components/layout"
import Logo from "@/components/elements/logo"
import { Title } from "@/components/elements/title/Title"
import Login from "@/components/pages/login"

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
                        <Title title="Login" />
                        <div className="mt-5">
                            <Login
                                phone={phone}
                                password={password}
                                loading={loading}
                                setPhone={setPhone}
                                setPassword={setPassword}
                                onSubmitHandler={onSubmitHandler}
                            />

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
