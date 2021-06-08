import Logo from "@/components/elements/logo"

export default function FooterOne() {
  return (
    <div>
      <Logo />

      <div className="flex flex-row items-center mb-2">
        <span className="text-yellow-500 text-base">
          <i className="fa fa-map"></i>
        </span>
        <p className="ml-3 text-base  text-yellow-500">Kupandole, Near Big Mart</p>
      </div>
      <div className="flex flex-row items-center mb-2">
        <span className="text-yellow-500 text-base">
          <i className="fa fa-mobile"></i>
        </span>
        <a
          href="tel:+977-9851053926"
          className="ml-4 text-base  text-yellow-500 hover:text-main-red transition duration-300"
        >
          +977-9851053926
        </a>
      </div>
      <div className="flex flex-row items-center">
        <span className="text-yellow-500 text-base">
          <i className="fa fa-envelope"></i>
        </span>
        <a
          className="ml-3 text-base  text-yellow-500 hover:text-main-red transition duration-300"
          href="mailto:info@bhotahiti.com"
        >
          info@bhotahiti.com
        </a>
      </div>
    </div>
  )
}
