import FooterTop from "./common/FooterTop"
import FooterMiddle from "./common/FooterMiddle"
import FooterBottom from "./common/FooterBottom"

export default function Footer() {
  return (
    <>
      <div className="bg-gray-900 py-12">
        <div className="max-w-screen-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-5 sm:mx-10 md:mx-auto">
          <FooterTop />

          <hr />

          <FooterMiddle />

          <FooterBottom />
        </div>
      </div>
    </>
  )
}
