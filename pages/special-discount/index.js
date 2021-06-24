import { useState } from "react"
import { toast } from "react-toastify"
import PhoneInput from "react-phone-input-2"
import { CloudUploadIcon } from "@heroicons/react/outline"
import Layout from "@/components/layout"
import "react-phone-input-2/lib/style.css"
import styles from "../../styles/react-input.module.css"

export default function SpecialDiscountPage({}) {
    const [phone, setPhone] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        toast("Form Submission Successful!!!")
    }
    return (
        <Layout pageTitle="Special Discount">
            <div className="w-full relative">
                <div className="container my-10 w-full max-w-max md:max-w-4xl">
                    <p className="bg-main-btn py-4 px-4 sm:px-8 text-white text-sm tracking-wider">
                        We at Bhotahiti.com value each and every one of our clients and strive to
                        provide the best service possible. Students, Teachers, Security Personnel
                        ,Staffs, the elderly, and individuals with disabilities receive special
                        discounts. Now is the time to apply for discounts! You will be provided with
                        a discount code that you can use on your next order.
                    </p>
                    <div className="p-4 sm:p-8 bg-white shadow-md">
                        <div>
                            <div className="">
                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-4">
                                        {/* <label>Please Select your category *</label> */}
                                        <select className="form-input">
                                            <option>Please Select</option>
                                            <option>Special Discount</option>
                                            <option>Differently Abled</option>
                                            <option>Old Aged</option>
                                            <option>Teacher</option>
                                            <option>Student</option>
                                            <option>Security Personal</option>
                                        </select>

                                        <input
                                            className="form-input"
                                            type="text"
                                            placeholder="Enter Your Name"
                                        />

                                        <PhoneInput
                                            country={"np"}
                                            onlyCountries={["np"]}
                                            value={phone}
                                            onChange={(phone) => setPhone(phone)}
                                            masks={{ np: "(...) ..-..-..." }}
                                            inputClass={styles.form_input}
                                            placeholder="+977-9860088834"
                                            containerClass={styles.form_container}
                                            buttonClass={styles.flag_dropdown}
                                        />

                                        <input
                                            className="form-input"
                                            type="email"
                                            placeholder="Enter Your Email"
                                        />

                                        <input
                                            className="form-input"
                                            type="text"
                                            placeholder="Enter Your Address"
                                        />

                                        <div class="relative border-dotted h-32 rounded-lg border-2 border-main-blue bg-gray-100 flex justify-center items-center">
                                            <div class="absolute">
                                                <div class="flex flex-col items-center">
                                                    <CloudUploadIcon className="h-10" />
                                                    <span class="block text-gray-400 font-normal">
                                                        Attach you files here
                                                    </span>
                                                </div>
                                            </div>
                                            <input
                                                type="file"
                                                class="h-full w-full opacity-0"
                                                name=""
                                            />
                                        </div>

                                        <textarea
                                            className="form-input h-20"
                                            placeholder="Enter Your Message"
                                            rows="5"
                                        ></textarea>

                                        <button className="py-3 px-4 bg-main-btn text-white rounded focus:outline-none hover:bg-main-blue">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
