import { useState } from "react"
import { toast } from "react-toastify"
import Layout from "@/components/layout"
import Button from "@/components/elements/button"
import { API_URL } from "@/config/index"

export default function ContactPage({ contacts }) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name, phone, subject, message)
        toast.success("Contact Data Saved.")
        setName("")
        setPhone("")
        setSubject("")
        setMessage("")
    }
    return (
        <Layout pageTitle="Contact Us">
            {/* Google Map */}
            <section className="w-full max-w-screen mx-auto">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.958009289329!2d85.30930227272857!3d27.687043781598152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b4ad7096dd%3A0x29fa3d73b99dcc97!2sKupondole%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1621739798377!5m2!1sen!2snp"
                    className="w-full"
                    height="400"
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </section>

            {/* Contact Details and Forms */}
            <section className="bg-gray-100 flex w-screen sm:w-full h-2/3 justify-center items-center">
                <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 bg-white my-14 mx-6 sm:mx-auto w-full max-w-xl md:max-w-3xl lg:max-w-4xl p-4 sm:p-8 rounded-xl shadow-lg">
                    {/* Contact Details */}
                    <div className="md:w-1/2 md:mr-5 space-y-3">
                        <h2 className="mb-5  font-normal text-2xl text-main-red">Contact Us</h2>

                        {contacts.map((contact) => (
                            <div
                                className="flex items-center p-6 bg-gray-100 rounded-md shadow-md"
                                key={contact.title}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-4xl text-main-red"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={contact.icon}
                                    />
                                </svg>
                                <div className="flex-col  ml-5">
                                    <h4 className="text-lg   leading-snug tracking-tight">
                                        {contact.title}
                                    </h4>
                                    <p className="text-black-400">{contact.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Forms */}
                    <div className="md:w-1/2 md:ml-5">
                        <h2 className="mb-5  font-normal text-2xl text-main-red">Message Us</h2>
                        <div>
                            <form
                                action=""
                                className="flex flex-col space-y-5"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="name"
                                        value={name}
                                        placeholder="Your Name"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="form-input"
                                        type="number"
                                        name="phone"
                                        value={phone}
                                        placeholder="Your Phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="subject"
                                        value={subject}
                                        placeholder="Your Subject"
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="form-input"
                                        type="text"
                                        name="message"
                                        value={message}
                                        placeholder="Your Message"
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>

                                <Button
                                    className="btn-bhotahiti"
                                    type="submit"
                                    ariaLabel="button"
                                    title="Submit"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await fetch(`${API_URL}/api/contact`)

    const contacts = await response.json()

    return {
        props: { contacts },
    }
}
