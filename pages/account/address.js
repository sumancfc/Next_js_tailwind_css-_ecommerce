import { useSelector, useDispatch } from "react-redux"
import Link from "next/link"
import UserDashboard from "@/components/layout/UserDashboard"

export default function AddressPage() {
    const cart = useSelector((state) => state.cartData)
    const { shippingAddress } = cart

    console.log(shippingAddress)

    const dispatch = useDispatch()
    return (
        <UserDashboard title="Address">
            <div>
                <h2 className="text-lg sm:text-2xl font-semibold">Shipping Address</h2>
                <div className="mt-4 space-y-1">
                    <p>Address: {shippingAddress.address} </p>
                    <p>City: {shippingAddress.city} </p>
                    <p>Postal Code: {shippingAddress.postalCode} </p>
                    <p>Country: {shippingAddress.country} </p>
                </div>

                <Link href="/account/edit-address">
                    <a className="btn-bhotahiti mt-5">Edit Address</a>
                </Link>
            </div>
        </UserDashboard>
    )
}
