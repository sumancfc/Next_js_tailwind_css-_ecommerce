import Link from "next/link"

export default function ErrorPage() {
  return (
    <div className="relative h-screen text-center bg-404">
      <div className="container min-h-screen flex flex-col justify-center">
        <figure>
          <img src="/images/404.jpg" alt="404 Page" className="mb-12 mx-auto" />
        </figure>
        <h1 className="mt-5 text-4xl text-red-500 font-semibold uppercase">Page Not Found</h1>
        <Link href="/">
          <a className="my-5 mx-auto p-3 bg-main-red  text-white text-lg font-medium uppercase font-poppins">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  )
}
