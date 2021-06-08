import FooterOne from "./FooterOne"
import FooterThree from "./FooterThree"
import FooterTwo from "./FooterTwo"

export default function FooterTop() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-start">
      <FooterOne />

      <FooterTwo title="Quick Links" />

      <FooterThree title="Partner With Us" />
    </div>
  )
}
