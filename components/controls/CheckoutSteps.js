import Link from "next/link"

export default function CheckoutSteps({ step1, step2, step3, step4 }) {
    return (
        <div className="flex justify-between mb-5 font-semibold">
            <div>
                {step1 ? (
                    <Link href="/account/login">Sign In</Link>
                ) : (
                    <a disabled className="text-gray-400">
                        Sign In
                    </a>
                )}
            </div>
            <div>
                {step2 ? (
                    <Link href="/account/shipping">Shipping</Link>
                ) : (
                    <a disabled className="text-gray-400">
                        Shipping
                    </a>
                )}
            </div>
            <div>
                {step3 ? (
                    <Link href="/account/payment">Payment</Link>
                ) : (
                    <a disabled className="text-gray-400">
                        Payment
                    </a>
                )}
            </div>
            <div>
                {step4 ? (
                    <Link href="/account/place-order">Place Order</Link>
                ) : (
                    <a disabled className="text-gray-400">
                        Place Order
                    </a>
                )}
            </div>
        </div>
    )
}
