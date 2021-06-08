import Logo from "@/components/elements/logo"
import HeaderActions from "./modules/HeaderActions"
import SearchHeader from "./modules/SearchHeader"

export default function HeaderMobile() {
  return (
    <header className="md:hidden shadow">
      <div className="container p-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Header Action */}
          <HeaderActions className="mobile-action" />
        </div>
        {/* Search Form */}
        <SearchHeader className="w-full mt-2" />
      </div>
    </header>
  )
}
