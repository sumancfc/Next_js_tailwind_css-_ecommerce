import { useState } from "react"
import { useRouter } from "next/router"
import PhoneInput from "react-phone-input-2"
import { toast } from "react-toastify"
import Layout from "@/components/layout"
import "react-phone-input-2/lib/style.css"
import styles from "../../styles/react-input.module.css"

export default function ForgotPasswordPage() {
    const [phone, setPhone] = useState("")
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [step, setStep] = useState(1)

    const router = useRouter()

    const getOtp = (e) => {
        e.preventDefault()
        console.log({ phone })
        setStep(step + 1)
        console.log(step)
    }

    const verifyOtp = (e) => {
        e.preventDefault()
        console.log({ phone, code })
        setStep(step + 1)
        console.log(step)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log({ phone, code, password })
        toast.success("Password Reset Success")
        router.push("/account/login")
    }

    return (
        <Layout pageTitle="Forgot Password">
            <div className="container my-10 w-full max-w-max md:max-w-4xl">
                <div className="flex flex-col md:flex-row md:items-center p-8 bg-white shadow-md md:space-x-10">
                    <div className="order-2 md:order-1 flex-1 mt-5 md:mt-0">
                        <div className="mt-5">
                            <form
                                onSubmit={
                                    step === 1 ? getOtp : step === 2 ? verifyOtp : submitHandler
                                }
                            >
                                {step === 1 ? (
                                    <div className="space-y-6">
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
                                        <button className="btn-bhotahiti">Get OTP</button>
                                    </div>
                                ) : step === 2 ? (
                                    <div className="space-y-6">
                                        <PhoneInput
                                            country={"np"}
                                            onlyCountries={["de", "np", "us", "au"]}
                                            value={phone}
                                            inputClass={styles.form_input}
                                            placeholder="+977-9860088834"
                                            containerClass={styles.form_container}
                                            buttonClass={styles.flag_dropdown}
                                            disabled={true}
                                        />

                                        <input
                                            className="form-input"
                                            type="number"
                                            name="code"
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                            placeholder="Enter OTP"
                                            required
                                        />
                                        <button className="btn-bhotahiti">Verify Otp</button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <PhoneInput
                                            country={"np"}
                                            onlyCountries={["de", "np", "us", "au"]}
                                            value={phone}
                                            inputClass={styles.form_input}
                                            placeholder="+977-9860088834"
                                            containerClass={styles.form_container}
                                            buttonClass={styles.flag_dropdown}
                                            disabled={true}
                                        />

                                        <input
                                            className="form-input"
                                            type="number"
                                            name="code"
                                            value={code}
                                            placeholder="Enter OTP"
                                            required
                                            readOnly
                                        />
                                        <input
                                            className="form-input"
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter Password"
                                            required
                                        />
                                        <button className="btn-bhotahiti">Reset Password</button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
