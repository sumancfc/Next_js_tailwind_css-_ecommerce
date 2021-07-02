import Link from "next/link"
import PhoneInput from "react-phone-input-2"
import Layout from "@/components/layout"
import Logo from "@/components/elements/logo"
import "react-phone-input-2/lib/style.css"
import styles from "../../../styles/react-input.module.css"
import {Title} from "@/components/elements/title/Title"

export default function FormNameAndNumber({
    name,
    phone,
    setPhone,
    handleChange,
    onContinueSubmit,
}) {
    return (
        <Layout pageTitle="Register">
            <div className="container my-10 w-full max-w-max md:max-w-4xl">
                <div className="flex flex-col md:flex-row md:items-center p-8 bg-white shadow-md md:space-x-10">
                    <div className="order-2 md:order-1 flex-1 mt-5 md:mt-0">
                        <Title title="register" />
                        <div className="mt-5">
                            <form onSubmit={onContinueSubmit}>
                                <div className="space-y-6">
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={handleChange("name")}
                                        placeholder="Enter Your Name"
                                        required
                                    />

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
                                        required
                                    />
                                    <button className="btn-bhotahiti">Continue</button>
                                </div>
                            </form>
                            <div className="mt-4">
                                <p>
                                    Already have an account?
                                    <Link href="/account/login">
                                        <a className="ml-2 underline text-main-blue hover:text-main-red">
                                            Login
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:order-2">
                        <Logo />
                        <span className="block bg-main-red p-2 text-white uppercase rounded">
                            online wholesale bazar
                        </span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
