import Head from "next/head"
import { useRouter } from "next/router"
import Breadcrumb from "../elements/breadcrumb"
import Footer from "../footer"
import Header from "../shared/header/Header"
import HeaderMobile from "../shared/header/HeaderMobile"
import NavigationMenu from "../shared/navigation/NavigationMenu"
import NavigationMobile from "../shared/navigation/NavigationMobile"
import PanelMenu from "../shared/panel/PanelMenu"

export default function Layout({ pageTitle, parentTitle, title, keywords, description, children }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>
                    {pageTitle} | Bhotahiti - FIRST & ONLY ONLINE WHOLESALE BAZAAR IN NEPAL
                </title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="stylesheet" href="/assets/fonts/css/all.min.css" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
                />
            </Head>

            <Header />
            <HeaderMobile />
            <NavigationMobile />
            {/* <PanelMenu /> */}

            {router.pathname !== "/" && <Breadcrumb parent={parentTitle} breadcrumb={pageTitle} />}

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
