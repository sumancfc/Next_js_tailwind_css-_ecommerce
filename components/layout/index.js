import { useRouter } from "next/router"
import Breadcrumb from "../elements/breadcrumb"
import Footer from "../footer"
import Header from "../shared/header/Header"
import HeaderMobile from "../shared/header/HeaderMobile"
import NavigationMenu from "../shared/navigation/NavigationMenu"
import NavigationMobile from "../shared/navigation/NavigationMobile"
import PanelMenu from "../shared/panel/PanelMenu"
import PageHead from "../elements/head"

export default function Layout({ pageTitle, parentTitle, title, keywords, description, children }) {
    const router = useRouter()
    return (
        <>
            <PageHead
                pageTitle={pageTitle}
                title={title}
                description={description}
                keywords={keywords}
            />

            <Header />
            <HeaderMobile />
            <NavigationMobile />
            {/* <PanelMenu /> */}

            {router.pathname !== "/" && <Breadcrumb parent={parentTitle} child={pageTitle} />}

            {children}

            <Footer />
        </>
    )
}

Layout.defaultProps = {
    pageTitle: "Bhotahiti",
    parentTitle: "",
    title: "Bhotahiti - FIRST & ONLY ONLINE WHOLESALE BAZAAR IN NEPAL for nepali",
    description: "Bhotahiti - FIRST & ONLY ONLINE WHOLESALE BAZAAR IN NEPAL",
    keywords: "bhotahiti,ecommerce,bhotahiti nepal,wholesale,online wholesale,wholesale bazar",
}
