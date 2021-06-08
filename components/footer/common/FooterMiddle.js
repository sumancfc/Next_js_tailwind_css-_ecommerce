import Link from "next/link"

const menus = [
  {
    title: "Account",
    link: "/account",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    link: "/terms-conditions",
  },
]

export default function FooterMiddle() {
  return (
    <div className="my-3">
      <ul className="flex flex-col sm:flex-row sm:items-center justify-center">
        {menus.map((menu, i) => (
          <li className="pb-1 mx-0 sm:mx-5 md:mx-10" key={i}>
            <Link href={`/${menu.link}`}>
              <a className="text-base  font-normal text-gray-300 uppercase hover:text-main-red transition duration-300">
                <i className="fas fa-arrow-alt-circle-right mr-1" /> {menu.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
