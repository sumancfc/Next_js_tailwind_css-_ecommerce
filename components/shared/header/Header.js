import { useEffect } from "react"
import { useRouter } from "next/router"
import Logo from "@/components/elements/logo"
import SearchHeader from "./modules/SearchHeader"
import HeaderActions from "./modules/HeaderActions"
import NavigationMenu from "../navigation/NavigationMenu"
import TopHeader from "./common/TopHeader"
import { stickyHeader } from "utilities/common-helpers"

export default function Header() {
    const router = useRouter()
    useEffect(() => {
        // Header Sticky
        if (router.asPath) window.addEventListener("scroll", stickyHeader)
        return () => {
            window.removeEventListener("scroll", stickyHeader)
        }
    }, [])

    return (
        <header className="hidden md:block">
            {/* Top Header */}
            <TopHeader />

            {/* Middle Header */}
            <div className="bg-white">
                <div className="container py-2.5">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Logo />

                        {/* Search Form */}
                        <SearchHeader className="w-1/2 px-10" />

                        {/* Header Action */}
                        <HeaderActions />
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <NavigationMenu id="headerSticky" dataSticky="true" />
        </header>
    )
}
