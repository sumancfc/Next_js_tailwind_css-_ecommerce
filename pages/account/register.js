import { useState } from "react"
import { useRouter } from "next/router"
import FormNameAndNumber from "@/components/pages/register/FormNameAndNumber"
import FormOtp from "@/components/pages/register/FormOtp"
import FormPassword from "@/components/pages/register/FromPassword"

export default function RegisterPage() {
    const [step, setStep] = useState(1)
    const [values, setValues] = useState({
        name: "",
        phone: "",
        code: "",
        password: "",
        confirmPassword: "",
        loading: false,
        error: "",
    })

    const router = useRouter()

    const { name, phone, code, password, loading, error } = values

    const onContinueSubmit = (e) => {
        e.preventDefault()
        setStep(step + 1)
        console.table({ name, phone })
    }

    const verifyCode = (e) => {
        e.preventDefault()
        setStep(step + 1)
        console.table({ name, phone, code })
        console.log("Yout go to next page")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.table({ name, phone, code, password })
        router.push("/account/register")
    }

    const handleChange = (name) => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value })
    }

    switch (step) {
        case 1:
            return (
                <FormNameAndNumber
                    name={name}
                    phone={phone}
                    handleChange={handleChange}
                    onContinueSubmit={onContinueSubmit}
                />
            )

        case 2:
            return (
                <FormOtp
                    name={name}
                    phone={phone}
                    code={code}
                    handleChange={handleChange}
                    verifyCode={verifyCode}
                />
            )

        case 3:
            return (
                <FormPassword
                    name={name}
                    phone={phone}
                    code={code}
                    password={password}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            )
    }
}
