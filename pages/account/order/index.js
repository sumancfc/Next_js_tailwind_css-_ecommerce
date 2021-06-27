import Layout from "@/components/layout"
import {
    CheckIcon,
    TruckIcon,
    ReceiptTaxIcon,
    HomeIcon,
    XIcon,
    ArchiveIcon,
} from "@heroicons/react/outline"

export default function OrderPage() {
    return (
        <Layout pageTitle="Order">
            <div className=" w-full relative">
                <div className="container my-10 w-full max-w-max md:max-w-4xl">
                    <div className="p-4 sm:p-8 bg-white shadow-md">
                        <div className="order-progress my-5 mx-auto">
                            <ul className="text-center order-track-success">
                                <li className="relative inline-block w-1/4 space-y-3">
                                    <ReceiptTaxIcon className="h-20 mx-auto text-yellow-500" />
                                    <CheckIcon className="fas fa-check order-track-step bg-yellow-500 z-50" />
                                    {/* <span className="bg-red-500 h-1.5 w-28 left-24 absolute top-24 z-10" /> */}
                                    <p className="text-yellow-500">Order Success</p>
                                </li>
                                <li className="relative inline-block w-1/4 space-y-3">
                                    <ArchiveIcon className="h-20 mx-auto text-main-text" />
                                    <XIcon className="fas fa-check order-track-step bg-main-text z-50" />
                                    {/* <span className="bg-red-500 h-1.5 w-28 left-24 absolute top-24 z-10" /> */}
                                    <p className="text-main-text">Packing</p>
                                </li>
                                <li className="relative inline-block w-1/4 space-y-3">
                                    <TruckIcon className="h-20 mx-auto text-main-text" />
                                    <XIcon className="fas fa-check order-track-step bg-main-text z-50" />
                                    {/* <span className="bg-red-500 h-1.5 w-28 left-24 absolute top-24 z-10" /> */}
                                    <p className="text-main-text">In Transition</p>
                                </li>
                                <li className="relative inline-block w-1/4 space-y-3">
                                    <HomeIcon className="h-20 mx-auto text-main-text" />
                                    <XIcon className="fas fa-check order-track-step bg-main-text z-50" />
                                    {/* <span className="bg-red-500 h-1.5 w-28 left-24 absolute top-24 z-10" /> */}
                                    <p className="text-main-text">Delivered.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
