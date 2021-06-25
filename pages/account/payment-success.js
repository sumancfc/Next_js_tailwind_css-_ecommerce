import { useEffect } from "react"
import { useRouter } from "next/router"
import { BadgeCheckIcon } from "@heroicons/react/solid"
import Layout from "@/components/layout"

export default function PaymentSuccessPage() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 5000)
    }, [])

    return (
        <Layout pageTitle="Payment Success">
            <div className=" w-full relative">
                <div className="container my-10 w-full max-w-max md:max-w-4xl">
                    <div className="p-4 sm:p-8 bg-white shadow-md">
                        <div className="text-center text-main-text space-y-3">
                            <BadgeCheckIcon className="h-12 mx-auto text-green-700" />
                            <h1 className="text-3xl text-gray-900 font-bold uppercase">
                                Thank You
                            </h1>
                            <p>Payment Is Successfully Processsed And Your Order Is On The Way</p>
                            <p>
                                Transaction ID:{" "}
                                <span className="text-main-red">267676GHERT105467</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
