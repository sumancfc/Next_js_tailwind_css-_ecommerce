import Link from "next/link"

const menus = [
  {
    title: "Products",
    link: "our-products",
  },
  {
    title: "About Us",
    link: "about",
  },
  {
    title: "Contact Us",
    link: "contact",
  },
  {
    title: "FAQ",
    link: "faq",
  },
  {
    title: "Blog",
    link: "blog",
  },
]

export default function FooterTwo({ title }) {
  return (
    <div>
      <div className="mb-3">
        <h2 className="text-xl text-main-red  font-semibold leading-normal capitalize">{title}</h2>
      </div>

      <div className="flex flex-row items-center mb-2">
        <ul>
          {menus.map((menu, i) => (
            <li className="pb-1" key={i}>
              <Link href={`/${menu.link}`}>
                <a className="text-base  font-normal text-yellow-500 uppercase hover:text-main-red transition duration-300">
                  <i className="fas fa-arrow-alt-circle-right mr-1" /> {menu.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
