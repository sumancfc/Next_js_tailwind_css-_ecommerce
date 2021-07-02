import Link from "next/link"
import PhoneInput from "react-phone-input-2"
import { CogIcon } from "@heroicons/react/outline"
import "react-phone-input-2/lib/style.css"
import styles from "../../../styles/react-input.module.css"

export default function Login(props) {
    const { phone, password, loading, setPhone, setPassword, onSubmitHandler } = props

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="">
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

                    <input
                        className="form-input mt-5"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                        required
                    />

                    <Link href="/account/forgot-password">
                        <a className="mt-2 block text-right hover:text-main-red">
                            Forgot Password?
                        </a>
                    </Link>
                    <button className="btn-bhotahiti mt-3">
                        {loading ? (
                            <p className="animate-spin">
                                <CogIcon className="h-5" />
                            </p>
                        ) : (
                            <p>Login</p>
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}
