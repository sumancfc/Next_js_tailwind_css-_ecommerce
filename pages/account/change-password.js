import { useState } from "react"
import { useRouter } from "next/router"
import UserDashboard from "@/components/layout/UserDashboard"

export default function ChangePasswordPage() {
    const [values, setValues] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    })

    const { oldPassword, newPassword, confirmPassword } = values
    const router = useRouter()

    const changeHandler = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (newPassword !== confirmPassword) return
        setValues({ oldPassword, newPassword, confirmPassword })
        console.table({ oldPassword, newPassword, confirmPassword })
        router.push("/account/dashboard")
    }

    return (
        <UserDashboard pageTitle="Change Password">
            <div>
                <form className="space-y-3" onSubmit={submitHandler}>
                    <input
                        className="form-input"
                        type="password"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={changeHandler("oldPassword")}
                        placeholder="Enter Old Password"
                        required
                    />
                    <input
                        className="form-input"
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={changeHandler("newPassword")}
                        placeholder="Enter New Password"
                        required
                    />
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={changeHandler("confirmPassword")}
                        placeholder="Enter Confrim Password"
                        required
                    />

                    <button className="btn-bhotahiti">Change Password</button>
                </form>
            </div>
        </UserDashboard>
    )
}
