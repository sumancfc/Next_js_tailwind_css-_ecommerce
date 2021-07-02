import { useState } from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import UserDashboard from "@/components/layout/UserDashboard"
import { saveShippingAddress } from "redux/actions/cartActions"
import Address from "@/components/pages/address"

export default function EditAddressPage() {
    const cart = useSelector((state) => state.cartData)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()
    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        console.table({ address, city, postalCode, country })
        router.push("/account/address")
    }

    return (
        <UserDashboard pageTitle="Edit Address">
            <Address
                address={address}
                setAddress={setAddress}
                city={city}
                setCity={setCity}
                postalCode={postalCode}
                setPostalCode={setPostalCode}
                country={country}
                setCountry={setCountry}
                submitHandler={submitHandler}
            />
        </UserDashboard>
    )
}
