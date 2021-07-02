import PageHead from "../elements/head"
import { Title } from "../elements/title/Title"
import Sidebar from "../pages/userDashboard/Sidebar"

export default function UserDashboard({ pageTitle, title, description, keywords, children }) {
    return (
        <>
            <PageHead
                pageTitle={pageTitle}
                title={title}
                description={description}
                keywords={keywords}
            />

            <Sidebar />
            <div className="relative md:ml-64 px-10">
                <div className="my-5">
                    <Title title={pageTitle} />
                </div>
                <main className="bg-white p-6 shadow-md rounded-md">{children}</main>
            </div>
        </>
    )
}

UserDashboard.defaultProps = {
    pageTitle: "Bhotahiti",
    title: "Bhotahiti - FIRST & ONLY ONLINE WHOLESALE BAZAAR IN NEPAL for nepali",
    description: "Bhotahiti - FIRST & ONLY ONLINE WHOLESALE BAZAAR IN NEPAL",
    keywords: "bhotahiti,ecommerce,bhotahiti nepal,wholesale,online wholesale,wholesale bazar",
}
