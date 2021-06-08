import Link from "next/link"
import Image from "next/image"

export default function FooterBottom() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-3 sm:space-y-0">
      {/* Copyright */}
      <div>
        <p className="text-gray-300  text-sm">
          Copyright &copy; 2021{" "}
          <Link href="/">
            <a className="text-main-red">Bhotahiti</a>
          </Link>
          . All Rights Reserved.
        </p>
      </div>

      {/* Payment Methods */}
      <div className="flex space-x-3">
        <img src="/images/visa.png" alt="Visa" />
        <img src="/images/amarican_express.png" alt="American Express" />
        <img src="/images/master_card.png" alt="Master Card" />
      </div>
    </div>
  )
}
