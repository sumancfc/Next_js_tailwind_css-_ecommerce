import UserDashboard from "@/components/layout/UserDashboard"
import OrderItem from "@/components/pages/orders/OrderItem"

export default function OrdersPage() {
    return (
        <UserDashboard pageTitle="Orders">
            <OrderItem />
        </UserDashboard>
    )
}
