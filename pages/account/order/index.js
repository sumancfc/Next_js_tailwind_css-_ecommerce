import Layout from "@/components/layout"
import { CheckCircleIcon } from "@heroicons/react/outline"

export default function OrderPage() {
    return (
        <Layout pageTitle="Order">
            <div className=" w-full relative">
                <div className="container my-10 w-full max-w-max md:max-w-4xl">
                    <div className="p-4 sm:p-8 bg-white shadow-md">
                        <div className="order-progress my-20 mx-auto">
                            <ul className="text-center order-track-success">
                                <li className="relative inline-block w-1/4 space-y-3">
                                    <img
                                        src="/images/icons/order.png"
                                        alt=""
                                        className="w-20 mx-auto"
                                    />
                                    <i className="fas fa-check order-track-step" />
                                    <span className="bg-red-500 h-1.5 w-28 left-24 left block absolute top-1/2 z-10" />
                                    {/* <i className=" fa fa-user" /> */}
                                    <p>Order Success</p>
                                </li>
                                <li className="relative inline-block w-1/4 space-y-3">
                                    <img
                                        src="/images/icons/order.png"
                                        alt=""
                                        className="w-20 mx-auto"
                                    />
                                    <i className="fas fa-check bg-main-blue h-9 w-9 text-white rounded-full p-2 mx-auto order-track-step" />

                                    <p>Packing</p>
                                </li>
                                <li className="relative inline-block w-1/4 space-y-3">
                                    <img
                                        src="/images/icons/order.png"
                                        alt=""
                                        className="w-20 mx-auto"
                                    />
                                    <i className="fas fa-check bg-main-blue h-9 w-9 text-white rounded-full p-2 mx-auto order-track-step" />

                                    <p>In Transition</p>
                                </li>
                                <li className="relative inline-block w-1/4 space-y-3">
                                    <img
                                        src="/images/icons/order.png"
                                        alt=""
                                        className="w-20 mx-auto"
                                    />
                                    <i className="fas fa-check bg-main-blue h-9 w-9 text-white rounded-full p-2 mx-auto order-track-step" />

                                    <p>Delivered</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
