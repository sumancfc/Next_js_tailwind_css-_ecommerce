import Logo from "@/components/elements/logo"

const contacts = [
  {
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    title: "Address",
    desc: "Kupandole, Near Big Mart",
  },
  {
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Phone",
    desc: "+977-9861565051",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Email",
    desc: "info@bhotahiti.com",
  },
]

export default function FooterOne() {
  return (
    <div>
      <Logo />
      {contacts.map((contact, i) => (
        <div className="flex flex-row items-center mb-2" key={i}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-4xl text-main-red"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={contact.icon} />
          </svg>
          <p className="ml-3 text-base  text-yellow-500">{contact.desc}</p>
        </div>
      ))}
    </div>
  )
}
