import Head from "next/head"

export default function PageHead(props) {
    const { pageTitle, title, description, keywords } = props
    return (
        <Head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{pageTitle} | Bhotahiti - FIRST & ONLY ONLINE WHOLESALE BAZAAR IN NEPAL</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
            />
        </Head>
    )
}
